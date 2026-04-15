import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Data Extracted & Updated with Topic Images
const MODULES_DATA = [
  {
    id: 1,
    title: "What is Model UN?",
    shortDesc: "Introduction to the United Nations simulation, roles, and the General Assembly.",
    icon: "public",
    left: 80,
    bottom: 150,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img 
          src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?auto=format&fit=crop&q=80&w=800" 
          alt="UN General Assembly" 
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }} 
        />
        <p>Model UN is a simulation of the United Nations. A student, typically known as a delegate, is assigned to a country to represent. Regardless of a student's personal beliefs or values, they are expected to adhere to their country's stance as a delegate of that country.</p>
        <p>A Model UN conference is an event in which students act as delegates, taking on the roles of their assigned countries. A conference is the culmination of the entire event, often hosted by high schools or universities.</p>
        <div style={{ backgroundColor: "rgba(7, 89, 133, 0.15)", borderLeft: "4px solid #075985", padding: "1.5rem", borderRadius: "0 8px 8px 0" }}>
          <h4 style={{ color: "#0ea5e9", margin: "0 0 1rem 0", fontFamily: "'Noto Serif', serif" }}>Committee Structures</h4>
          <p style={{ margin: 0 }}>General Assembly committees can be split into four different categories: Preparation, The Moderated Caucus, The Unmoderated Caucus, and Presentation and Voting.</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Preparation",
    shortDesc: "Research protocols, background guides, and position papers.",
    icon: "search",
    left: 380,
    bottom: 350,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
          alt="Research and Preparation" 
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }} 
        />
        <p>It is vital to come prepared to Model UN conferences. The first step to preparation consists of research. Delegates typically research their country's history, government, policies, and values.</p>
        <p>Many conferences require delegates to submit their research in the form of a position paper (also known as a white paper), a short essay that clarifies a delegate's position, demonstrates research and understanding, proposes solutions, and guides discussion.</p>
      </div>
    )
  },
  {
    id: 3,
    title: "The Moderated Caucus",
    shortDesc: "Structured debate, speeches, and parliamentary procedure.",
    icon: "gavel",
    left: 680,
    bottom: 500,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img 
          src="https://images.unsplash.com/photo-1475721025871-8b010bb92baf?auto=format&fit=crop&q=80&w=800" 
          alt="Public Speaking and Debate" 
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }} 
        />
        <p>A conference begins with the roll call, which establishes attendance and determines whether quorum is met.</p>
        <p>A moderated caucus is a structured form of debate focused on one specific sub-topic. During this caucus, delegates give speeches, allowing the committee to understand each delegate's position and find possible allies.</p>
      </div>
    )
  },
  {
    id: 4,
    title: "The Unmoderated Caucus",
    shortDesc: "Informal lobbying, bloc formation, and working papers.",
    icon: "groups",
    left: 980,
    bottom: 250,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
          alt="Group Discussion" 
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }} 
        />
        <p>An unmoderated caucus is a less structured form of discussion where delegates leave their seats and form groups (blocs) with delegates holding similar positions.</p>
        <p>Once blocs are formed, delegates begin writing a working paper, a draft of solutions to the topic being discussed. After multiple unmoderated caucuses, the working paper becomes the resolution paper.</p>
      </div>
    )
  },
  {
    id: 5,
    title: "Presentation and Voting",
    shortDesc: "Presenting resolutions, Q&A, and voting procedures.",
    icon: "how_to_vote",
    left: 1280,
    bottom: 400,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img 
          src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800" 
          alt="Voting Assembly" 
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }} 
        />
        <p>Once a resolution paper has enough sponsors and signatories, sponsors will present to the committee. Some sponsors read the paper and others participate in Q&A.</p>
        <p>All delegates vote on each resolution paper ("yes", "no", "abstain", "yes with rights", "no with rights", or "pass"). A simple majority passes the paper.</p>
      </div>
    )
  },
  {
    id: 6,
    title: "Miscellaneous",
    shortDesc: "Motion precedence, majorities, and disruptive motions.",
    icon: "account_tree",
    left: 1580,
    bottom: 200,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" 
          alt="Rules and Procedures" 
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }} 
        />
        <p>The motion order precedence determines which motions are most important, ranging from a Point of Order down to a Motion to Change Speaking Time.</p>
        <p>A dilatory motion is disruptive and made solely to obstruct debate. The dais can rule a motion as dilatory.</p>
      </div>
    )
  },
  {
    id: 7,
    title: "Respect and Behavior",
    shortDesc: "Diplomatic etiquette and conduct expectations.",
    icon: "handshake",
    left: 1880,
    bottom: 450,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img 
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" 
          alt="Handshake and Respect" 
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }} 
        />
        <p>Even though Model UN is competitive and promotes opposing views, delegates should always respect one another. Any conflict resolution should be handled civilly, both in and out of committee.</p>
        <p>Respect also applies to the dais (the individuals overseeing the committee). Delegates must always wait to be recognized by the chair before speaking.</p>
        <p>It is important to be respectful to other delegates, the dais, and the conference as a whole. Significant effort is put into the creation and running of every Model UN conference.</p>
      </div>
    )
  },
  {
    id: 8,
    title: "Glossary",
    shortDesc: "Dictionary of essential Model UN terminology.",
    icon: "menu_book",
    left: 2180,
    bottom: 300,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)" }}>
        <img 
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800" 
          alt="Books and Glossary" 
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)", marginBottom: "1rem" }} 
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "8px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.1rem" }}>Bloc</strong><br/>A group of delegates who share a similar position.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "8px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.1rem" }}>Dais</strong><br/>The person or group running the committee.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "8px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.1rem" }}>Quorum</strong><br/>Minimum number of delegates to proceed.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "8px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.1rem" }}>Working Paper</strong><br/>A draft for proposed solutions.</div>
        </div>
      </div>
    )
  }
];

// Quiz questions for each module
const QUIZ_QUESTIONS = {
  1: [
    { q: "What is the main purpose of Model UN?", a: ["To simulate United Nations operations", "To play games", "To study history"], correct: 0 },
    { q: "What is a delegate expected to represent?", a: ["Their personal beliefs", "Their assigned country's stance", "Their school"], correct: 1 },
    { q: "How many categories are General Assembly committees split into?", a: ["Two", "Three", "Four"], correct: 2 }
  ],
  2: [
    { q: "What is the first step in preparation for Model UN?", a: ["Writing speeches", "Research", "Making friends"], correct: 1 },
    { q: "What is another name for a position paper?", a: ["White paper", "Blue paper", "Research paper"], correct: 0 },
    { q: "What should delegates research about their country?", a: ["Only current policies", "History, government, policies, and values", "Just the geography"], correct: 1 }
  ],
  3: [
    { q: "What establishes attendance at a conference?", a: ["Sign-in sheet", "Roll call", "Name tags"], correct: 1 },
    { q: "What is a moderated caucus focused on?", a: ["One specific sub-topic", "Everything at once", "Social networking"], correct: 0 },
    { q: "What does quorum determine?", a: ["Lunch time", "Whether enough members are present", "Who speaks first"], correct: 1 }
  ],
  4: [
    { q: "What is an unmoderated caucus?", a: ["Structured formal debate", "Less structured discussion with group formation", "A break time"], correct: 1 },
    { q: "What are groups with similar positions called?", a: ["Teams", "Blocs", "Committees"], correct: 1 },
    { q: "What becomes the resolution paper?", a: ["Position paper", "Working paper", "Draft paper"], correct: 1 }
  ],
  5: [
    { q: "Who presents resolution papers?", a: ["All delegates", "Sponsors", "The chair only"], correct: 1 },
    { q: "What majority passes a resolution paper?", a: ["Simple majority", "Two-thirds majority", "Unanimous vote"], correct: 0 },
    { q: "Which is NOT a voting option?", a: ["Yes", "Maybe", "Abstain"], correct: 1 }
  ],
  6: [
    { q: "What determines which motions are most important?", a: ["Delegate preference", "Motion order precedence", "Chair decision"], correct: 1 },
    { q: "What is a dilatory motion?", a: ["Productive motion", "Disruptive motion to obstruct debate", "Fast-track motion"], correct: 1 },
    { q: "Who can rule a motion as dilatory?", a: ["Any delegate", "The dais", "Majority vote"], correct: 1 }
  ],
  7: [
    { q: "How should conflict be handled in Model UN?", a: ["Aggressively", "Civilly", "Ignored"], correct: 1 },
    { q: "Who oversees the committee?", a: ["Delegates", "The dais", "Observers"], correct: 1 },
    { q: "When can delegates speak?", a: ["Anytime", "After being recognized by the chair", "During breaks only"], correct: 1 }
  ],
  8: [
    { q: "What is a bloc?", a: ["A group of delegates with similar positions", "A voting method", "A type of motion"], correct: 0 },
    { q: "What is the dais?", a: ["The audience", "The person or group running the committee", "A document"], correct: 1 },
    { q: "What is quorum?", a: ["A voting system", "Minimum number of delegates to proceed", "A type of speech"], correct: 1 }
  ]
};

export default function ModelUNAcademy() {
  const navigate = useNavigate();
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [viewMode, setViewMode] = useState<"map" | "module">("map");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const activeModule = MODULES_DATA.find((m) => m.id === activeModuleId) || MODULES_DATA[0];

  // Dynamic Rank Calculation
  const getDiplomaticRank = (moduleId: number) => {
    if (moduleId <= 2) return "Observer";
    if (moduleId <= 4) return "Attaché";
    if (moduleId <= 6) return "Delegate";
    return "Ambassador";
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    setTimeout(() => {
      const newAnswers = [...quizAnswers, answerIndex];
      setQuizAnswers(newAnswers);
      
      if (currentQuizQuestion < 2) {
        setCurrentQuizQuestion(currentQuizQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizComplete(true);
      }
    }, 1500);
  };

  const handleCompleteModule = () => {
    setViewMode("map");
    setShowQuiz(false);
    setQuizComplete(false);
    setCurrentQuizQuestion(0);
    setQuizAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return (
    <div className="dark">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@300;400;600;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
          background-color: #0f172a;
          color: #e5e2e1;
          font-family: 'Public Sans', sans-serif;
          overflow-x: hidden;
        }

        ::selection { background-color: #075985; color: #ffffff; }

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

        .diplomatic-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.04;
        }

        .globe-grid {
          background-image: radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.15) 1px, transparent 0);
          background-size: 40px 40px;
        }

        @keyframes dataFlow {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }

        .animated-path {
          animation: dataFlow 2s linear infinite;
        }

        .node-hover:hover {
          transform: scale(1.15) translateY(-5px) !important;
          box-shadow: 0 10px 30px -10px rgba(14, 165, 233, 0.5);
        }

        .fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(14, 165, 233, 0.3); }
          50% { box-shadow: 0 0 30px rgba(14, 165, 233, 0.7); }
        }

        .active-node-glow {
          animation: glowPulse 2s infinite;
        }

        /* Responsive Utilities */
        .sidebar {
          width: 280px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .main-content {
          margin-left: 280px;
          transition: margin 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 3rem;
        }
        .menu-btn { display: none; }

        @media (max-width: 1024px) {
          .bento-grid { display: flex; flex-direction: column; gap: 2rem; }
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .main-content {
            margin-left: 0;
          }
          .menu-btn { display: block; }
          .hide-mobile { display: none !important; }
          .nav-container { padding: 0 1rem !important; }
          .header-padding { padding: 2rem 1.5rem !important; }
        }
      `}</style>

      {/* TopNavBar */}
      <nav className="nav-container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        width: '100%', padding: '0 2rem', height: '72px',
        position: 'fixed', top: 0, zIndex: 60, 
        background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(14, 165, 233, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            className="menu-btn" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: 'transparent', border: 'none', color: '#0ea5e9', cursor: 'pointer',
              display: 'flex', alignItems: 'center', padding: '0.5rem'
            }}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button
            onClick={() => navigate("/")}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.25rem', backgroundColor: 'rgba(7, 89, 133, 0.3)',
              border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '12px',
              color: '#0ea5e9', cursor: 'pointer', fontFamily: "'Public Sans', sans-serif",
              fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: '0.1em', transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(7, 89, 133, 0.6)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(7, 89, 133, 0.3)'}
          >
            <span className="material-symbols-outlined">home</span>
            Home
          </button>
          <div>
            <p style={{
              fontFamily: "'Public Sans', sans-serif", fontSize: '0.6rem', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0ea5e9', marginBottom: '0.3rem'
            }}>United Nations Training Protocol</p>
            <h1 style={{
              fontFamily: "'Noto Serif', serif", fontSize: '1.35rem',
              fontStyle: 'italic', color: '#ffffff',
            }}>Delegate Assembly System</h1>
          </div>
        </div>
        <div className="hide-mobile" style={{
          display: 'flex', alignItems: 'center', gap: '2rem',
          padding: '1rem 1.5rem', backgroundColor: 'rgba(7, 89, 133, 0.15)',
          borderRadius: '12px', border: '1px solid rgba(14, 165, 233, 0.15)'
        }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.1em', color: '#64748b', marginBottom: '0.3rem' }}>Diplomatic Rank</p>
            <p style={{ fontFamily: "'Noto Serif', serif", fontSize: '1.2rem', fontWeight: 'bold', color: '#ffffff' }}>{getDiplomaticRank(activeModuleId)}</p>
          </div>
          <div style={{
            width: '50px', height: '50px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #075985 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid rgba(14, 165, 233, 0.3)', fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff'
          }}>D</div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{
        position: 'fixed', left: 0, top: '72px', bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.95)', borderRight: '1px solid rgba(14, 165, 233, 0.1)',
        backdropFilter: 'blur(16px)', zIndex: 50, overflowY: 'auto', padding: '2rem 1.5rem'
      }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{
            fontFamily: "'Public Sans', sans-serif", fontSize: '0.6rem', fontWeight: 900,
            textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0ea5e9', marginBottom: '1rem'
          }}>Navigation Index</p>
          <h2 style={{
            fontFamily: "'Noto Serif', serif", fontSize: '1.5rem', fontStyle: 'italic', color: '#ffffff', marginBottom: '0.5rem'
          }}>Learning Modules</h2>
          <div style={{ width: '3rem', height: '3px', backgroundColor: '#0ea5e9', borderRadius: '2px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              onClick={() => {
                setActiveModuleId(module.id);
                setViewMode("module");
                setIsSidebarOpen(false);
              }}
              style={{
                padding: '1.25rem 1rem', borderRadius: '10px', cursor: 'pointer',
                backgroundColor: activeModuleId === module.id ? 'rgba(7, 89, 133, 0.4)' : 'rgba(7, 89, 133, 0.1)',
                border: `1px solid ${activeModuleId === module.id ? 'rgba(14, 165, 233, 0.4)' : 'rgba(14, 165, 233, 0.1)'}`,
                transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '1rem'
              }}
              onMouseOver={(e) => {
                if (activeModuleId !== module.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(7, 89, 133, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.25)';
                }
              }}
              onMouseOut={(e) => {
                if (activeModuleId !== module.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(7, 89, 133, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.1)';
                }
              }}
            >
              <span className="material-symbols-outlined" style={{ color: activeModuleId === module.id ? '#0ea5e9' : '#64748b', fontSize: '1.5rem' }}>
                {module.icon}
              </span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', color: '#64748b', marginBottom: '0.25rem' }}>
                  Module 0{module.id}
                </p>
                <p style={{ fontFamily: "'Noto Serif', serif", fontSize: '0.9rem', color: activeModuleId === module.id ? '#ffffff' : '#cbd5e1' }}>
                  {module.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Container */}
      <main className="main-content" style={{
        paddingTop: '72px', height: '100vh', position: 'relative', overflow: 'hidden'
      }}>
        <div className="diplomatic-grain" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
        <div className="globe-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />

        {/* VIEW MODE 1: THE INTERACTIVE MAP */}
        {viewMode === "map" && (
          <div className="fade-in" style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2 }}>
            <header className="header-padding" style={{
              display: 'flex', alignItems: 'center', width: '100%',
              padding: '2.5rem 4rem', background: 'linear-gradient(to bottom, rgba(15,23,42,0.9), transparent)',
              borderBottom: '1px solid rgba(14, 165, 233, 0.05)',
            }}>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "'Public Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.25em', color: '#0ea5e9', marginBottom: '0.5rem',
                }}>Arena Navigation</p>
                <h1 style={{
                  fontFamily: "'Noto Serif', serif", fontSize: '2.25rem',
                  fontStyle: 'italic', color: '#f1c100', textShadow: '0 2px 10px rgba(241,193,0,0.2)'
                }}>Learning Path Dashboard</h1>
              </div>
            </header>

            <div style={{
              width: '100%', height: 'calc(100vh - 180px)', 
              overflowX: 'auto', overflowY: 'hidden', 
              display: 'flex', alignItems: 'center', cursor: 'grab',
              paddingBottom: '2rem'
            }}>
              <div style={{
                position: 'relative', width: '2500px', height: '600px',
                padding: '0 5rem', flexShrink: 0,
              }}>
                {/* SVG Connections */}
                <svg style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  pointerEvents: "none", filter: "drop-shadow(0 0 8px rgba(14, 165, 233, 0.3))",
                }}>
                  <path
                    d="M 12 400 L 112 182 L 412 382 L 712 532 L 1012 282 L 1312 432 L 1612 232 L 1912 482 L 2212 332 L 2430 400"
                    fill="none" stroke="rgba(7, 89, 133, 0.4)" strokeWidth="4"
                  />
                  <path
                    className="animated-path"
                    d="M 12 400 L 112 182 L 412 382 L 712 532 L 1012 282 L 1312 432 L 1612 232 L 1912 482 L 2212 332 L 2430 400"
                    fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="10 20"
                  />
                </svg>

                {/* Starting Portal */}
                <div style={{
                  position: 'absolute', left: '-20px', bottom: '360px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.8
                }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px dashed #0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(7, 89, 133, 0.1)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#0ea5e9' }}>login</span>
                  </div>
                  <span style={{ marginTop: '1rem', fontSize: '0.625rem', color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Initialization</span>
                </div>

                {/* Data Nodes */}
                {MODULES_DATA.map((module) => {
                  const isActive = activeModuleId === module.id;
                  const isCompleted = module.id < activeModuleId;

                  return (
                    <div
                      key={module.id}
                      className="node-hover"
                      onClick={() => {
                        setActiveModuleId(module.id);
                        setViewMode("module");
                      }}
                      style={{
                        position: "absolute", left: `${module.left}px`, bottom: `${module.bottom}px`,
                        cursor: "pointer", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        zIndex: isActive ? 10 : 1, transform: isActive ? "scale(1.15)" : "scale(1)",
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        <div
                          className={isActive ? "active-node-glow" : ""}
                          style={{
                            width: "4.5rem", height: "4.5rem", transform: "rotate(45deg)", borderRadius: "12px",
                            backgroundColor: isActive ? "#075985" : (isCompleted ? "rgba(7, 89, 133, 0.6)" : "rgba(15, 23, 42, 0.9)"),
                            border: `2px solid ${isActive || isCompleted ? "#0ea5e9" : "rgba(14, 165, 233, 0.3)"}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.3s ease", backdropFilter: "blur(4px)"
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{
                              transform: "rotate(-45deg)", 
                              color: isActive ? "#ffffff" : (isCompleted ? "#0ea5e9" : "#64748b"),
                              fontSize: "1.75rem", fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"
                            }}
                          >
                            {module.icon}
                          </span>
                        </div>
                        
                        <div style={{
                          position: "absolute", top: "130%", left: "50%", transform: "translateX(-50%)",
                          textAlign: "center", width: "16rem",
                        }}>
                          <span style={{
                            display: "block", fontSize: "0.65rem", textTransform: "uppercase", fontWeight: 600,
                            letterSpacing: "0.15em", color: isActive ? "#0ea5e9" : "#64748b", marginBottom: '0.4rem'
                          }}>
                            Module 0{module.id}
                          </span>
                          <h3 style={{
                            fontFamily: "'Noto Serif', serif", color: isActive ? "#ffffff" : "#cbd5e1",
                            fontSize: isActive ? "1.25rem" : "0.9rem", margin: 0, transition: "all 0.2s",
                            textShadow: isActive ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
                          }}>
                            {module.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Ending Assembly */}
                <div style={{
                  position: 'absolute', left: '2380px', bottom: '360px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid #0ea5e9', backgroundColor: 'rgba(7, 89, 133, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#0ea5e9' }}>flag</span>
                  </div>
                  <span style={{ marginTop: '1rem', fontSize: '0.625rem', color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Final Assembly</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: THE IMMERSIVE MODULE */}
        {viewMode === "module" && (
          <div className="fade-in" style={{ width: '100%', height: '100%', overflowY: 'auto', position: 'relative', zIndex: 2 }}>
            <header className="header-padding" style={{
              display: 'flex', alignItems: 'center', width: '100%',
              padding: '2.5rem 4rem', background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(14, 165, 233, 0.15)',
              position: 'sticky', top: 0, zIndex: 10
            }}>
              <div style={{ 
                marginRight: '1.5rem', cursor: 'pointer', color: '#0ea5e9', display: 'flex', 
                alignItems: 'center', padding: '0.75rem', backgroundColor: 'rgba(7, 89, 133, 0.3)', 
                borderRadius: '12px', transition: 'background 0.2s' 
              }} 
              onClick={() => setViewMode("map")}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(7, 89, 133, 0.6)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(7, 89, 133, 0.3)'}
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "'Public Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0ea5e9', marginBottom: '0.4rem',
                }}>Module 0{activeModule.id} Extraction</p>
                <h1 style={{
                  fontFamily: "'Noto Serif', serif", fontSize: '2rem',
                  fontStyle: 'italic', color: '#ffffff',
                }}>{activeModule.title}</h1>
              </div>
            </header>

            <div className="header-padding" style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 4rem 6rem' }}>
              {/* Header Group */}
              <div style={{ marginBottom: '4rem' }}>
                <p style={{
                  fontFamily: "'Public Sans', sans-serif", fontSize: '0.75rem', fontWeight: 900,
                  textTransform: 'uppercase', letterSpacing: '0.3em', color: '#0ea5e9', marginBottom: '1rem',
                }}>Intelligence Briefing</p>
                <h2 style={{
                  fontFamily: "'Noto Serif', serif", fontSize: '3.5rem', fontWeight: 'bold',
                  lineHeight: 1.1, maxWidth: '45rem', marginBottom: '1.5rem', color: '#f8fafc'
                }}>Mastering the {activeModule.title}</h2>
                <div style={{ width: '6rem', height: '0.35rem', backgroundColor: '#0ea5e9', borderRadius: '2px' }} />
              </div>

              {/* Bento Grid layout */}
              <div className="bento-grid">
                {/* Left Sidebar Info */}
                <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <section style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '2.5rem',
                    borderRadius: '16px', border: '1px solid rgba(14, 165, 233, 0.2)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{
                      fontFamily: "'Public Sans', sans-serif", fontSize: '0.7rem', fontWeight: 900,
                      textTransform: 'uppercase', letterSpacing: '0.15em', color: '#0ea5e9', marginBottom: '1.5rem',
                    }}>Mission Objective</h3>
                    <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem' }}>
                      {activeModule.shortDesc}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        <span style={{ color: '#94a3b8' }}>Completion State</span>
                        <span style={{ color: '#0ea5e9' }}>IN PROGRESS</span>
                      </div>
                      <div style={{ display: 'flex', gap: '4px', height: '6px' }}>
                        {[true, true, false, false, false].map((filled, i) => (
                          <div key={i} style={{ flex: 1, backgroundColor: filled ? '#0ea5e9' : 'rgba(7, 89, 133, 0.3)', borderRadius: '2px' }} />
                        ))}
                      </div>
                    </div>
                  </section>
                  
                  {/* Aesthetic Box */}
                  <div style={{ 
                    padding: '2rem', borderRadius: '16px', border: '1px solid rgba(14, 165, 233, 0.1)', 
                    background: 'linear-gradient(145deg, rgba(7,89,133,0.2) 0%, rgba(15,23,42,0.6) 100%)', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center', height: '220px',
                    boxShadow: 'inset 0 0 40px rgba(7, 89, 133, 0.1)'
                  }}>
                     <span className="material-symbols-outlined" style={{ fontSize: '6rem', color: '#075985', opacity: 0.8 }}>{activeModule.icon}</span>
                  </div>
                </div>

                {/* Main Flow Data */}
                <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute', left: '-1.5rem', top: 0, height: '100%',
                      width: '2px', backgroundColor: 'rgba(14, 165, 233, 0.15)',
                    }} />
                    <div style={{
                      position: 'absolute', left: '-1.5rem', top: 0, transform: 'translateX(-45%)',
                      width: '1.25rem', height: '1.25rem', backgroundColor: '#0f172a', borderRadius: '50%',
                      border: '2px solid #0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 10px rgba(14, 165, 233, 0.5)'
                    }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#0ea5e9', borderRadius: '50%' }} />
                    </div>
                    
                    <div style={{ paddingLeft: '3rem', paddingBottom: '3rem' }}>
                      <h4 style={{
                        fontFamily: "'Noto Serif', serif", fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '2rem', color: '#ffffff'
                      }}>Primary Directives</h4>
                      
                      <div style={{ fontSize: '1.05rem' }}>
                        {activeModule.content}
                      </div>

                      {/* Quiz Section */}
                      {!showQuiz && !quizComplete && (
                        <button 
                          onClick={() => setShowQuiz(true)}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#075985'}
                          style={{
                            marginTop: '4rem', padding: '1.5rem 2.5rem', backgroundColor: '#075985', color: '#ffffff',
                            border: '1px solid #0ea5e9', borderRadius: '12px', cursor: 'pointer', fontFamily: "'Public Sans', sans-serif", 
                            fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'flex', 
                            alignItems: 'center', gap: '1rem', transition: 'all 0.3s ease', boxShadow: '0 8px 20px rgba(7, 89, 133, 0.4)'
                          }}
                        >
                          Begin Knowledge Check
                          <span className="material-symbols-outlined">quiz</span>
                        </button>
                      )}

                      {showQuiz && !quizComplete && (
                        <div style={{
                          marginTop: '4rem', padding: '2.5rem', backgroundColor: 'rgba(15, 23, 42, 0.8)',
                          border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '16px'
                        }}>
                          <h5 style={{
                            fontFamily: "'Public Sans', sans-serif", fontSize: '0.75rem', fontWeight: 900,
                            textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0ea5e9', marginBottom: '2rem'
                          }}>
                            Question {currentQuizQuestion + 1} of 3
                          </h5>
                          <p style={{
                            fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '2rem', lineHeight: 1.5
                          }}>
                            {QUIZ_QUESTIONS[activeModuleId as keyof typeof QUIZ_QUESTIONS][currentQuizQuestion].q}
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {QUIZ_QUESTIONS[activeModuleId as keyof typeof QUIZ_QUESTIONS][currentQuizQuestion].a.map((answer, idx) => {
                              const isCorrect = idx === QUIZ_QUESTIONS[activeModuleId as keyof typeof QUIZ_QUESTIONS][currentQuizQuestion].correct;
                              const isSelected = selectedAnswer === idx;
                              const showResult = showFeedback && isSelected;
                              
                              return (
                                <button
                                  key={idx}
                                  onClick={() => !showFeedback && handleQuizAnswer(idx)}
                                  disabled={showFeedback}
                                  style={{
                                    padding: '1.25rem 1.5rem', 
                                    backgroundColor: showResult ? (isCorrect ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)') : 'rgba(15, 23, 42, 0.6)',
                                    color: '#ffffff', 
                                    border: showResult ? (isCorrect ? '2px solid #22c55e' : '2px solid #ef4444') : '1px solid rgba(14, 165, 233, 0.3)',
                                    borderRadius: '12px', 
                                    cursor: showFeedback ? 'default' : 'pointer',
                                    textAlign: 'left', 
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    position: 'relative'
                                  }}
                                  onMouseOver={(e) => {
                                    if (!showFeedback) {
                                      e.currentTarget.style.backgroundColor = 'rgba(7, 89, 133, 0.5)';
                                      e.currentTarget.style.borderColor = '#0ea5e9';
                                    }
                                  }}
                                  onMouseOut={(e) => {
                                    if (!showFeedback) {
                                      e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.6)';
                                      e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)';
                                    }
                                  }}
                                >
                                  {showResult && (
                                    <span className="material-symbols-outlined" style={{
                                      color: isCorrect ? '#22c55e' : '#ef4444',
                                      fontSize: '1.5rem'
                                    }}>
                                      {isCorrect ? 'check_circle' : 'cancel'}
                                    </span>
                                  )}
                                  <span style={{ flex: 1 }}>{answer}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {quizComplete && (
                        <div style={{
                          marginTop: '4rem', padding: '2.5rem', 
                          backgroundColor: 'rgba(34, 197, 94, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.3)', 
                          borderRadius: '16px'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: '#22c55e' }}>
                              check_circle
                            </span>
                            <div>
                              <h5 style={{
                                fontFamily: "'Public Sans', sans-serif", fontSize: '0.75rem', fontWeight: 900,
                                textTransform: 'uppercase', letterSpacing: '0.2em', color: '#22c55e', marginBottom: '0.5rem'
                              }}>
                                Knowledge Check Complete
                              </h5>
                              <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                                You scored {quizAnswers.reduce((acc, ans, idx) => 
                                  acc + (ans === QUIZ_QUESTIONS[activeModuleId as keyof typeof QUIZ_QUESTIONS][idx].correct ? 1 : 0), 0)}/3 correct
                              </p>
                            </div>
                          </div>
                          <button 
                            onClick={handleCompleteModule}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#075985'}
                            style={{
                              marginTop: '1rem', padding: '1.5rem 2.5rem', backgroundColor: '#075985', color: '#ffffff',
                              border: '1px solid #0ea5e9', borderRadius: '12px', cursor: 'pointer', fontFamily: "'Public Sans', sans-serif", 
                              fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'flex', 
                              alignItems: 'center', gap: '1rem', transition: 'all 0.3s ease', boxShadow: '0 8px 20px rgba(7, 89, 133, 0.4)'
                            }}
                          >
                            {activeModule.id < 8 ? "Proceed to Next Module" : "Return to Assembly Map"}
                            <span className="material-symbols-outlined">arrow_forward</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}