import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

type TabId = "learning" | "people" | "news" | "masterclasses" | "stats" | "partners" | "take-action" | "about" | "featured-in" | "recognitions";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabId>("learning");

  // Data states
  const [modules, setModules] = useState<any[]>([]);
  const [people, setPeople] = useState<any[]>([]);
  const [newsConfig, setNewsConfig] = useState<any>({});
  const [newsPosts, setNewsPosts] = useState<any[]>([]);
  const [masterclasses, setMasterclasses] = useState<any[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [partners, setPartners] = useState<any[]>([]);
  const [takeActionItems, setTakeActionItems] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [aboutParagraphs, setAboutParagraphs] = useState<string[]>([]);
  const [missionStatement, setMissionStatement] = useState("");
  const [mediaLogos, setMediaLogos] = useState<any[]>([]);
  const [recognitions, setRecognitions] = useState<any[]>([]);

  const [loading, setLoading] = useState<Record<string, boolean>>({});

  // Load functions
  const loadModules = useCallback(async () => {
    setLoading(p => ({ ...p, modules: true }));
    const q = query(collection(db, "learning_modules"), orderBy("sort_order"));
    const snap = await getDocs(q);
    const mods = await Promise.all(snap.docs.map(async (d) => {
      const quizSnap = await getDocs(collection(db, "learning_modules", d.id, "quiz_questions"));
      return { id: d.id, ...d.data(), quiz_questions: quizSnap.docs.map(q => ({ id: q.id, ...q.data() })) };
    }));
    setModules(mods);
    setLoading(p => ({ ...p, modules: false }));
  }, []);

  const loadPeople = useCallback(async () => {
  setLoading(p => ({ ...p, people: true }));
  const snap = await getDocs(collection(db, "people")); // no orderBy
  const rawPeople = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  // sort client-side: missing sort_order treated as 0
  rawPeople.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
  setPeople(rawPeople);
  setLoading(p => ({ ...p, people: false }));
}, []);

  const loadNewsConfig = useCallback(async () => {
    const snap = await getDoc(doc(db, "config", "news"));
    if (snap.exists()) setNewsConfig(snap.data());
  }, []);

  const loadNewsPosts = useCallback(async () => {
    setLoading(p => ({ ...p, newsPosts: true }));
    const snap = await getDocs(collection(db, "news_posts"));
    setNewsPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(p => ({ ...p, newsPosts: false }));
  }, []);

  const loadMasterclasses = useCallback(async () => {
    setLoading(p => ({ ...p, masterclasses: true }));
    const snap = await getDocs(collection(db, "masterclasses"));
    setMasterclasses(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(p => ({ ...p, masterclasses: false }));
  }, []);

  const loadStats = useCallback(async () => {
    setLoading(p => ({ ...p, stats: true }));
    const snap = await getDocs(collection(db, "stats"));
    setStats(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(p => ({ ...p, stats: false }));
  }, []);

  const loadPartners = useCallback(async () => {
    setLoading(p => ({ ...p, partners: true }));
    const snap = await getDocs(collection(db, "partners"));
    setPartners(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(p => ({ ...p, partners: false }));
  }, []);

  const loadTakeActionItems = useCallback(async () => {
    setLoading(p => ({ ...p, takeAction: true }));
    const snap = await getDocs(collection(db, "take_action_items"));
    setTakeActionItems(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(p => ({ ...p, takeAction: false }));
  }, []);

  const loadServices = useCallback(async () => {
    setLoading(p => ({ ...p, services: true }));
    const snap = await getDocs(collection(db, "services"));
    setServices(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(p => ({ ...p, services: false }));
  }, []);

  const loadAbout = useCallback(async () => {
    setLoading(p => ({ ...p, about: true }));
    const snap = await getDocs(collection(db, "about_content"));
    const paragraphs: string[] = [];
    let mission = "";
    let testi: any[] = [];
    snap.docs.forEach(doc => {
      const data = doc.data();
      if (data.section_key === "our-story-paragraphs") {
        paragraphs.push(...(data.content.paragraphs || []));
      } else if (data.section_key === "mission-statement") {
        mission = data.content.text || "";
      } 
    });
    setAboutParagraphs(paragraphs);
    setMissionStatement(mission);
    setLoading(p => ({ ...p, about: false }));
  }, []);

  const loadMediaLogos = useCallback(async () => {
    setLoading(p => ({ ...p, mediaLogos: true }));
    const snap = await getDocs(collection(db, "media_logos")); // no orderBy
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
    setMediaLogos(list);
    setLoading(p => ({ ...p, mediaLogos: false }));
}, []);

  const loadRecognitions = useCallback(async () => {
    setLoading(p => ({ ...p, recognitions: true }));
    const snap = await getDocs(collection(db, "recognitions")); // no orderBy
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
    setRecognitions(list);
    setLoading(p => ({ ...p, recognitions: false }));
}, []);

  useEffect(() => {
    loadModules();
    loadPeople();
    loadNewsConfig();
    loadNewsPosts();
    loadMasterclasses();
    loadStats();
    loadPartners();
    loadTakeActionItems();
    loadServices();
    loadAbout();
    loadMediaLogos();
    loadRecognitions();
  }, []);

  // Reorder helper for people
  const movePerson = async (index: number, direction: "up" | "down") => {
    const newPeople = [...people];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= people.length) return;
    [newPeople[index], newPeople[targetIndex]] = [newPeople[targetIndex], newPeople[index]];
    // Update sort_order in Firestore
    const updates = newPeople.map((p, i) => updateDoc(doc(db, "people", p.id), { sort_order: i }));
    await Promise.all(updates);
    setPeople(newPeople);
  };



  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>
      <section className="py-8 px-6 bg-sky-800 text-white mt-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-white/70 mt-2">Manage all site content from one panel</p>
        </div>
      </section>
      <div className="border-b border-border bg-card sticky top-24 z-30">
        <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto gap-1">
          {[
            { id: "learning", label: "Learning Path" },
            { id: "people", label: "People" },
            { id: "news", label: "News" },
            { id: "masterclasses", label: "Masterclasses" },
            { id: "stats", label: "Stats" },
            { id: "partners", label: "Partners" },
            { id: "take-action", label: "Take Action" },
            { id: "about", label: "About" },
            { id: "featured-in", label: "Featured In" },
            { id: "recognitions", label: "Recognitions" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              {activeTab === "learning" && <LearningTab modules={modules} onRefresh={loadModules} />}
              {activeTab === "people" && <PeopleTab people={people} onRefresh={loadPeople} movePerson={movePerson} />}
              {activeTab === "news" && <NewsTab config={newsConfig} posts={newsPosts} onRefreshConfig={loadNewsConfig} onRefreshPosts={loadNewsPosts} />}
              {activeTab === "masterclasses" && <MasterclassTab masterclasses={masterclasses} onRefresh={loadMasterclasses} />}
              {activeTab === "stats" && <StatsTab stats={stats} onRefresh={loadStats} />}
              {activeTab === "partners" && <PartnersTab partners={partners} onRefresh={loadPartners} />}
              {activeTab === "take-action" && <TakeActionTab items={takeActionItems} services={services} onRefreshItems={loadTakeActionItems} onRefreshServices={loadServices} />}
              {activeTab === "about" && <AboutTab paragraphs={aboutParagraphs} mission={missionStatement} onRefresh={loadAbout} />}
              {activeTab === "featured-in" && <FeaturedInTab logos={mediaLogos} onRefresh={loadMediaLogos} />}
              {activeTab === "recognitions" && <RecognitionsTab recognitions={recognitions} onRefresh={loadRecognitions} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// ─── Learning Tab ──────────────────────────────────────────────────
function LearningTab({ modules, onRefresh }: { modules: any[]; onRefresh: () => void }) {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [editingModule, setEditingModule] = useState<any>(null);
  const [form, setForm] = useState({ page_id: "page-1", title: "", short_desc: "", icon: "book", content_html: "", image_url: "" });

  const selectedModule = modules.find(m => m.id === selectedModuleId);
  const moduleQuizzes = selectedModule?.quiz_questions || [];

  const handleAddModule = async () => {
    await addDoc(collection(db, "learning_modules"), { ...form, sort_order: modules.length + 1 });
    onRefresh();
    setForm({ page_id: "page-1", title: "", short_desc: "", icon: "book", content_html: "", image_url: "" });
  };

  const handleUpdateModule = async () => {
    if (!editingModule) return;
    await updateDoc(doc(db, "learning_modules", editingModule.id), {
      title: editingModule.title,
      short_desc: editingModule.short_desc,
      content_html: editingModule.content_html,
      image_url: editingModule.image_url,
    });
    setEditingModule(null);
    onRefresh();
  };

  const handleDeleteModule = async (id: string) => {
    await deleteDoc(doc(db, "learning_modules", id));
    onRefresh();
  };

  const addQuizQuestion = async () => {
    if (!selectedModuleId) return;
    await addDoc(collection(db, "learning_modules", selectedModuleId, "quiz_questions"), {
      question_text: "New question",
      answers: ["Option 1", "Option 2", "Option 3"],
      correct_index: 0,
    });
    onRefresh(); // re-fetch
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Modules</h2>
        <div className="bg-card p-4 border rounded space-y-2">
          <select value={form.page_id} onChange={e => setForm({...form, page_id: e.target.value})} className="w-full p-2 border rounded">
            <option value="page-1">Page 1 – General Assembly</option>
            <option value="page-2">Page 2 – Crisis</option>
            <option value="page-3">Page 3 – Awards</option>
            <option value="page-4">Page 4 – Future</option>
          </select>
          <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full p-2 border rounded" />
          <input placeholder="Short description" value={form.short_desc} onChange={e => setForm({...form, short_desc: e.target.value})} className="w-full p-2 border rounded" />
          <input placeholder="Icon (material symbol)" value={form.icon} onChange={e => setForm({...form, icon: e.target.value})} className="w-full p-2 border rounded" />
          <input placeholder="Image URL" value={form.image_url} onChange={e => setForm({...form, image_url: e.target.value})} className="w-full p-2 border rounded" />
          <textarea placeholder="Content HTML" value={form.content_html} onChange={e => setForm({...form, content_html: e.target.value})} className="w-full p-2 border rounded h-24" />
          <button onClick={handleAddModule} className="w-full px-4 py-2 bg-primary text-white rounded-full">+ Add Module</button>
        </div>

        <div className="space-y-2">
          {modules.map(mod => (
            <div key={mod.id} className={`p-3 border rounded cursor-pointer ${selectedModuleId === mod.id ? "border-primary bg-primary/5" : "border-border"}`} onClick={() => setSelectedModuleId(mod.id)}>
              <div className="flex justify-between">
                <span className="font-bold">{mod.title}</span>
                <div className="flex gap-2">
                  <button onClick={(e) => { e.stopPropagation(); setEditingModule(mod); }} className="text-xs text-primary">Edit</button>
                  <button onClick={(e) => { e.stopPropagation(); handleDeleteModule(mod.id); }} className="text-xs text-red-500">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        {editingModule && (
          <div className="bg-card p-6 border rounded mb-6">
            <h3 className="font-heading text-lg font-bold mb-2">Edit Module</h3>
            <input value={editingModule.title} onChange={e => setEditingModule({...editingModule, title: e.target.value})} className="w-full p-2 border rounded mb-2" />
            <input value={editingModule.short_desc} onChange={e => setEditingModule({...editingModule, short_desc: e.target.value})} className="w-full p-2 border rounded mb-2" />
            <input value={editingModule.image_url} onChange={e => setEditingModule({...editingModule, image_url: e.target.value})} className="w-full p-2 border rounded mb-2" />
            <textarea value={editingModule.content_html} onChange={e => setEditingModule({...editingModule, content_html: e.target.value})} className="w-full p-2 border rounded h-32 mb-2" />
            <div className="flex gap-2">
              <button onClick={handleUpdateModule} className="px-4 py-2 bg-primary text-white rounded-full">Save</button>
              <button onClick={() => setEditingModule(null)} className="px-4 py-2 border rounded-full">Cancel</button>
            </div>
          </div>
        )}

        {selectedModuleId && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-heading text-lg font-bold">Quiz Questions for "{selectedModule?.title}"</h3>
              <button onClick={addQuizQuestion} className="px-4 py-2 bg-primary text-white rounded-full text-sm">+ Add Question</button>
            </div>
            <div className="space-y-4">
              {moduleQuizzes.map((q: any) => (
                <QuizEditor key={q.id} question={q} moduleId={selectedModuleId} onUpdate={onRefresh} />
              ))}
            </div>
          </div>
        )}
        {!selectedModuleId && <p className="text-muted-foreground">Select a module to edit its quizzes.</p>}
      </div>
    </div>
  );
}

// ─── People Tab with reorder & bio ─────────────────────
function PeopleTab({ people, onRefresh, movePerson }: { 
  people: any[]; 
  onRefresh: () => void; 
  movePerson: (index: number, dir: "up" | "down") => void 
}) {
const [form, setForm] = useState({
  name: "",
  role: "",
  image_url: "",
  category: "leadership",
  bio: "",
  email: "",
  instagram: "",
  linkedin: "",
});

 const addPerson = async () => {
  if (!form.name.trim()) return;
  const maxSort = people.length > 0 ? Math.max(...people.map(p => p.sort_order || 0)) : 0;
  await addDoc(collection(db, "people"), {
    name: form.name,
    role: form.role,
    image_url: form.image_url,
    category: form.category,
    bio: form.bio,
    email: form.email,
    instagram: form.instagram,
    linkedin: form.linkedin,
    sort_order: maxSort + 1,
  });
  onRefresh();
  setForm({
    name: "", role: "", image_url: "", category: "leadership", bio: "",
    email: "", instagram: "", linkedin: "",
  });
};
  // Flat list with global index for movePerson
  const allPeople = people.map((p, i) => ({ ...p, globalIndex: i }));

  return (
    <div>
      <h2 className="font-heading text-xl font-bold mb-4">Add Person</h2>
      <div className="space-y-2 mb-6">
        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full p-2 border rounded" placeholder="Name" />
        <input value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="w-full p-2 border rounded" placeholder="Role" />
        <input value={form.image_url} onChange={e => setForm({...form, image_url: e.target.value})} className="w-full p-2 border rounded" placeholder="Image URL" />
        <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full p-2 border rounded">
          <option value="leadership">Senior Leadership</option>
          <option value="advisory">Advisory Board</option>
        </select>
        <textarea value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} className="w-full p-2 border rounded" placeholder="Bio" rows={3} />
        <input value={form.email} onChange={e => setForm({...form, email: e.target.value})}
  className="w-full p-2 border rounded" placeholder="Email" />
<input value={form.instagram} onChange={e => setForm({...form, instagram: e.target.value})}
  className="w-full p-2 border rounded" placeholder="Instagram URL" />
<input value={form.linkedin} onChange={e => setForm({...form, linkedin: e.target.value})}
  className="w-full p-2 border rounded" placeholder="LinkedIn URL" />
        <button onClick={addPerson} className="px-6 py-2 bg-primary text-white rounded-full">Add</button>
      </div>

      <h2 className="font-heading text-xl font-bold mb-4">All People ({people.length})</h2>
      {allPeople.map((p) => (
        <PersonRow 
          key={p.id} 
          person={p} 
          onUpdate={onRefresh} 
          index={p.globalIndex} 
          move={movePerson} 
          isFirst={p.globalIndex === 0} 
          isLast={p.globalIndex === people.length - 1} 
        />
      ))}
    </div>
  );
}

function QuizEditor({ question, moduleId, onUpdate }: { question: any; moduleId: string; onUpdate: () => void }) {
  const [text, setText] = useState(question.question_text);
  const [answers, setAnswers] = useState([...question.answers]);
  const [correct, setCorrect] = useState(question.correct_index);

  const save = async () => {
    await updateDoc(doc(db, "learning_modules", moduleId, "quiz_questions", question.id), {
      question_text: text,
      answers,
      correct_index: correct,
    });
    onUpdate();
  };

  const remove = async () => {
    await deleteDoc(doc(db, "learning_modules", moduleId, "quiz_questions", question.id));
    onUpdate();
  };

  return (
    <div className="bg-muted/30 p-4 border rounded">
      <input value={text} onChange={e => setText(e.target.value)} className="w-full p-2 border rounded mb-2 font-medium" placeholder="Question" />
      {answers.map((ans, idx) => (
        <div key={idx} className="flex items-center gap-2 mb-1">
          <input type="radio" name={`correct-${question.id}`} checked={correct === idx} onChange={() => setCorrect(idx)} />
          <input value={ans} onChange={e => { const newAns = [...answers]; newAns[idx] = e.target.value; setAnswers(newAns); }} className="flex-1 p-1 border rounded" />
        </div>
      ))}
      <div className="flex gap-2 mt-2">
        <button onClick={save} className="px-3 py-1 bg-primary text-white rounded-full text-sm">Save</button>
        <button onClick={remove} className="px-3 py-1 text-red-500 border border-red-500 rounded-full text-sm">Delete</button>
      </div>
    </div>
  );
}

function PersonRow({ person, onUpdate, index, move, isFirst, isLast }: { 
  person: any; 
  onUpdate: () => void; 
  index: number; 
  move?: (i: number, dir: "up" | "down") => void; 
  isFirst: boolean; 
  isLast: boolean 
}) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({...person});

  const save = async () => {
  await updateDoc(doc(db, "people", person.id), {
    name: data.name,
    role: data.role,
    image_url: data.image_url,
    bio: data.bio,
    category: data.category,
    email: data.email || "",
    instagram: data.instagram || "",
    linkedin: data.linkedin || "",
  });
  setEditing(false);
  onUpdate();
};

  return (
    <div className="flex items-center gap-4 p-2 border rounded mb-2 bg-card">
      <div className="flex flex-col items-center gap-1 mr-2">
        <button onClick={() => move?.(index, "up")} disabled={isFirst} className="text-xs disabled:opacity-30">▲</button>
        <button onClick={() => move?.(index, "down")} disabled={isLast} className="text-xs disabled:opacity-30">▼</button>
      </div>
      <img src={data.image_url || "/placeholder.jpg"} className="w-12 h-12 rounded-full object-cover" />
      {editing ? (
        <div className="flex-1 space-y-1">
          <input value={data.name} onChange={e => setData({...data, name: e.target.value})} className="w-full p-1 border rounded" />
          <input value={data.role} onChange={e => setData({...data, role: e.target.value})} className="w-full p-1 border rounded" />
          <input value={data.image_url} onChange={e => setData({...data, image_url: e.target.value})} className="w-full p-1 border rounded" />
          <input value={data.email || ""} onChange={e => setData({...data, email: e.target.value})}
  className="w-full p-1 border rounded" placeholder="Email" />
<input value={data.instagram || ""} onChange={e => setData({...data, instagram: e.target.value})}
  className="w-full p-1 border rounded" placeholder="Instagram URL" />
<input value={data.linkedin || ""} onChange={e => setData({...data, linkedin: e.target.value})}
  className="w-full p-1 border rounded" placeholder="LinkedIn URL" />
          <textarea value={data.bio || ""} onChange={e => setData({...data, bio: e.target.value})} className="w-full p-1 border rounded" placeholder="Bio" rows={2} />
          <select value={data.category} onChange={e => setData({...data, category: e.target.value})} className="w-full p-1 border rounded">
            <option value="leadership">Leadership</option>
            <option value="advisory">Advisory</option>
          </select>
          <button onClick={save} className="text-primary text-sm">Save</button>
        </div>
      ) : (
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-bold">{data.name}</p>
            <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full">
              {data.category === "leadership" ? "Leadership" : "Advisory"}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{data.role}</p>
          {data.bio && <p className="text-xs text-gray-500 mt-1 truncate">{data.bio.substring(0, 50)}...</p>}
        </div>
      )}
      <button onClick={() => setEditing(!editing)} className="text-xs">Edit</button>
      <button onClick={async () => { await deleteDoc(doc(db, "people", person.id)); onUpdate(); }} className="text-xs text-red-500">Delete</button>
    </div>
  );
}


// ─── News Tab ────────────────────────────────────────────────────
function NewsTab({ config, posts, onRefreshConfig, onRefreshPosts }: {
  config: any;
  posts: any[];
  onRefreshConfig: () => void;
  onRefreshPosts: () => void;
}) {
  const [formConfig, setFormConfig] = useState(config || { 
    heading: "", 
    body_prefix: "", 
    body_bold: "", 
    body_suffix: "", 
    instagram_url: "", 
    linkedin_url: "" 
  });
  
  const [newPostUrl, setNewPostUrl] = useState("");
  const [newPostAltText, setNewPostAltText] = useState("");
  const [urlError, setUrlError] = useState("");

  // Sync config when it changes from parent
  useEffect(() => { 
    if (config) setFormConfig(config); 
  }, [config]);

  const isValidInstagramUrl = (url: string) => {
    return /^https?:\/\/(www\.)?instagram\.com\/(p|reel)\/[a-zA-Z0-9_-]+\/?/.test(url);
  };

  const saveConfig = async () => {
    await setDoc(doc(db, "config", "news"), formConfig);
    onRefreshConfig();
  };

  const addPost = async () => {
    if (!newPostUrl.trim() || !isValidInstagramUrl(newPostUrl)) {
      setUrlError("Please enter a valid Instagram post or reel URL.");
      return;
    }
    setUrlError("");
    try {
      await addDoc(collection(db, "news_posts"), {
        link_url: newPostUrl.trim(),
        alt_text: newPostAltText.trim() || "Instagram post",
        created_at: serverTimestamp(),
      });
      setNewPostUrl("");
      setNewPostAltText("");
      onRefreshPosts();
    } catch (error) {
      console.error("Add post error:", error);
      alert("Failed to add post. Check console for details.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Section 1: Heading & Social Links (unchanged) */}
      <div className="bg-card p-6 border rounded-lg shadow-sm">
        <h2 className="font-heading text-2xl font-bold mb-4">News Section Text</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input value={formConfig.heading} onChange={e => setFormConfig({...formConfig, heading: e.target.value})} className="p-2 border rounded" placeholder="Main Heading" />
          <input value={formConfig.body_prefix} onChange={e => setFormConfig({...formConfig, body_prefix: e.target.value})} className="p-2 border rounded" placeholder="Body Text (Start)" />
          <input value={formConfig.body_bold} onChange={e => setFormConfig({...formConfig, body_bold: e.target.value})} className="p-2 border rounded" placeholder="Body Text (Bold Part)" />
          <input value={formConfig.body_suffix} onChange={e => setFormConfig({...formConfig, body_suffix: e.target.value})} className="p-2 border rounded" placeholder="Body Text (End)" />
          <input value={formConfig.instagram_url} onChange={e => setFormConfig({...formConfig, instagram_url: e.target.value})} className="p-2 border rounded" placeholder="IG Profile Link" />
          <input value={formConfig.linkedin_url} onChange={e => setFormConfig({...formConfig, linkedin_url: e.target.value})} className="p-2 border rounded" placeholder="LinkedIn Profile Link" />
        </div>
        <button onClick={saveConfig} className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
          Save Settings
        </button>
      </div>

      {/* Section 2: Post Management */}
      <div className="bg-card p-6 border rounded-lg shadow-sm">
        <h2 className="font-heading text-2xl font-bold mb-4">Instagram Embeds (Posts &amp; Reels)</h2>
        
        {/* Current Posts Grid - now shows the stored URL as a preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {posts.map(p => (
            <div key={p.id} className="group relative border rounded-lg p-3 bg-background flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium truncate max-w-[180px]">🔗 {p.link_url}</span>
                <button 
                  onClick={async () => { if(confirm("Delete this post?")) { await deleteDoc(doc(db, "news_posts", p.id)); onRefreshPosts(); } }} 
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
                </button>
              </div>
              {p.alt_text && <p className="text-xs text-muted-foreground">Alt: {p.alt_text}</p>}
              <a href={p.link_url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary mt-1 break-all underline">
                Open on Instagram
              </a>
            </div>
          ))}
        </div>

        {/* Add New Post Form - now only Instagram URL */}
        <div className="max-w-xl space-y-4 border-t pt-6">
          <h3 className="font-bold text-lg">Add New Instagram Post / Reel</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">
                Instagram Post or Reel URL
              </label>
              <input
                value={newPostUrl}
                onChange={e => setNewPostUrl(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="https://www.instagram.com/p/... or /reel/..."
              />
              {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description (Alt Text – optional)
              </label>
              <input
                value={newPostAltText}
                onChange={e => setNewPostAltText(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Brief description of the post"
              />
            </div>

            <button 
              onClick={addPost} 
              className="px-8 py-2 bg-primary text-white rounded-full font-bold"
            >
              Add to Feed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── Masterclass Tab ──────────────────────────────────────────────
function MasterclassTab({ masterclasses, onRefresh }: { masterclasses: any[]; onRefresh: () => void }) {
  const [form, setForm] = useState({ title: "", date_text: "", description: "", status: "register" });
  const add = async () => {
    await addDoc(collection(db, "masterclasses"), form);
    setForm({ title: "", date_text: "", description: "", status: "register" });
    onRefresh();
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-4">Masterclasses</h2>
      <div className="flex gap-2 mb-6 flex-wrap">
        <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="p-2 border rounded" placeholder="Title" />
        <input value={form.date_text} onChange={e => setForm({...form, date_text: e.target.value})} className="p-2 border rounded" placeholder="Date/Time" />
        <input value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="p-2 border rounded" placeholder="Description" />
        <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="p-2 border rounded">
          <option value="register">Register</option>
          <option value="coming-soon">Coming Soon</option>
          <option value="registration-closed">Registration Closed</option>
        </select>
        <button onClick={add} className="px-4 py-2 bg-primary text-white rounded-full">Add</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {masterclasses.map(mc => (
          <div key={mc.id} className="border rounded p-4 bg-card">
            <MasterclassRow item={mc} onUpdate={onRefresh} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MasterclassRow({ item, onUpdate }: { item: any; onUpdate: () => void }) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({...item});

  const save = async () => {
    await updateDoc(doc(db, "masterclasses", item.id), data);
    setEditing(false);
    onUpdate();
  };

  return (
    <>
      {editing ? (
        <>
          <input value={data.title} onChange={e => setData({...data, title: e.target.value})} className="w-full p-1 border rounded mb-1" />
          <input value={data.date_text} onChange={e => setData({...data, date_text: e.target.value})} className="w-full p-1 border rounded mb-1" />
          <input value={data.description} onChange={e => setData({...data, description: e.target.value})} className="w-full p-1 border rounded mb-1" />
          <button onClick={save} className="text-primary text-sm">Save</button>
        </>
      ) : (
        <>
          <h3 className="font-bold">{data.title}</h3>
          <p className="text-sm text-muted-foreground">{data.date_text}</p>
          <p className="text-sm">{data.description}</p>
          <button onClick={() => setEditing(true)} className="text-xs text-primary mt-1">Edit</button>
        </>
      )}
      <button onClick={async () => { await deleteDoc(doc(db, "masterclasses", item.id)); onUpdate(); }} className="text-xs text-red-500 ml-2">Delete</button>
    </>
  );
}

// ─── Stats Tab ────────────────────────────────────────────────────
function StatsTab({ stats, onRefresh }: { stats: any[]; onRefresh: () => void }) {
  const [form, setForm] = useState({ value: "", label: "" });
  const add = async () => {
    await addDoc(collection(db, "stats"), form);
    setForm({ value: "", label: "" });
    onRefresh();
  };
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-4">Stats (Marquee)</h2>
      <div className="flex gap-2 mb-6">
        <input value={form.value} onChange={e => setForm({...form, value: e.target.value})} className="p-2 border rounded" placeholder="Value (e.g. 101)" />
        <input value={form.label} onChange={e => setForm({...form, label: e.target.value})} className="p-2 border rounded" placeholder="Label (e.g. countries)" />
        <button onClick={add} className="px-4 py-2 bg-primary text-white rounded-full">Add</button>
      </div>
      <div className="space-y-2">
        {stats.map(s => (
          <div key={s.id} className="flex items-center gap-4 border rounded p-2 bg-card">
            <span className="font-bold">{s.value}</span> <span>{s.label}</span>
            <button onClick={async () => { await deleteDoc(doc(db, "stats", s.id)); onRefresh(); }} className="ml-auto text-red-500 text-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Partners Tab ─────────────────────────────────────────────────
function PartnersTab({ partners, onRefresh }: { partners: any[]; onRefresh: () => void }) {
  const [form, setForm] = useState({ name: "", logo_url: "", website_url: "" });
  const add = async () => {
    await addDoc(collection(db, "partners"), form);
    setForm({ name: "", logo_url: "", website_url: "" });
    onRefresh();
  };
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-4">Our Strategic Partners</h2>
      <div className="flex gap-2 mb-6 flex-wrap">
        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="p-2 border rounded" placeholder="Name" />
        <input value={form.logo_url} onChange={e => setForm({...form, logo_url: e.target.value})} className="p-2 border rounded" placeholder="Logo URL" />
        <input value={form.website_url} onChange={e => setForm({...form, website_url: e.target.value})} className="p-2 border rounded" placeholder="Website URL" />
        <button onClick={add} className="px-4 py-2 bg-primary text-white rounded-full">Add</button>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {partners.map(p => (
          <div key={p.id} className="border rounded p-3 bg-card flex items-center gap-4">
            <img src={p.logo_url} alt={p.name} className="h-10 object-contain" />
            <div className="flex-1">
              <p className="font-bold">{p.name}</p>
              <a href={p.website_url} target="_blank" rel="noreferrer" className="text-xs text-primary">{p.website_url}</a>
            </div>
            <button onClick={async () => { await deleteDoc(doc(db, "partners", p.id)); onRefresh(); }} className="text-red-500 text-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Take Action Tab ─────────────────────────────────────────────
function TakeActionTab({ items, services, onRefreshItems, onRefreshServices }: {
  items: any[];
  services: any[];
  onRefreshItems: () => void;
  onRefreshServices: () => void;
}) {
  const [formItem, setFormItem] = useState({ title: "", content: "", link_url: "", link_text: "" });
  const [formService, setFormService] = useState({ title: "", content: "" });

  const addItem = async () => {
    await addDoc(collection(db, "take_action_items"), formItem);
    setFormItem({ title: "", content: "", link_url: "", link_text: "" });
    onRefreshItems();
  };

  const addService = async () => {
    await addDoc(collection(db, "services"), formService);
    setFormService({ title: "", content: "" });
    onRefreshServices();
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold mb-4">Opportunities (Accordion)</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <input value={formItem.title} onChange={e => setFormItem({...formItem, title: e.target.value})} className="p-2 border rounded flex-1" placeholder="Title" />
          <input value={formItem.link_text} onChange={e => setFormItem({...formItem, link_text: e.target.value})} className="p-2 border rounded" placeholder="Button Text" />
          <input value={formItem.link_url} onChange={e => setFormItem({...formItem, link_url: e.target.value})} className="p-2 border rounded" placeholder="Link URL" />
          <textarea value={formItem.content} onChange={e => setFormItem({...formItem, content: e.target.value})} className="p-2 border rounded w-full" placeholder="Content" rows={2} />
          <button onClick={addItem} className="px-4 py-2 bg-primary text-white rounded-full">Add Opportunity</button>
        </div>
        <div className="space-y-2">
          {items.map(item => (
            <div key={item.id} className="border rounded p-3 bg-card flex justify-between items-start">
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>
              <button onClick={async () => { await deleteDoc(doc(db, "take_action_items", item.id)); onRefreshItems(); }} className="text-red-500 text-sm ml-4">Delete</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-bold mb-4">Request Our Services</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <input value={formService.title} onChange={e => setFormService({...formService, title: e.target.value})} className="p-2 border rounded flex-1" placeholder="Service Title" />
          <textarea value={formService.content} onChange={e => setFormService({...formService, content: e.target.value})} className="p-2 border rounded w-full" placeholder="Description" rows={2} />
          <button onClick={addService} className="px-4 py-2 bg-primary text-white rounded-full">Add Service</button>
        </div>
        <div className="space-y-2">
          {services.map(svc => (
            <div key={svc.id} className="border rounded p-3 bg-card flex justify-between items-start">
              <div>
                <h3 className="font-bold">{svc.title}</h3>
                <p className="text-sm text-muted-foreground">{svc.content}</p>
              </div>
              <button onClick={async () => { await deleteDoc(doc(db, "services", svc.id)); onRefreshServices(); }} className="text-red-500 text-sm ml-4">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── About Tab (plain text editors) ─────────────────
function AboutTab({ paragraphs, mission, onRefresh }: {
  paragraphs: string[];
  mission: string;
  onRefresh: () => void;
}) {
  const [storyText, setStoryText] = useState(paragraphs.join("\n\n"));
  const [missionText, setMissionText] = useState(mission);

  useEffect(() => {
    setStoryText(paragraphs.join("\n\n"));
    setMissionText(mission);
  }, [paragraphs, mission]);

  const saveAll = async () => {
    // Save paragraphs
    const paraDoc = await getDocs(query(collection(db, "about_content"), where("section_key", "==", "our-story-paragraphs")));
    const newParagraphs = storyText.split("\n\n").filter(p => p.trim() !== "");
    if (!paraDoc.empty) {
      await updateDoc(doc(db, "about_content", paraDoc.docs[0].id), { content: { paragraphs: newParagraphs } });
    } else {
      await addDoc(collection(db, "about_content"), { section_key: "our-story-paragraphs", content: { paragraphs: newParagraphs } });
    }

    // Save mission
    const missionDoc = await getDocs(query(collection(db, "about_content"), where("section_key", "==", "mission-statement")));
    if (!missionDoc.empty) {
      await updateDoc(doc(db, "about_content", missionDoc.docs[0].id), { content: { text: missionText } });
    } else {
      await addDoc(collection(db, "about_content"), { section_key: "mission-statement", content: { text: missionText } });
    }

  
    onRefresh();
  };

  

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold mb-2">Our Story</h2>
        <p className="text-sm text-muted-foreground mb-2">Separate paragraphs with a blank line (double Enter).</p>
        <textarea
          value={storyText}
          onChange={e => setStoryText(e.target.value)}
          className="w-full h-48 p-3 border rounded"
          placeholder="Enter story paragraphs..."
        />
      </div>
      <div>
        <h2 className="font-heading text-2xl font-bold mb-2">Mission Statement</h2>
        <textarea
          value={missionText}
          onChange={e => setMissionText(e.target.value)}
          className="w-full h-32 p-3 border rounded"
          placeholder="Mission statement..."
        />
      </div>
      <div>
        </div>
      <button onClick={saveAll} className="px-8 py-3 bg-primary text-white rounded-full">Save All About Content</button>
    </div>
  );
}

// ─── Featured In Tab ────────────────────────────────
function FeaturedInTab({ logos, onRefresh }: { logos: any[]; onRefresh: () => void }) {
  const [form, setForm] = useState({ name: "", logo_url: "" });
  const add = async () => {
    const maxSort = logos.length > 0 ? Math.max(...logos.map(l => l.sort_order || 0)) : 0;
    await addDoc(collection(db, "media_logos"), { ...form, sort_order: maxSort + 1 });
    setForm({ name: "", logo_url: "" });
    onRefresh();
  };

  const move = async (index: number, dir: "up" | "down") => {
    const newList = [...logos];
    const target = dir === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= logos.length) return;
    [newList[index], newList[target]] = [newList[target], newList[index]];
    const updates = newList.map((l, i) => updateDoc(doc(db, "media_logos", l.id), { sort_order: i }));
    await Promise.all(updates);
    onRefresh();
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-4">Featured In Logos</h2>
      <div className="flex gap-2 mb-6">
        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="p-2 border rounded" placeholder="Name (e.g. Forbes)" />
        <input value={form.logo_url} onChange={e => setForm({...form, logo_url: e.target.value})} className="p-2 border rounded flex-1" placeholder="Logo URL" />
        <button onClick={add} className="px-4 py-2 bg-primary text-white rounded-full">Add</button>
      </div>
      <div className="space-y-2">
        {logos.map((logo, idx) => (
          <div key={logo.id} className="flex items-center gap-4 border rounded p-2 bg-card">
            <div className="flex flex-col">
              <button onClick={() => move(idx, "up")} disabled={idx === 0} className="text-xs disabled:opacity-30">▲</button>
              <button onClick={() => move(idx, "down")} disabled={idx === logos.length - 1} className="text-xs disabled:opacity-30">▼</button>
            </div>
            <img src={logo.logo_url} alt={logo.name} className="h-8 object-contain" />
            <span className="font-medium flex-1">{logo.name}</span>
            <button onClick={async () => { await deleteDoc(doc(db, "media_logos", logo.id)); onRefresh(); }} className="text-red-500 text-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Recognitions Tab ───────────────────────────────
function RecognitionsTab({ recognitions, onRefresh }: { recognitions: any[]; onRefresh: () => void }) {
  const [form, setForm] = useState({ title: "", subtitle: "", logo_url: "", link_url: "", button_text: "" });
  const add = async () => {
    const maxSort = recognitions.length > 0 ? Math.max(...recognitions.map(r => r.sort_order || 0)) : 0;
    await addDoc(collection(db, "recognitions"), { ...form, sort_order: maxSort + 1 });
    setForm({ title: "", subtitle: "", logo_url: "", link_url: "", button_text: "" });
    onRefresh();
  };

  const move = async (index: number, dir: "up" | "down") => {
    const newList = [...recognitions];
    const target = dir === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= recognitions.length) return;
    [newList[index], newList[target]] = [newList[target], newList[index]];
    const updates = newList.map((r, i) => updateDoc(doc(db, "recognitions", r.id), { sort_order: i }));
    await Promise.all(updates);
    onRefresh();
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-4">Our Recognitions</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="p-2 border rounded" placeholder="Title (e.g. Forbes 30 Under 30)" />
        <input value={form.subtitle} onChange={e => setForm({...form, subtitle: e.target.value})} className="p-2 border rounded" placeholder="Subtitle" />
        <input value={form.logo_url} onChange={e => setForm({...form, logo_url: e.target.value})} className="p-2 border rounded" placeholder="Logo URL" />
        <input value={form.link_url} onChange={e => setForm({...form, link_url: e.target.value})} className="p-2 border rounded" placeholder="Link URL" />
        <input value={form.button_text} onChange={e => setForm({...form, button_text: e.target.value})} className="p-2 border rounded" placeholder="Button Text" />
        <button onClick={add} className="px-4 py-2 bg-primary text-white rounded-full">Add</button>
      </div>
      <div className="space-y-2">
        {recognitions.map((rec, idx) => (
          <div key={rec.id} className="flex items-center gap-4 border rounded p-3 bg-card">
            <div className="flex flex-col">
              <button onClick={() => move(idx, "up")} disabled={idx === 0} className="text-xs disabled:opacity-30">▲</button>
              <button onClick={() => move(idx, "down")} disabled={idx === recognitions.length - 1} className="text-xs disabled:opacity-30">▼</button>
            </div>
            <img src={rec.logo_url} alt={rec.title} className="h-10 object-contain" />
            <div className="flex-1">
              <h3 className="font-bold">{rec.title}</h3>
              <p className="text-sm">{rec.subtitle}</p>
            </div>
            <button onClick={async () => { await deleteDoc(doc(db, "recognitions", rec.id)); onRefresh(); }} className="text-red-500 text-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

