import { useEffect, useMemo, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction:
    "You are a Model UN coach. Only answer questions about Model UN, diplomacy, public speaking, resolution writing, parliamentary procedure, and related topics. Politely decline any unrelated questions by saying: 'I can only assist with Model UN and diplomacy topics.'",
});

const PAGE_LINKS = [
  { id: "page-1", label: "General Assembly", title: "Learning Path Dashboard", href: "/learning-path/page-1" },
  { id: "page-2", label: "Crisis", title: "Learning Path Dashboard", href: "/learning-path/page-2" },
  { id: "page-3", label: "Awards", title: "Learning Path Dashboard", href: "/learning-path/page-3" },
];

const studySteps = [
  { title: "Orient", text: "See where you are, what is complete, and what comes next.", icon: "explore" },
  { title: "Learn", text: "Open a module and focus on the core concept without clutter.", icon: "menu_book" },
  { title: "Prove", text: "Use the quiz to confirm the idea stuck before moving on.", icon: "quiz" },
];

const learningSignals = [
  "You know where you are.",
  "You know what to do next.",
  "You can keep moving confidently.",
];

function Pill({ children, tone = "blue" }: { children?: React.ReactNode; tone?: "blue" | "green" | "slate" }) {
  const tones: Record<typeof tone, React.CSSProperties> = {
    blue: { background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.18)", color: "#7dd3fc" },
    green: { background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.18)", color: "#86efac" },
    slate: { background: "rgba(15,23,42,0.9)", border: "1px solid rgba(148,163,184,0.12)", color: "#cbd5e1" },
  };
  return (
    <span style={{
      padding: "0.45rem 0.8rem",
      borderRadius: "999px",
      fontSize: "0.68rem",
      fontWeight: 800,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...tones[tone],
    }}>
      {children}
    </span>
  );
}

// ─── Responsive hook ──────────────────────────────
function useResponsive() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return { isMobile };
}

export default function LearningPathDashboard() {
  const navigate = useNavigate();
  const { pageId } = useParams<{ pageId?: string }>();
  const currentPageId = PAGE_LINKS.some((p) => p.id === pageId) ? (pageId as string) : PAGE_LINKS[0].id;
  const currentPage = PAGE_LINKS.find((p) => p.id === currentPageId) || PAGE_LINKS[0];
  const otherPageLinks = PAGE_LINKS.filter((p) => p.id !== currentPageId);
  const { isMobile } = useResponsive();

  // ─── State ────────────────────────────────────────
  const [currentModules, setCurrentModules] = useState<any[]>([]);
  const [modulesLoading, setModulesLoading] = useState(true);
  const [activeModuleSortOrder, setActiveModuleSortOrder] = useState(1);
  const [viewMode, setViewMode] = useState<"journey" | "module">("journey");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // AI Chat states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [isAiTyping, setIsAiTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "model"; text: string }[]>([
    { role: "model", text: "Welcome Delegate. I am your Gemini 2.5 Flash assistant. How can I aid your preparation today?" }
  ]);

  // Auth & daily limit
  const [authUser, setAuthUser] = useState<any>(null);
  const [dailyCount, setDailyCount] = useState(0);
  const [limitReached, setLimitReached] = useState(false);
  const DAILY_LIMIT = 20;

  useEffect(() => {
    signInAnonymously(auth).then((cred) => setAuthUser(cred.user)).catch(console.error);
    const unsub = onAuthStateChanged(auth, (user) => { if (user) setAuthUser(user); });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!authUser) return;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const docRef = doc(db, "daily_limits", authUser.uid);
    getDoc(docRef).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        const lastReset = data.lastReset?.toDate?.() || new Date(0);
        if (lastReset < today) {
          setDailyCount(0);
        } else {
          setDailyCount(data.count || 0);
          if (data.count >= DAILY_LIMIT) setLimitReached(true);
        }
      }
    });
  }, [authUser]);

  const incrementDailyCount = async () => {
    if (!authUser) return;
    const docRef = doc(db, "daily_limits", authUser.uid);
    await getDoc(docRef).then(async (snap) => {
      const newCount = dailyCount + 1;
      await setDoc(docRef, { count: newCount, lastReset: serverTimestamp() }, { merge: true });
      setDailyCount(newCount);
      if (newCount >= DAILY_LIMIT) setLimitReached(true);
    });
  };

  // ─── Fetch modules ──────────────────────────────
  useEffect(() => {
    const fetchModules = async () => {
      setModulesLoading(true);
      try {
        const q = query(collection(db, "learning_modules"), where("page_id", "==", currentPageId), orderBy("sort_order"));
        const snap = await getDocs(q);
        const mods = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const withQuizzes = await Promise.all(
          mods.map(async (mod) => {
            const quizSnap = await getDocs(collection(db, "learning_modules", mod.id, "quiz_questions"));
            mod.quiz_questions = quizSnap.docs.map((q) => ({ id: q.id, ...q.data() }));
            return mod;
          })
        );
        setCurrentModules(withQuizzes);
      } catch (err) {
        console.error("Failed to load modules:", err);
      } finally {
        setModulesLoading(false);
      }
    };
    fetchModules();
  }, [currentPageId]);

  const totalModules = currentModules.length;
  const activeModule = currentModules.find((m) => m.sort_order === activeModuleSortOrder) || currentModules[0];
  const nextModule = currentModules.find((m) => m.sort_order === Math.min(activeModuleSortOrder + 1, totalModules));
  const progressPercent = totalModules > 0 ? Math.round((activeModuleSortOrder / totalModules) * 100) : 0;
  const completedModules = Math.max(activeModuleSortOrder - 1, 0);
  const remainingModules = Math.max(totalModules - activeModuleSortOrder, 0);

  const getDiplomaticRank = (moduleOrder: number) => {
    if (moduleOrder <= 2) return "Observer";
    if (moduleOrder <= 4) return "Attaché";
    if (moduleOrder <= 6) return "Delegate";
    return "Ambassador";
  };

  const activeQuizQuestions = activeModule?.quiz_questions || [];
  const currentQuestion = useMemo(() => activeQuizQuestions[currentQuizQuestion], [activeQuizQuestions, currentQuizQuestion]);

  const openModule = (sortOrder: number) => {
    setActiveModuleSortOrder(sortOrder);
    setViewMode("module");
    resetQuizState();
    setIsSidebarOpen(false);
  };

  const resetQuizState = () => {
    setShowQuiz(false);
    setQuizComplete(false);
    setQuizPassed(false);
    setCurrentQuizQuestion(0);
    setQuizAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  useEffect(() => {
    setActiveModuleSortOrder(1);
    setViewMode("journey");
    setIsSidebarOpen(false);
    resetQuizState();
  }, [currentPageId]);

  const startQuiz = () => { resetQuizState(); setShowQuiz(true); };

  const handleQuizAnswer = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    setTimeout(() => {
      const newAnswers = [...quizAnswers, answerIndex];
      setQuizAnswers(newAnswers);
      if (currentQuizQuestion < activeQuizQuestions.length - 1) {
        setCurrentQuizQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        const correctCount = newAnswers.filter((ans, idx) => ans === activeQuizQuestions[idx]?.correct_index).length;
        setQuizPassed(correctCount >= 2);
        setQuizComplete(true);
        setShowFeedback(false);
      }
    }, 1200);
  };

  const handleFinishStudy = () => {
    if (!quizPassed) return;
    if (activeModuleSortOrder < totalModules) setActiveModuleSortOrder((prev) => prev + 1);
    setViewMode("journey");
    resetQuizState();
  };

  const handleSendChatMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isAiTyping || limitReached) return;
    const userMessage = chatInput;
    setChatMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setChatInput("");
    setIsAiTyping(true);
    try {
      const result = await model.generateContent(userMessage);
      const text = result.response.text();
      setChatMessages((prev) => [...prev, { role: "model", text }]);
      await incrementDailyCount();
    } catch (error) {
      setChatMessages((prev) => [...prev, { role: "model", text: "I encountered a diplomatic error. Please try again." }]);
    } finally {
      setIsAiTyping(false);
    }
  };

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatMessages, isChatOpen]);

  const studyScore = activeModuleSortOrder === 1 ? "Getting started" : activeModuleSortOrder < totalModules ? "Building momentum" : "Final checkpoint";
  const hasQuiz = activeQuizQuestions.length > 0;
  const nextActionLabel =
    viewMode === "journey" ? "Open current module" :
    showQuiz ? "Continue knowledge check" :
    quizComplete ? "Finish and move forward" :
    hasQuiz ? "Begin knowledge check" : "Module complete";

  if (modulesLoading) {
    return (
      <div className="dark flex items-center justify-center h-screen text-white bg-[#0f172a]">
        <p>Loading learning path...</p>
      </div>
    );
  }

  // ─── Responsive helpers ──────────────────────────
  const column1 = isMobile ? "span 12" : "span 4";
  const column2 = isMobile ? "span 12" : "span 8";
  const mainMarginLeft = isMobile ? 0 : 288;
  const sidebarTransform = isMobile ? (isSidebarOpen ? "translateX(0)" : "translateX(-100%)") : "translateX(0)";
  const moduleTitleFontSize = isMobile ? 24 : 30;
  const heroFontSize = isMobile ? 32 : 56;
  const pagePadding = isMobile ? "1rem" : "2rem";

  return (
    <div className="dark">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@300;400;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { min-height: 100%; }
        body {
          background: radial-gradient(circle at top, rgba(14,165,233,0.12), transparent 28%),
                      radial-gradient(circle at 20% 10%, rgba(56,189,248,0.08), transparent 22%),
                      #0f172a;
          color: #e5e2e1;
          font-family: 'Public Sans', sans-serif;
          overflow-x: hidden;
        }
        ::selection { background-color: #075985; color: #ffffff; }
        button { font-family: inherit; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-smoothing: antialiased;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.04;
        }
        .panel {
          background: linear-gradient(145deg, rgba(15,23,42,0.88), rgba(7,89,133,0.10));
          border: 1px solid rgba(14,165,233,0.14);
          box-shadow: 0 18px 48px rgba(0,0,0,0.26);
          backdrop-filter: blur(14px);
        }
        .panel-soft {
          background: linear-gradient(145deg, rgba(7,89,133,0.14), rgba(15,23,42,0.82));
          border: 1px solid rgba(14,165,233,0.10);
          box-shadow: 0 16px 40px rgba(0,0,0,0.20);
          backdrop-filter: blur(10px);
        }
        .sidebar {
          width: 288px;
          transition: transform 0.28s ease;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .sidebar::-webkit-scrollbar { width: 0; height: 0; display: none; }
        .main-content { transition: margin-left 0.28s ease; }
        .menu-btn { display: none !important; }
        .fade-in { animation: fadeIn 0.35s ease-out both; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chat-scroll::-webkit-scrollbar { width: 6px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(14,165,233,0.2); border-radius: 10px; }
        @media (max-width: 768px) {
          .menu-btn { display: inline-flex !important; }
          .hide-mobile { display: none !important; }
          .nav-container { padding: 0 1rem !important; }
          .page-pad { padding-left: 1rem !important; padding-right: 1rem !important; }
        }
      `}</style>

      {/* Top Navigation Bar */}
      <nav className="nav-container" style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        width: "100%", padding: "0 2rem", height: 72,
        position: "fixed", top: 0, zIndex: 60,
        background: "rgba(15, 23, 42, 0.74)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(14, 165, 233, 0.09)",
        ...(isMobile ? { padding: "0 1rem" } : {}),
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 0 }}>
          <button className="menu-btn" onClick={() => setIsSidebarOpen((prev) => !prev)} style={{
            background: "transparent", border: "none", color: "#0ea5e9",
            cursor: "pointer", padding: "0.5rem",
            display: isMobile ? "inline-flex" : "none",
          }}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button onClick={() => navigate("/")} style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            padding: "0.7rem 1rem", backgroundColor: "rgba(7, 89, 133, 0.24)",
            border: "1px solid rgba(14, 165, 233, 0.18)", borderRadius: 14,
            color: "#0ea5e9", cursor: "pointer", fontSize: "0.75rem",
            fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
            flexShrink: 0,
          }}>
            <span className="material-symbols-outlined">home</span> Home
          </button>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: "0.6rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.22em", color: "#0ea5e9", marginBottom: 3 }}>
              United Nations Training Protocol
            </p>
            <h1 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.25rem", fontStyle: "italic", color: "#ffffff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Learn MUN
            </h1>
          </div>
        </div>
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Pill tone="slate">{currentPage.label}</Pill>
          <Pill tone="blue">{progressPercent}% complete</Pill>
          <Pill tone="green">{studyScore}</Pill>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="sidebar" style={{
        position: "fixed", left: 0, top: 72, bottom: 0, zIndex: 50,
        overflowY: "auto", padding: "1.5rem",
        background: "rgba(15, 23, 42, 0.95)",
        borderRight: "1px solid rgba(14, 165, 233, 0.09)",
        backdropFilter: "blur(18px)",
        transform: sidebarTransform,
        width: isMobile ? "min(88vw, 340px)" : "288px",
      }}>
        {/* Keep sidebar content unchanged, but we'll wrap in base same structure */}
        <div className="panel" style={{ borderRadius: 20, padding: 18, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: 6 }}>Learning path</p>
              <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: 18, color: "#fff" }}>{currentPage.label}</h2>
            </div>
            <div style={{ width: 46, height: 46, borderRadius: 16, display: "grid", placeItems: "center", background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.18)" }}>
              <span className="material-symbols-outlined" style={{ color: "#0ea5e9" }}>route</span>
            </div>
          </div>
          <p style={{ color: "#cbd5e1", lineHeight: 1.55, fontSize: 14 }}>
            Move between the three topics without changing the learning layout.
          </p>
        </div>
        <div className="panel-soft" style={{ borderRadius: 20, padding: 18, marginBottom: 16 }}>
          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 12 }}>Other topics</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {otherPageLinks.map((page) => (
              <button key={page.id} onClick={() => { navigate(page.href); setIsSidebarOpen(false); }}
                style={{
                  padding: "1rem", borderRadius: 16, cursor: "pointer",
                  background: "rgba(15,23,42,0.86)", border: "1px solid rgba(14,165,233,0.12)",
                  display: "flex", alignItems: "center", gap: 12, textAlign: "left", width: "100%",
                }}>
                <div style={{ width: 40, height: 40, borderRadius: 14, display: "grid", placeItems: "center", background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.16)" }}>
                  <span className="material-symbols-outlined" style={{ color: "#0ea5e9", fontSize: 20 }}>chevron_right</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", marginBottom: 4 }}>{page.label}</p>
                  <p style={{ color: "#e2e8f0", fontFamily: "'Noto Serif', serif", lineHeight: 1.3 }}>{page.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="panel-soft" style={{ borderRadius: 20, padding: 18 }}>
          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 12 }}>Study loop</p>
          {studySteps.map((step, index) => (
            <div key={step.title} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: 14, display: "grid", placeItems: "center", background: index === 0 ? "rgba(14,165,233,0.14)" : "rgba(15,23,42,0.88)", border: "1px solid rgba(14,165,233,0.14)", flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ color: "#0ea5e9", fontSize: 20 }}>{step.icon}</span>
              </div>
              <div>
                <p style={{ fontWeight: 800, color: "#fff", marginBottom: 4 }}>{step.title}</p>
                <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.5 }}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content" style={{
        paddingTop: 72,
        minHeight: "100vh",
        position: "relative",
        marginLeft: mainMarginLeft,
      }}>
        <div className="grain" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} />
        <div className="fade-in" style={{ position: "relative", zIndex: 2 }}>
          {viewMode === "journey" && (
            <div style={{ width: "100%" }}>
              <section className="page-pad" style={{ padding: `${pagePadding} ${pagePadding} 1rem` }}>
                <div className="panel" style={{ borderRadius: 28, padding: "1.5rem", overflow: "hidden" }}>
                  <div className="stack-mobile" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: 24 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                        <Pill tone="blue">{currentPage.label}</Pill>
                        <Pill tone="blue">Module {activeModuleSortOrder} of {totalModules}</Pill>
                        <Pill tone="green">{progressPercent}% ready</Pill>
                      </div>
                      <p style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.24em", color: "#0ea5e9", marginBottom: 10 }}>Learning journey</p>
                      <h2 className="hero-title" style={{ fontFamily: "'Noto Serif', serif", fontSize: heroFontSize, fontStyle: "italic", lineHeight: 1.02, color: "#fff", maxWidth: 900, marginBottom: 12 }}>
                        Learn MUN in a way that feels clear, guided, and motivating.
                      </h2>
                      <p style={{ maxWidth: 780, fontSize: 16, lineHeight: 1.7, color: "#cbd5e1" }}>
                        {learningSignals[(activeModuleSortOrder - 1) % learningSignals.length]}
                        <span style={{ color: "#38bdf8" }}> Continue from the current module, track progress, and move forward with confidence.</span>
                      </p>
                    </div>
                    <div style={{ minWidth: isMobile ? "100%" : 280, display: "flex", flexDirection: "column", gap: 12 }}>
                      <button onClick={() => openModule(activeModuleSortOrder)} style={{
                        padding: "1rem 1.25rem", borderRadius: 18, border: "1px solid rgba(14,165,233,0.18)",
                        background: "linear-gradient(135deg, rgba(7,89,133,0.92), rgba(14,165,233,0.78))",
                        color: "#fff", cursor: "pointer", fontWeight: 900, letterSpacing: "0.08em",
                        textTransform: "uppercase", display: "flex", alignItems: "center",
                        justifyContent: "space-between", gap: 16,
                        boxShadow: "0 18px 40px rgba(7,89,133,0.32)",
                      }}>
                        <span>{nextActionLabel}</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                      <div className="panel-soft" style={{ borderRadius: 20, padding: 16 }}>
                        {/* same rank & progress bar */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                          <div>
                            <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.18em", color: "#94a3b8", marginBottom: 4 }}>Current status</p>
                            <p style={{ color: "#fff", fontFamily: "'Noto Serif', serif", fontSize: 18 }}>{getDiplomaticRank(activeModuleSortOrder)}</p>
                          </div>
                          <div style={{ width: 46, height: 46, borderRadius: 16, display: "grid", placeItems: "center", background: "rgba(56,189,248,0.10)", border: "1px solid rgba(56,189,248,0.16)" }}>
                            <span className="material-symbols-outlined" style={{ color: "#38bdf8" }}>star</span>
                          </div>
                        </div>
                        <div style={{ height: 8, borderRadius: 999, background: "rgba(7,89,133,0.28)", overflow: "hidden", marginBottom: 10 }}>
                          <div style={{ width: `${progressPercent}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #0ea5e9, #38bdf8)" }} />
                        </div>
                        <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.5 }}>{completedModules} completed · {remainingModules} ahead · next up: {nextModule?.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="page-pad" style={{ padding: `0 ${pagePadding} 2rem` }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(12, minmax(0, 1fr))", gap: 20 }}>
                  <div style={{ gridColumn: column1 }}>
                    {/* Command center & study habits */}
                    <div className="panel-soft" style={{ borderRadius: 24, padding: 20, marginBottom: 16 }}>
                      <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 12 }}>Command center</p>
                      <h3 style={{ fontFamily: "'Noto Serif', serif", fontSize: 26, color: "#fff", marginBottom: 10 }}>{activeModule?.title}</h3>
                      <p style={{ color: "#cbd5e1", lineHeight: 1.7, marginBottom: 18 }}>{activeModule?.short_desc}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
                        <div style={{ padding: 14, borderRadius: 18, background: "rgba(15,23,42,0.84)", border: "1px solid rgba(14,165,233,0.12)" }}>
                          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.16em", color: "#94a3b8", marginBottom: 6 }}>Current step</p>
                          <p style={{ color: "#fff", fontWeight: 800 }}>Module {activeModule?.sort_order}</p>
                        </div>
                        <div style={{ padding: 14, borderRadius: 18, background: "rgba(15,23,42,0.84)", border: "1px solid rgba(14,165,233,0.12)" }}>
                          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.16em", color: "#94a3b8", marginBottom: 6 }}>Next step</p>
                          <p style={{ color: "#fff", fontWeight: 800 }}>{nextModule ? nextModule.title : "Wrap up"}</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel-soft" style={{ borderRadius: 24, padding: 20 }}>
                      <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 12 }}>Study habits</p>
                      {studySteps.map((step, index) => (
                        <div key={step.title} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                          <div style={{ width: 40, height: 40, borderRadius: 14, display: "grid", placeItems: "center", background: index === 0 ? "rgba(14,165,233,0.14)" : "rgba(15,23,42,0.88)", border: "1px solid rgba(14,165,233,0.12)", flexShrink: 0 }}>
                            <span className="material-symbols-outlined" style={{ color: "#0ea5e9", fontSize: 20 }}>{step.icon}</span>
                          </div>
                          <div>
                            <p style={{ color: "#fff", fontWeight: 800, marginBottom: 4 }}>{step.title}</p>
                            <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.5 }}>{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ gridColumn: column2 }}>
                    {/* Journey map */}
                    <div className="panel" style={{ borderRadius: 28, padding: 22, marginBottom: 18 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 18 }}>
                        <div>
                          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 6 }}>The journey map</p>
                          <h3 className="module-title" style={{ fontFamily: "'Noto Serif', serif", fontSize: 28, color: "#fff" }}>Choose where to continue</h3>
                        </div>
                        <Pill tone="slate">{progressPercent}% ready</Pill>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {currentModules.map((mod) => {
                          const isActive = mod.sort_order === activeModuleSortOrder;
                          const isCompleted = mod.sort_order < activeModuleSortOrder;
                          const isUpcoming = mod.sort_order > activeModuleSortOrder;
                          return (
                            <button key={mod.id} onClick={() => openModule(mod.sort_order)}
                              style={{
                                position: "relative", padding: "1rem", borderRadius: 22,
                                cursor: "pointer", width: "100%", textAlign: "left",
                                display: "flex", alignItems: "flex-start", gap: 14,
                                background: isActive ? "linear-gradient(145deg, rgba(7,89,133,0.36), rgba(15,23,42,0.96))" :
                                  isCompleted ? "linear-gradient(145deg, rgba(15,118,110,0.20), rgba(15,23,42,0.92))" : "rgba(15,23,42,0.84)",
                                border: `1px solid ${isActive ? "rgba(14,165,233,0.34)" : isCompleted ? "rgba(34,197,94,0.18)" : "rgba(14,165,233,0.10)"}`,
                                boxShadow: isActive ? "0 18px 40px rgba(7,89,133,0.22)" : "none",
                                flexDirection: isMobile ? "column" : "row",
                              }}>
                              <div style={{ width: 54, height: 54, borderRadius: 18, flexShrink: 0, display: "grid", placeItems: "center", background: isActive ? "rgba(14,165,233,0.16)" : isCompleted ? "rgba(34,197,94,0.14)" : "rgba(7,89,133,0.12)", border: "1px solid rgba(14,165,233,0.12)" }}>
                                <span className="material-symbols-outlined" style={{ color: isActive ? "#7dd3fc" : isCompleted ? "#86efac" : "#94a3b8", fontSize: 24, fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{mod.icon}</span>
                              </div>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 8 }}>
                                  <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", color: isActive ? "#7dd3fc" : isCompleted ? "#86efac" : "#94a3b8" }}>Module {mod.sort_order}</span>
                                  {isActive && <Pill tone="blue">Current</Pill>}
                                  {isCompleted && <Pill tone="green">Completed</Pill>}
                                  {isUpcoming && <Pill tone="slate">Upcoming</Pill>}
                                </div>
                                <h4 style={{ fontFamily: "'Noto Serif', serif", color: "#fff", fontSize: 20, marginBottom: 6 }}>{mod.title}</h4>
                                <p style={{ color: "#cbd5e1", lineHeight: 1.6, fontSize: 14 }}>{mod.short_desc}</p>
                              </div>
                              <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 8, color: isActive ? "#7dd3fc" : "#64748b", marginTop: isMobile ? 8 : 0 }}>
                                <span style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>Open</span>
                                <span className="material-symbols-outlined">chevron_right</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {viewMode === "module" && (
            <div style={{ width: "100%" }}>
              <section className="page-pad" style={{ padding: `${pagePadding} ${pagePadding} 1rem` }}>
                <div className="panel" style={{ borderRadius: 28, padding: "1.4rem", position: "sticky", top: 86, zIndex: 8 }}>
                  <div className="stack-mobile" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
                      <button onClick={() => setViewMode("journey")} style={{ width: 50, height: 50, borderRadius: 16, background: "rgba(7,89,133,0.24)", border: "1px solid rgba(14,165,233,0.14)", color: "#0ea5e9", cursor: "pointer", flexShrink: 0, display: "grid", placeItems: "center" }}>
                        <span className="material-symbols-outlined">arrow_back</span>
                      </button>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                          <Pill tone="blue">Module {activeModule?.sort_order}</Pill>
                          <Pill tone="blue">{progressPercent}% ready</Pill>
                          <Pill tone="green">{studyScore}</Pill>
                        </div>
                        <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.22em", color: "#0ea5e9", marginBottom: 6 }}>Focus mode</p>
                        <h2 className="module-title" style={{ fontFamily: "'Noto Serif', serif", fontSize: moduleTitleFontSize, color: "#fff" }}>{activeModule?.title}</h2>
                      </div>
                    </div>
                    <button onClick={() => openModule(activeModuleSortOrder)} style={{ padding: "0.95rem 1.1rem", borderRadius: 16, border: "1px solid rgba(14,165,233,0.16)", background: "rgba(7,89,133,0.22)", color: "#e2e8f0", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
                      <span className="material-symbols-outlined" style={{ color: "#0ea5e9" }}>refresh</span> Reset
                    </button>
                  </div>
                </div>
              </section>

              <section className="page-pad" style={{ padding: `0 ${pagePadding} 2rem` }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(12, minmax(0, 1fr))", gap: 20 }}>
                  <aside style={{ gridColumn: column1, display: "flex", flexDirection: "column", gap: 16 }}>
                    {/* At a glance, momentum, what this page does */}
                    <div className="panel-soft" style={{ borderRadius: 24, padding: 20 }}>
                      <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 12 }}>At a glance</p>
                      <p style={{ color: "#fff", fontFamily: "'Noto Serif', serif", fontSize: 24, marginBottom: 8 }}>{activeModule?.title}</p>
                      <p style={{ color: "#cbd5e1", lineHeight: 1.7, marginBottom: 18 }}>{activeModule?.short_desc}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
                        <div style={{ padding: 14, borderRadius: 18, background: "rgba(15,23,42,0.84)", border: "1px solid rgba(14,165,233,0.12)" }}>
                          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.16em", color: "#94a3b8", marginBottom: 6 }}>Rank</p>
                          <p style={{ color: "#fff", fontWeight: 800 }}>{getDiplomaticRank(activeModuleSortOrder)}</p>
                        </div>
                        <div style={{ padding: 14, borderRadius: 18, background: "rgba(15,23,42,0.84)", border: "1px solid rgba(14,165,233,0.12)" }}>
                          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.16em", color: "#94a3b8", marginBottom: 6 }}>Next</p>
                          <p style={{ color: "#fff", fontWeight: 800 }}>{nextModule ? nextModule.title : "Wrap up"}</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel-soft" style={{ borderRadius: 24, padding: 20 }}>
                      <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 12 }}>Your momentum</p>
                      <div style={{ height: 8, borderRadius: 999, background: "rgba(7,89,133,0.26)", overflow: "hidden", marginBottom: 10 }}>
                        <div style={{ width: `${progressPercent}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #0ea5e9, #38bdf8)" }} />
                      </div>
                      <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{completedModules} completed · {remainingModules} remaining.</p>
                    </div>
                    <div className="panel-soft" style={{ borderRadius: 24, padding: 20 }}>
                      <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 12 }}>What this page does</p>
                      {studySteps.map((step, index) => (
                        <div key={step.title} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
                          <div style={{ width: 38, height: 38, borderRadius: 14, display: "grid", placeItems: "center", background: index === 0 ? "rgba(14,165,233,0.14)" : "rgba(15,23,42,0.88)", border: "1px solid rgba(14,165,233,0.12)", flexShrink: 0 }}>
                            <span className="material-symbols-outlined" style={{ color: "#0ea5e9", fontSize: 20 }}>{step.icon}</span>
                          </div>
                          <div>
                            <p style={{ color: "#fff", fontWeight: 800, marginBottom: 4 }}>{step.title}</p>
                            <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.5 }}>{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </aside>
                  <div style={{ gridColumn: column2, display: "flex", flexDirection: "column", gap: 18 }}>
                    <div className="panel" style={{ borderRadius: 28, padding: 22 }}>
                      <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 12 }}>Primary lesson</p>
                      <h3 style={{ fontFamily: "'Noto Serif', serif", fontSize: 28, color: "#fff", marginBottom: 12 }}>Read, then practice</h3>
                      <p style={{ color: "#cbd5e1", lineHeight: 1.7, maxWidth: 720, marginBottom: 18 }}>
                        Keep the lesson visually simple: one idea at a time, one clear path forward, and a strong checkpoint before moving on.
                      </p>
                      <div style={{ padding: 16, borderRadius: 20, background: "rgba(7,89,133,0.16)", border: "1px solid rgba(14,165,233,0.12)", marginBottom: 18, display: "flex", alignItems: "flex-start", gap: 12, flexDirection: isMobile ? "column" : "row" }}>
                        <div style={{ width: 44, height: 44, borderRadius: 16, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.16)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                          <span className="material-symbols-outlined" style={{ color: "#0ea5e9" }}>north_east</span>
                        </div>
                        <div>
                          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.18em", color: "#7dd3fc", marginBottom: 4 }}>Suggested next action</p>
                          <p style={{ color: "#e2e8f0", lineHeight: 1.7 }}>Read the lesson, then use the quiz to check whether the main idea feels clear and usable.</p>
                        </div>
                      </div>
                      <div style={{ fontSize: 16, lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: activeModule?.content_html || "" }} />
                    </div>

                    {!showQuiz && !quizComplete && (
                      <button onClick={startQuiz} style={{ padding: "1.1rem 1.4rem", borderRadius: 18, border: "1px solid rgba(14,165,233,0.18)", background: "linear-gradient(135deg, rgba(7,89,133,0.92), rgba(14,165,233,0.78))", color: "#fff", cursor: "pointer", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, boxShadow: "0 18px 40px rgba(7,89,133,0.32)" }}>
                        <span>{nextActionLabel}</span>
                        <span className="material-symbols-outlined">quiz</span>
                      </button>
                    )}

                    {showQuiz && !quizComplete && currentQuestion && (
                      <div className="panel-soft" style={{ borderRadius: 28, padding: 22 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
                          <div>
                            <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0ea5e9", marginBottom: 6 }}>Checkpoint</p>
                            <h4 style={{ fontFamily: "'Noto Serif', serif", fontSize: 24, color: "#fff" }}>Question {currentQuizQuestion + 1} of {activeQuizQuestions.length}</h4>
                          </div>
                          <Pill tone="slate">Need 2 correct to pass</Pill>
                        </div>
                        <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 18, lineHeight: 1.45 }}>{currentQuestion.question_text}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          {currentQuestion.answers.map((answer: string, idx: number) => {
                            const isCorrect = idx === currentQuestion.correct_index;
                            const isSelected = selectedAnswer === idx;
                            const showResult = showFeedback && isSelected;
                            return (
                              <button key={idx} onClick={() => !showFeedback && handleQuizAnswer(idx)} disabled={showFeedback}
                                style={{
                                  padding: "1rem 1.1rem",
                                  backgroundColor: showResult ? (isCorrect ? "rgba(34,197,94,0.16)" : "rgba(239,68,68,0.16)") : "rgba(15,23,42,0.74)",
                                  color: "#ffffff",
                                  border: showResult ? (isCorrect ? "1px solid #22c55e" : "1px solid #ef4444") : "1px solid rgba(14,165,233,0.18)",
                                  borderRadius: 18, cursor: showFeedback ? "default" : "pointer", textAlign: "left", fontSize: 16,
                                  display: "flex", alignItems: "center", gap: 12,
                                }}>
                                <span style={{ width: 28, height: 28, borderRadius: 999, display: "grid", placeItems: "center", background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.16)", flexShrink: 0, color: "#7dd3fc", fontSize: 12, fontWeight: 900 }}>{idx + 1}</span>
                                <span style={{ flex: 1, lineHeight: 1.5 }}>{answer}</span>
                                {showResult && (
                                  <span className="material-symbols-outlined" style={{ color: isCorrect ? "#22c55e" : "#ef4444", fontSize: 24 }}>
                                    {isCorrect ? "check_circle" : "cancel"}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {quizComplete && (
                      <div className="panel-soft" style={{ borderRadius: 28, padding: 22 }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                          <div style={{ width: 52, height: 52, borderRadius: 18, background: quizPassed ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)", border: quizPassed ? "1px solid rgba(34,197,94,0.16)" : "1px solid rgba(239,68,68,0.16)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                            <span className="material-symbols-outlined" style={{ color: quizPassed ? "#22c55e" : "#ef4444", fontSize: 30 }}>{quizPassed ? "check_circle" : "error"}</span>
                          </div>
                          <div>
                            <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: quizPassed ? "#22c55e" : "#ef4444", marginBottom: 6 }}>{quizPassed ? "Checkpoint complete" : "Checkpoint not passed"}</p>
                            <h4 style={{ fontFamily: "'Noto Serif', serif", fontSize: 24, color: "#fff", marginBottom: 8 }}>{quizPassed ? "Nice work — keep the momentum going." : "You need 2 correct answers to unlock the lesson."}</h4>
                            <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>You scored {quizAnswers.filter((ans, idx) => ans === activeQuizQuestions[idx]?.correct_index).length}/{activeQuizQuestions.length} correct.</p>
                          </div>
                        </div>
                        {quizPassed ? (
                          <button onClick={handleFinishStudy}
                            style={{ padding: "1.1rem 1.35rem", borderRadius: 18, border: "1px solid rgba(14,165,233,0.18)", background: "linear-gradient(135deg, rgba(7,89,133,0.92), rgba(14,165,233,0.78))", color: "#fff", cursor: "pointer", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, boxShadow: "0 18px 40px rgba(7,89,133,0.32)" }}>
                            <span>{activeModuleSortOrder < totalModules ? "Continue to next module" : "Return to journey"}</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                          </button>
                        ) : (
                          <button onClick={startQuiz}
                            style={{ padding: "1.1rem 1.35rem", borderRadius: 18, border: "1px solid rgba(239,68,68,0.18)", background: "rgba(239,68,68,0.12)", color: "#fff", cursor: "pointer", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                            <span>Retry quiz</span>
                            <span className="material-symbols-outlined">restart_alt</span>
                          </button>
                        )}
                        </div>
                    )}
                      </div>


                    

                    
                </div>
              </section>
            </div>
            )}
        </div>
      </main>

      {/* Floating AI Chat (same as before) */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
        {/* ── Floating AI Chat (with daily limit) ── */}
<div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
  {isChatOpen && (
    <div className="panel fade-in" style={{
      width: "min(90vw, 380px)", height: 520, borderRadius: 24, display: "flex", flexDirection: "column", overflow: "hidden",
      boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 8px 24px rgba(7,89,133,0.2)"
    }}>
      <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(14,165,233,0.14)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(15,23,42,0.6)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="material-symbols-outlined" style={{ color: "#38bdf8" }}>psychology</span>
          <div>
            <p style={{ fontFamily: "'Noto Serif', serif", color: "#fff", fontSize: 16 }}>Gemini 2.5 Flash</p>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0ea5e9" }}>AI Diplomatic Assistant</p>
          </div>
        </div>
        <button onClick={() => setIsChatOpen(false)} style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer" }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>close</span>
        </button>
      </div>

      <div className="chat-scroll" style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: 16 }}>
        {chatMessages.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.role === "user" ? "flex-end" : "flex-start", maxWidth: "85%",
            padding: "12px 16px", borderRadius: msg.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
            background: msg.role === "user" ? "linear-gradient(135deg, rgba(7,89,133,0.9), rgba(14,165,233,0.7))" : "rgba(15,23,42,0.8)",
            border: msg.role === "user" ? "1px solid rgba(14,165,233,0.4)" : "1px solid rgba(148,163,184,0.15)",
            color: "#fff", fontSize: 14, lineHeight: 1.5, boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            {msg.text}
          </div>
        ))}
        {isAiTyping && (
          <div style={{ alignSelf: "flex-start", padding: "12px 16px", borderRadius: "20px 20px 20px 4px", background: "rgba(15,23,42,0.8)", border: "1px solid rgba(148,163,184,0.15)", color: "#94a3b8", fontSize: 14 }}>
            <span className="material-symbols-outlined" style={{ animation: "fadeIn 1s infinite alternate", fontSize: 18 }}>more_horiz</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSendChatMessage} style={{ padding: "16px", borderTop: "1px solid rgba(14,165,233,0.14)", display: "flex", gap: 10, background: "rgba(15,23,42,0.8)" }}>
        <input
          type="text"
          placeholder={limitReached ? "Daily limit reached" : "Ask about MUN strategy, motions, clauses..."}
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          disabled={limitReached}
          style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 16, padding: "12px 16px", color: limitReached ? "#666" : "#fff", outline: "none", fontSize: 14, fontFamily: "inherit" }}
        />
        <button type="submit" disabled={!chatInput.trim() || isAiTyping || limitReached}
          style={{ width: 44, height: 44, borderRadius: 14, background: (limitReached || !chatInput.trim() || isAiTyping) ? "rgba(15,23,42,0.9)" : "rgba(14,165,233,0.2)", border: (limitReached || !chatInput.trim() || isAiTyping) ? "1px solid rgba(148,163,184,0.1)" : "1px solid rgba(14,165,233,0.3)", color: (limitReached || !chatInput.trim() || isAiTyping) ? "#64748b" : "#0ea5e9", display: "grid", placeItems: "center", cursor: (limitReached || !chatInput.trim() || isAiTyping) ? "not-allowed" : "pointer" }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>send</span>
        </button>
      </form>
    </div>
  )}

  {/* Toggle Button */}
  <button
    onClick={() => setIsChatOpen(!isChatOpen)}
    style={{
      width: 56, height: 56, borderRadius: 28,
      background: "linear-gradient(135deg, rgba(7,89,133,0.92), rgba(14,165,233,0.78))",
      border: "1px solid rgba(14,165,233,0.4)",
      color: "#fff", display: "grid", placeItems: "center", cursor: "pointer",
      boxShadow: "0 12px 32px rgba(7,89,133,0.4)", transition: "transform 0.2s ease"
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
  >
    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
      {isChatOpen ? "keyboard_arrow_down" : "forum"}
    </span>
  </button>
</div>
      </div>
    </div>
  );
}