// seed.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// ─────────────────────────────
// 1. Learning Modules & Quizzes
// ─────────────────────────────
const modules = [
  // ── PAGE 1 : General Assembly (8 modules) ──
  {
    page_id: "page-1",
    sort_order: 1,
    title: "What is Model UN?",
    short_desc: "Introduction to the United Nations simulation, roles, and the General Assembly.",
    icon: "public",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?auto=format&fit=crop&q=80&w=800" alt="UN General Assembly" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Model UN is a simulation of the United Nations. A student, typically known as a delegate, is assigned to a country to represent. Regardless of a student's personal beliefs or values, they are expected to adhere to their country's stance as a delegate of that country.</p>
  <p>A Model UN conference is an event in which students act as delegates, taking on the roles of their assigned countries. A conference is the culmination of the entire event, often hosted by high schools or universities.</p>
  <div style="background-color: rgba(7, 89, 133, 0.15); border-left: 4px solid #075985; padding: 1.5rem; border-radius: 0 8px 8px 0;">
    <h4 style="color: #0ea5e9; margin: 0 0 1rem 0; font-family: 'Noto Serif', serif;">Committee Structures</h4>
    <p style="margin: 0;">General Assembly committees can be split into four different categories: Preparation, The Moderated Caucus, The Unmoderated Caucus, and Presentation and Voting.</p>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1526470498-9ae73c665de8?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What is the main purpose of Model UN?", answers: ["To simulate United Nations operations", "To play games", "To study history"], correct_index: 0 },
      { question_text: "What is a delegate expected to represent?", answers: ["Their personal beliefs", "Their assigned country's stance", "Their school"], correct_index: 1 },
      { question_text: "How many categories are General Assembly committees split into?", answers: ["Two", "Three", "Four"], correct_index: 2 }
    ]
  },
  {
    page_id: "page-1",
    sort_order: 2,
    title: "Preparation",
    short_desc: "Research protocols, background guides, and position papers.",
    icon: "search",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" alt="Research and Preparation" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>It is vital to come prepared to Model UN conferences. The first step to preparation consists of research. Delegates typically research their country's history, government, policies, and values.</p>
  <p>Many conferences require delegates to submit their research in the form of a position paper (also known as a white paper), a short essay that clarifies a delegate's position, demonstrates research and understanding, proposes solutions, and guides discussion.</p>
</div>`,
    image_url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What is the first step in preparation for Model UN?", answers: ["Writing speeches", "Research", "Making friends"], correct_index: 1 },
      { question_text: "What is another name for a position paper?", answers: ["White paper", "Blue paper", "Research paper"], correct_index: 0 },
      { question_text: "What should delegates research about their country?", answers: ["Only current policies", "History, government, policies, and values", "Just the geography"], correct_index: 1 }
    ]
  },
  {
    page_id: "page-1",
    sort_order: 3,
    title: "The Moderated Caucus",
    short_desc: "Structured debate, speeches, and parliamentary procedure.",
    icon: "gavel",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1475721025871-8b010bb92baf?auto=format&fit=crop&q=80&w=800" alt="Public Speaking and Debate" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>A conference begins with the roll call, which establishes attendance and determines whether quorum is met.</p>
  <p>A moderated caucus is a structured form of debate focused on one specific sub-topic. During this caucus, delegates give speeches, allowing the committee to understand each delegate's position and find possible allies.</p>
</div>`,
    image_url: "https://images.unsplash.com/photo-1475721025871-8b010bb92baf?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What establishes attendance at a conference?", answers: ["Sign-in sheet", "Roll call", "Name tags"], correct_index: 1 },
      { question_text: "What is a moderated caucus focused on?", answers: ["One specific sub-topic", "Everything at once", "Social networking"], correct_index: 0 },
      { question_text: "What does quorum determine?", answers: ["Lunch time", "Whether enough members are present", "Who speaks first"], correct_index: 1 }
    ]
  },
  {
    page_id: "page-1",
    sort_order: 4,
    title: "The Unmoderated Caucus",
    short_desc: "Informal lobbying, bloc formation, and working papers.",
    icon: "groups",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" alt="Group Discussion" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>An unmoderated caucus is a less structured form of discussion where delegates leave their seats and form groups (blocs) with delegates holding similar positions.</p>
  <p>Once blocs are formed, delegates begin writing a working paper, a draft of solutions to the topic being discussed. After multiple unmoderated caucuses, the working paper becomes the resolution paper.</p>
</div>`,
    image_url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What is an unmoderated caucus?", answers: ["Structured formal debate", "Less structured discussion with group formation", "A break time"], correct_index: 1 },
      { question_text: "What are groups with similar positions called?", answers: ["Teams", "Blocs", "Committees"], correct_index: 1 },
      { question_text: "What becomes the resolution paper?", answers: ["Position paper", "Working paper", "Draft paper"], correct_index: 1 }
    ]
  },
  {
    page_id: "page-1",
    sort_order: 5,
    title: "Presentation and Voting",
    short_desc: "Presenting resolutions, Q&A, and voting procedures.",
    icon: "how_to_vote",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800" alt="Voting Assembly" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Once a resolution paper has enough sponsors and signatories, sponsors will present to the committee. Some sponsors read the paper and others participate in Q&A.</p>
  <p>All delegates vote on each resolution paper ("yes", "no", "abstain", "yes with rights", "no with rights", or "pass"). A simple majority passes the paper.</p>
</div>`,
    image_url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "Who presents resolution papers?", answers: ["All delegates", "Sponsors", "The chair only"], correct_index: 1 },
      { question_text: "What majority passes a resolution paper?", answers: ["Simple majority", "Two-thirds majority", "Unanimous vote"], correct_index: 0 },
      { question_text: "Which is NOT a voting option?", answers: ["Yes", "Maybe", "Abstain"], correct_index: 1 }
    ]
  },
  {
    page_id: "page-1",
    sort_order: 6,
    title: "Miscellaneous",
    short_desc: "Motion precedence, majorities, and disruptive motions.",
    icon: "account_tree",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" alt="Rules and Procedures" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>The motion order precedence determines which motions are most important, ranging from a Point of Order down to a Motion to Change Speaking Time.</p>
  <p>A dilatory motion is disruptive and made solely to obstruct debate. The dais can rule a motion as dilatory.</p>
</div>`,
    image_url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What determines which motions are most important?", answers: ["Delegate preference", "Motion order precedence", "Chair decision"], correct_index: 1 },
      { question_text: "What is a dilatory motion?", answers: ["Productive motion", "Disruptive motion to obstruct debate", "Fast-track motion"], correct_index: 1 },
      { question_text: "Who can rule a motion as dilatory?", answers: ["Any delegate", "The dais", "Majority vote"], correct_index: 1 }
    ]
  },
  {
    page_id: "page-1",
    sort_order: 7,
    title: "Respect and Behavior",
    short_desc: "Diplomatic etiquette and conduct expectations.",
    icon: "handshake",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" alt="Handshake and Respect" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Even though Model UN is competitive and promotes opposing views, delegates should always respect one another. Any conflict resolution should be handled civilly, both in and out of committee.</p>
  <p>Respect also applies to the dais (the individuals overseeing the committee). Delegates must always wait to be recognized by the chair before speaking.</p>
  <p>It is important to be respectful to other delegates, the dais, and the conference as a whole. Significant effort is put into the creation and running of every Model UN conference.</p>
</div>`,
    image_url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "How should conflict be handled in Model UN?", answers: ["Aggressively", "Civilly", "Ignored"], correct_index: 1 },
      { question_text: "Who oversees the committee?", answers: ["Delegates", "The dais", "Observers"], correct_index: 1 },
      { question_text: "When can delegates speak?", answers: ["Anytime", "After being recognized by the chair", "During breaks only"], correct_index: 1 }
    ]
  },
  {
    page_id: "page-1",
    sort_order: 8,
    title: "Glossary",
    short_desc: "Dictionary of essential Model UN terminology.",
    icon: "menu_book",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9);">
  <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800" alt="Books and Glossary" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2); margin-bottom: 1rem;" />
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 8px;"><strong style="color: #0ea5e9; font-size: 1.1rem;">Bloc</strong><br/>A group of delegates who share a similar position.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 8px;"><strong style="color: #0ea5e9; font-size: 1.1rem;">Dais</strong><br/>The person or group running the committee.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 8px;"><strong style="color: #0ea5e9; font-size: 1.1rem;">Quorum</strong><br/>Minimum number of delegates to proceed.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 8px;"><strong style="color: #0ea5e9; font-size: 1.1rem;">Working Paper</strong><br/>A draft for proposed solutions.</div>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What is a bloc?", answers: ["A group of delegates with similar positions", "A voting method", "A type of motion"], correct_index: 0 },
      { question_text: "What is the dais?", answers: ["The audience", "The person or group running the committee", "A document"], correct_index: 1 },
      { question_text: "What is quorum?", answers: ["A voting system", "Minimum number of delegates to proceed", "A type of speech"], correct_index: 1 }
    ]
  },
  // ── PAGE 2 : Crisis (6 modules) ──
  {
    page_id: "page-2",
    sort_order: 1,
    title: "What is Crisis?",
    short_desc: "A fast-paced committee built around immediate response and short-term solutions.",
    icon: "warning",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Fast-paced team discussion" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Crisis committees are a more advanced, smaller, and faster type of Model UN committee. They simulate the rapid-response decision-making of a specific body, often under urgent pressure.</p>
  <p>They can be historical, contemporary, fictional, or futuristic. Examples include the United States Presidential Cabinet during the Cuban Missile Crisis, the United Nations Security Council facing a nuclear threat, a zombie apocalypse, or even a committee running a space colony.</p>
  <div style="background-color: rgba(7, 89, 133, 0.15); border-left: 4px solid #075985; padding: 1.5rem; border-radius: 0 8px 8px 0;">
    <h4 style="color: #0ea5e9; margin: 0 0 1rem 0; font-family: 'Noto Serif', serif;">Core idea</h4>
    <p style="margin: 0;">Unlike General Assembly, crisis committees focus on immediate response, short-term solutions, and constant adaptation.</p>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What makes Crisis committees different from General Assembly?", answers: ["They focus on immediate response", "They never use research", "They only use voting"], correct_index: 0 },
      { question_text: "What is the main purpose of a black paper?", answers: ["To explain the delegate's role and objectives", "To replace a position paper", "To list the voting procedure"], correct_index: 0 },
      { question_text: "What is a portfolio of powers?", answers: ["A collection of powers based on the position", "A group of country speeches", "A voting system"], correct_index: 0 }
    ]
  },
  {
    page_id: "page-2",
    sort_order: 2,
    title: "Preparation",
    short_desc: "Supplemental research, white papers, and black papers.",
    icon: "assignment",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" alt="Planning and research" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Everything required for preparation in a General Assembly committee is also required for Crisis. Anything extra is supplemental, not a replacement for the usual research work.</p>
  <p>Many conferences require a white paper and a black paper for each topic. The black paper explains a delegate's position and role, assessment, objectives, and intended initial actions.</p>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
    <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;"><strong style="color: #0ea5e9; display: block; margin-bottom: 0.5rem;">White paper</strong><span>General background research and position-building for the topic.</span></div>
    <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;"><strong style="color: #0ea5e9; display: block; margin-bottom: 0.5rem;">Black paper</strong><span>Delegate role, objectives, first actions, and crisis priorities.</span></div>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What should Crisis preparation always include?", answers: ["Only supplemental notes", "The same research required for GA", "No research at all"], correct_index: 1 },
      { question_text: "Which paper explains a delegate's position and role in Crisis?", answers: ["White paper", "Black paper", "Working paper"], correct_index: 1 },
      { question_text: "What does supplemental mean here?", answers: ["It replaces the main research", "It adds to the main research", "It removes the need for notes"], correct_index: 1 }
    ]
  },
  {
    page_id: "page-2",
    sort_order: 3,
    title: "The Position",
    short_desc: "Representing an individual with a portfolio of powers.",
    icon: "badge",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=800" alt="Delegate at a conference" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>In a Crisis committee, delegates usually represent individual people instead of countries. The delegate must speak and act according to that individual's opinions, values, and possible actions.</p>
  <p>Each position comes with a portfolio of powers, meaning a collection of powers and capabilities that can be used during committee. A stronger understanding of the position creates stronger, more believable crisis strategy.</p>
  <div style="background-color: rgba(7, 89, 133, 0.15); border-left: 4px solid #075985; padding: 1.5rem; border-radius: 0 8px 8px 0;">
    <h4 style="color: #0ea5e9; margin: 0 0 1rem 0; font-family: 'Noto Serif', serif;">Think like the person</h4>
    <p style="margin: 0;">The strongest crisis delegates do not just know the topic; they understand how their role would realistically react under pressure.</p>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "In Crisis committees, delegates usually represent what?", answers: ["Countries", "Individual people", "Entire blocs"], correct_index: 1 },
      { question_text: "What is a portfolio of powers?", answers: ["A set of powers and capabilities tied to the position", "A speech format", "A voting rule"], correct_index: 0 },
      { question_text: "What is the best way to think in this module?", answers: ["As the individual person", "As the chair", "As a spectator"], correct_index: 0 }
    ]
  },
  {
    page_id: "page-2",
    sort_order: 4,
    title: "Frontroom",
    short_desc: "Moderated debate, unmoderated caucuses, and directives.",
    icon: "forum",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" alt="Committee discussion" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>The frontroom is the public side of committee. Crisis committees use directives instead of resolution papers, and those directives are written in response to fast-moving problems.</p>
  <p>The frontroom includes moderated caucuses, unmoderated caucuses, and the drafting of directives. One example of this style is a directive that pushes a short-term solution with immediate effect.</p>
  <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;">
    <strong style="color: #0ea5e9; display: block; margin-bottom: 0.5rem;">Directive</strong>
    <span>A short resolution-style paper that focuses on immediate, practical action.</span>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What does the frontroom use instead of resolution papers?", answers: ["Directives", "Position papers", "Reports"], correct_index: 0 },
      { question_text: "Which activities happen in the frontroom?", answers: ["Moderated caucuses and unmoderated caucuses", "Only voting", "Only writing crisis notes"], correct_index: 0 },
      { question_text: "What is a directive?", answers: ["A short resolution paper with short-term solutions", "A long background guide", "A secret crisis update"], correct_index: 0 }
    ]
  },
  {
    page_id: "page-2",
    sort_order: 5,
    title: "Backroom",
    short_desc: "Crisis notes, updates, secret actions, and narrative strategy.",
    icon: "lock",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="Behind the scenes planning" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>The backroom is the behind-the-scenes side of Crisis. It receives crisis notes from delegates, which are private notes sent to make secret moves for a delegate's personal agenda.</p>
  <p>A delegate's crisis arc is the long-term narrative and strategic plan developed through those crisis notes. The backroom staff sends crisis updates based on the agenda, the notes, or random events that reshape the committee.</p>
  <div style="background-color: rgba(7, 89, 133, 0.15); border-left: 4px solid #075985; padding: 1.5rem; border-radius: 0 8px 8px 0;">
    <h4 style="color: #0ea5e9; margin: 0 0 1rem 0; font-family: 'Noto Serif', serif;">Crisis note thinking</h4>
    <p style="margin: 0;">Strong notes are specific, secretive, and tied to a goal that changes the committee in a meaningful way.</p>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What are crisis notes?", answers: ["Private notes to backroom chairs for secret actions", "Public speeches", "Voting slips"], correct_index: 0 },
      { question_text: "What is a crisis arc?", answers: ["A delegate's long-term narrative and plan", "A moderation rule", "A committee motion"], correct_index: 0 },
      { question_text: "What may happen if a delegate is assassinated?", answers: ["They leave forever", "They receive a new position and continue", "The committee ends"], correct_index: 1 }
    ]
  },
  {
    page_id: "page-2",
    sort_order: 6,
    title: "Glossary",
    short_desc: "Important crisis-committee terminology at a glance.",
    icon: "menu_book",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9);">
  <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800" alt="Reference notes and glossary" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2); margin-bottom: 1rem;" />
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Ad-Hoc Committee</strong><br />Delegates do not know their topic until the day of.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Assassination</strong><br />The removal of another delegate from committee, resulting in a new position.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Backroom</strong><br />The behind-the-scenes element of a Crisis simulation.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Crisis</strong><br />A more advanced, fast-paced type of Model UN committee.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Crisis Arc</strong><br />A delegate's long-term narrative and strategic plan.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Crisis Notes</strong><br />Private notes sent to backroom chairs requesting secret actions.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Directive</strong><br />A short resolution with short-term solutions.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Frontroom</strong><br />The public part of committee with debate and directives.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Joint Crisis Committee</strong><br />Two separate Crisis committees with opposing sides.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Portfolio of Powers</strong><br />A collection of powers based on the position represented.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Private Directive</strong><br />A directive that a small group works on in private.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Single Crisis</strong><br />The standard Crisis committee format.</div>
    <div style="background-color: rgba(28,27,27,0.5); padding: 1rem; border-radius: 12px;"><strong style="color: #0ea5e9; font-size: 1.02rem;">Specialized Committees</strong><br />Simulated bodies that differ from traditional committees.</div>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What is an Ad-Hoc Committee?", answers: ["A committee where the topic is unknown until the day of", "A committee with only voting", "A committee with no delegates"], correct_index: 0 },
      { question_text: "What is the backroom?", answers: ["The behind-the-scenes element of Crisis", "The public debate room", "A type of paper"], correct_index: 0 },
      { question_text: "What is a Joint Crisis Committee?", answers: ["Two separate Crisis committees with opposing sides", "A single committee with one chair", "A committee without powers"], correct_index: 0 }
    ]
  },
  // ── PAGE 3 : Awards (5 modules) ──
  {
    page_id: "page-3",
    sort_order: 1,
    title: "Awards",
    short_desc: "What awards mean and why consistency matters.",
    icon: "military_tech",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" alt="Awards podium" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Once a delegate has attended a few Model UN conferences, earning awards becomes the next goal. These recognitions are desirable and usually competitive, especially at international conferences with hundreds of delegates.</p>
  <p>With enough effort, the methods below can increase a delegate's chances of standing out. The real key is consistency: strong preparation, respectful behavior, and clear speaking habits across the entire conference.</p>
  <div style="background-color: rgba(7, 89, 133, 0.15); border-left: 4px solid #075985; padding: 1.5rem; border-radius: 0 8px 8px 0;">
    <h4 style="color: #0ea5e9; margin: 0 0 1rem 0; font-family: 'Noto Serif', serif;">Award mindset</h4>
    <p style="margin: 0;">Awards usually go to delegates who prepare well, contribute constantly, and make the dais's job easier.</p>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What is the goal of earning awards in Model UN?", answers: ["Recognition for strong performance", "A different committee topic", "A kind of motion"], correct_index: 0 },
      { question_text: "What matters most over time?", answers: ["Consistency", "Luck only", "Winning every vote"], correct_index: 0 },
      { question_text: "What should the dais notice?", answers: ["Effort and preparation", "Only loud voices", "Only fancy speeches"], correct_index: 0 }
    ]
  },
  {
    page_id: "page-3",
    sort_order: 2,
    title: "All Times",
    short_desc: "Habits that matter in every single setting.",
    icon: "schedule",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" alt="Professional public speaking" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Research and prepare as much as possible before the conference. Put effort into everything, because the dais can tell how much effort a delegate puts in.</p>
  <p>Be respectful and consistent. Fight through fatigue, stay detailed and clear, keep eye contact, maintain good posture, and speak professionally while still sounding like yourself.</p>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
    <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;">Prepare early.</div>
    <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;">Be respectful.</div>
    <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;">Stay consistent.</div>
    <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;">Speak clearly.</div>
    <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;">Keep good posture.</div>
    <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;">Sound like yourself.</div>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What should delegates do all the time?", answers: ["Prepare, stay respectful, and be consistent", "Only take notes", "Only speak during voting"], correct_index: 0 },
      { question_text: "How should delegates speak?", answers: ["Professionally but still like themselves", "Like a robot", "Only in memorized lines"], correct_index: 0 },
      { question_text: "What helps the most visually?", answers: ["Eye contact, good posture, confident voice", "Looking away", "Speaking too softly"], correct_index: 0 }
    ]
  },
  {
    page_id: "page-3",
    sort_order: 3,
    title: "Moderated Caucus",
    short_desc: "How to stand out while speeches are tightly structured.",
    icon: "record_voice_over",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Delegate speaking" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Memorize the opening speech for a strong first impression. A good speech should include a strong opening, the position name, a clear policy statement, and effective rhetoric.</p>
  <p>Address sub-issues during speeches, take notes during other delegates' speeches, keep your placard raised when possible, and send notes during unmoderated caucuses so delegates know where to find you.</p>
  <div style="background-color: rgba(7, 89, 133, 0.15); border-left: 4px solid #075985; padding: 1.5rem; border-radius: 0 8px 8px 0;">
    <h4 style="color: #0ea5e9; margin: 0 0 1rem 0; font-family: 'Noto Serif', serif;">Speech advantage</h4>
    <p style="margin: 0;">A strong opening speech can shape the room before alliances even begin to form.</p>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What should a strong opening speech include?", answers: ["Opening, position name, policy statement, rhetoric", "Only a joke", "Only a long quote"], correct_index: 0 },
      { question_text: "During moderated caucus, what should you do with other speeches?", answers: ["Take notes", "Ignore them", "Leave the room"], correct_index: 0 },
      { question_text: "Why send notes to other delegates?", answers: ["So they can find you in unmoderated caucus", "To end committee early", "To replace speeches"], correct_index: 0 }
    ]
  },
  {
    page_id: "page-3",
    sort_order: 4,
    title: "Unmoderated Caucus",
    short_desc: "Collaboration, leadership, and resolution writing.",
    icon: "groups",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800" alt="Team collaboration" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Show cooperation, because the dais actively looks for leaders and collaborators. Address delegates by their first names to seem more personable, distribute tasks, and contribute to the resolution paper where the main substance lives.</p>
  <p>Creative solutions matter, but they still need to be realistic. Learn from real United Nations successes and failures, compromise with collaborators, and try to earn a Q&amp;A session or presentation spot for the paper.</p>
  <div style="background-color: rgba(15,23,42,0.78); border: 1px solid rgba(14,165,233,0.14); border-radius: 14px; padding: 1rem;">
    <strong style="color: #0ea5e9; display: block; margin-bottom: 0.5rem;">Leadership signal</strong>
    <span>Delegates who organize people, not just ideas, usually stand out fastest.</span>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What does unmoderated caucus reward?", answers: ["Cooperation and leadership", "Silence", "Random talking"], correct_index: 0 },
      { question_text: "How should delegates address one another?", answers: ["By first name", "Only by country", "By number"], correct_index: 0 },
      { question_text: "What should resolutions do?", answers: ["Solve the problem realistically", "Avoid compromise", "Ignore the topic"], correct_index: 0 }
    ]
  },
  {
    page_id: "page-3",
    sort_order: 5,
    title: "Crisis-Specific",
    short_desc: "How to balance the front room and back room in crisis committees.",
    icon: "all_inclusive",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" alt="Strategic crisis planning" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>Balance the front room and back room. Be ready to speak twice in the same moderated caucus without repeating yourself, and create directives by drafting the main ideas before passing them around.</p>
  <p>Write multiple directives for different crisis updates, try to be the primary speaker, make your crisis notes clear and specific, and keep your crisis arc creative and multidimensional.</p>
  <div style="background-color: rgba(7, 89, 133, 0.15); border-left: 4px solid #075985; padding: 1.5rem; border-radius: 0 8px 8px 0;">
    <h4 style="color: #0ea5e9; margin: 0 0 1rem 0; font-family: 'Noto Serif', serif;">Crisis edge</h4>
    <p style="margin: 0;">If crisis notes are not being approved, try different angles, use your personal powers, and do not panic if you are assassinated — the dais will give you a new position.</p>
  </div>
</div>`,
    image_url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    quizzes: [
      { question_text: "What must crisis delegates balance?", answers: ["Front room and back room", "Only speaking and voting", "Only writing"], correct_index: 0 },
      { question_text: "What should crisis notes be?", answers: ["Clear and specific", "Vague and short", "Public and loud"], correct_index: 0 },
      { question_text: "What should you always use?", answers: ["Your personal powers", "Only the chair's advice", "No powers at all"], correct_index: 0 }
    ]
  },
  // ── PAGE 4 : Coming Soon ──
  {
    page_id: "page-4",
    sort_order: 1,
    title: "Coming Soon",
    short_desc: "Page 04 is ready for the next set of modules.",
    icon: "auto_awesome",
    content_html: `<div style="display: flex; flex-direction: column; gap: 1.5rem; color: rgba(229,226,225,0.9); line-height: 1.7;">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Workspace placeholder" style="width: 100%; border-radius: 12px; object-fit: cover; height: 250px; border: 1px solid rgba(14, 165, 233, 0.2);" />
  <p>This page is reserved for the next learning path module set.</p>
  <p>When you're ready, you can drop in another page worth of content without changing the dashboard layout.</p>
</div>`,
    image_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    quizzes: [] // no quiz questions yet
  }
];

// ─────────────────────────────
// 2. People
// ─────────────────────────────
const people = [
  { name: "Momin Ahmed", role: "Founder and President", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/a2daff4b-c90b-4ad9-966c-4dd0dbdf7a9b/1046788845.jpeg", category: "leadership" },
  { name: "Sharmagne Bacongallo", role: "Director of Programs", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/5f1310b8-0b74-41af-b0c9-d0aa928ec61b/IMG_7517.jpg", category: "leadership" },
  { name: "Chloe Kizito", role: "Director of Events", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/cff4fc78-232e-4782-9fc9-cedbe2f7c69d/Chloe+Kizito.jpeg", category: "leadership" },
  { name: "Mohammad Atiya", role: "Community Director", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/3a907f06-74da-4964-9b0e-99b05be822fc/Mohammad+Atiya.jpeg", category: "leadership" },
  { name: "Charlotte Kim", role: "Director of Education", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/36d1b97a-9850-40f0-bcc6-52b95311d360/Charlotte+Kim.jpg", category: "leadership" },
  { name: "Dr. David Wellman", role: "Inaugural Director, Grace School of Applied Diplomacy at DePaul University", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/59868ed2-9f46-443b-811d-48a70f8ab60d/David+Wellman.jpg", category: "advisory" },
  { name: "Michael Eaton", role: "Executive Director, National Model UN", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/8d966aa6-76a2-4740-ab50-5aeb2a589171/Michael+Eaton.jpg", category: "advisory" },
  { name: "Himaja Nagireddy", role: "11th UNA–USA Youth Observer to the United Nations", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/ac510af8-c3fe-4100-ac73-18f56401c353/Himaja+Nagireddy.jpg", category: "advisory" },
  { name: "Farah Eck", role: "Managing Director, United Nations Association of the USA", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b349f6b6-9dac-461a-bdd7-90e7ffec4aea/Farah+Eck.jpg", category: "advisory" },
  { name: "Harlan Cohen", role: "Public Speaker and New York Times Bestselling Author", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/85454e97-a02c-4a28-9585-6b3c59f957f5/Harlan+Cohen.jpg", category: "advisory" },
  { name: "Sean Seymore, PhD", role: "Centennial Professor of Law, Vanderbilt University", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/f35c998c-ee61-4c49-9172-83ce43bd7b36/Sean+Seymore.jpg", category: "advisory" },
  { name: "Dr. Zaher Sahloul", role: "President and Co-Founder, MedGlobal", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/a329751c-0b50-4b37-9791-eca47ff4648c/Zaher+Sahloul.jpg", category: "advisory" },
  { name: "Dr. Dilara Sayeed", role: "Founder and CEO, Center for Advancing Opportunity", image_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/ce80e0e3-e692-4ed9-b0ee-80ca50c4485c/Dilara+Sayeed.jpeg", category: "advisory" }
];

// ─────────────────────────────
// 3. News Config
// ─────────────────────────────
const newsConfig = {
  heading: "STAY UP TO DATE WITH MODEL UN ACADEMY!",
  body_prefix: "Follow our social media to keep up with all the ",
  body_bold: "latest news, events, and opportunities",
  body_suffix: " offered on our page!",
  instagram_url: "https://instagram.com/modelunacademy",
  linkedin_url: "https://linkedin.com/company/modelunacademy"
};

// ─────────────────────────────
// 4. News Posts (images)
// ─────────────────────────────
const newsPosts = [
  { image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop", alt_text: "Model UN speaker at podium", link_url: "https://instagram.com" },
  { image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop", alt_text: "Youth conference stage", link_url: "https://instagram.com" },
  { image_url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=300&h=300&fit=crop", alt_text: "Volunteer opportunity flyer", link_url: "https://instagram.com" },
  { image_url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop", alt_text: "Panel discussion", link_url: "https://instagram.com" }
];

// ─────────────────────────────
// 5. Masterclasses
// ─────────────────────────────
const masterclasses = [
  { title: "Masterclass #15: Points of Information", date_text: "April 11 | 7:45 AM-8:45 AM CDT", description: "Register for free to gain on-demand access!", status: "coming-soon" },
  { title: "Masterclass #14: Resolution Skills", date_text: "March 26 | 6:45 AM-7:45 AM CDT", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #13: Accessibility and Inclusive Debate", date_text: "February 22 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #12: Representation and Voice in Global Governance", date_text: "February 8 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #11: Diplomatic Etiquette and Professionalism", date_text: "January 25 | 10:00 AM-11:00 AM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #10: Understanding Geopolitics", date_text: "January 11 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #9: Representation and Position Profiling", date_text: "December 14 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #8: The Key to Resolution Papers", date_text: "November 30 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #7: Standing Out in Committee", date_text: "November 16 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #6: The Strategic Speech", date_text: "November 2 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #5: Navigating Position Papers", date_text: "October 19 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #4: The Power of Procedure", date_text: "October 5 | 6:00 PM-7:00 PM CST", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #3: Research Unlocked", date_text: "September 21 | 6:00 PM-7:00 PM CDT", description: "Register for free to gain on-demand access!", status: "register" },
  { title: "Masterclass #2: The Art of Speaking", date_text: "September 7 | 6:00 PM-7:00 PM CDT", description: "Register for free to gain on-demand access!", status: "registration-closed" },
  { title: "Masterclass #1: Welcome to Model UN", date_text: "August 17 | 6:00 PM-7:00 PM CST", description: "Thank you to all attendees!", status: "registration-closed" }
];

// ─────────────────────────────
// 6. Stats
// ─────────────────────────────
const stats = [
  { value: "101", label: "countries" },
  { value: "104", label: "languages" },
  { value: "1,500,000", label: "words" },
  { value: "18,000", label: "students" }
];

// ─────────────────────────────
// 7. Partners
// ─────────────────────────────
const partners = [
  { name: "UNA Chicago", logo_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/3c9c7837-b144-452c-b3d1-3b263367cb60/UNA%E2%80%93Chicago+Logo.png", website_url: "https://www.unachicago.org/" },
  { name: "MedGlobal", logo_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/eac17681-7622-4c85-8b2c-290c9a9b882e/MedGlobal+logo.png", website_url: "https://medglobal.org/" },
  { name: "Grace School of Applied Diplomacy", logo_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/7aff5be1-906e-42bc-8c5b-77b5e3bef0d7/Grace+School+of+Applied+Diplomacy+at+DePaul+University+Logo.png", website_url: "https://las.depaul.edu/academics/departments-programs/applied-diplomacy" },
  { name: "Humanity Rising", logo_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/dd27d216-3ce6-4ce0-a80b-0f610b3cf936/Humanity+Rising+Logo.png", website_url: "https://humanityrising.org/" },
  { name: "DePaul University Model UN", logo_url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/6f2ac383-3c7a-4a33-b923-3cbbb8c927d4/DePaul+University+Model+UN+Logo.png", website_url: "https://www.depaulmun.org/" }
];

// ─────────────────────────────
// 8. Take Action Items
// ─────────────────────────────
const takeActionItems = [
  {
    title: "Apply For Global Leadership",
    content: "Apply to join the Global Leadership team of a Forbes 30 Under 30 nonprofit! Applications are due Monday, March 2nd, 2026 and will be reviewed on a rolling basis.",
    link_url: "/take-action",
    link_text: "Apply For Global Leadership"
  },
  {
    title: "Read the Written Guides",
    content: "Read Model UN Academy's free written guides, available in 104 languages and totaling 1.3 million words. Learn diplomacy through Model UN to master public speaking, research, negotiation, and more.",
    link_url: "/learn-model-un",
    link_text: "Read the Written Guides"
  },
  {
    title: "Register for the Masterclass",
    content: "The Model UN Academy Masterclass is a dynamic webinar series crafted to elevate delegates of all experience levels into poised, persuasive, and globally aware diplomats.",
    link_url: "/masterclass",
    link_text: "Register for the Masterclass"
  },
  {
    title: "Start a Chapter",
    content: "Model UN Academy Chapters are official local branches of the world's largest youth-led educational Model UN nonprofit. These chapters empower students to become global leaders through diplomacy training, impactful programming, and community engagement.",
    link_url: "/programs",
    link_text: "Start a Chapter"
  },
  {
    title: "Join the Fellowship Waitlist",
    content: "Fellows spend 3-4 months building at the intersection of personal experiences and the United Nations Sustainable Development Goals.",
    link_url: "/fellowship",
    link_text: "Join the Fellowship Waitlist"
  }
];

// ─────────────────────────────
// 9. About Content
// ─────────────────────────────
const aboutContent = [
  {
    section_key: "our-story-paragraphs",
    content: {
      paragraphs: [
        "Model UN Academy was founded by Momin Ahmed in 2024 to make diplomacy, and the skills that come with it, more accessible to students worldwide. As a seasoned Model UN delegate himself, Momin recognized the power of Model UN in teaching public speaking, intellectual reasoning, negotiation, research, and many other vital skills. On top of skill development, Model UN also helps youth learn about global issues that aren't taught about in the majority of classrooms. Unfortunately, Model UN is an extracurricular activity typically limited to high-income students that speak English.",
        "Committed to solve this issue, Momin began writing educational guides on Model UN for free and translating them into other languages. With the initial success and positive feedback from local schools, Momin realized the profound impact of free education, especially when made available in a multitude of languages. This movement to make diplomacy more accessible has now grown into Model UN Academy.",
        "Momin's movement to make diplomacy more accessible to students worldwide has now grown into a global movement. Today, Model UN Academy serves as a global community for tens of thousands of students worldwide by championing accessibility."
      ]
    }
  },
  {
    section_key: "mission-statement",
    content: {
      text: "Model UN Academy is dedicated to bridging the gap between universal talent and limited opportunity in global diplomacy education. By transforming diplomacy into a vital life skill through accessibility in Model UN education, we're preparing the next generation to become Citizen Diplomats capable of navigating a polarized world with empathy and action."
    }
  },
  {
    section_key: "testimonials",
    content: [
      {
        name: "Naina Kapur",
        school: "Loyola University Chicago",
        image: "/assets/naina-kapur.jpg",
        quote: "Model UN is one of the most valuable extracurricular activities. Not just because it teaches students how to be concise, articulate and creative individuals, but because it teaches a lifelong skill of connecting. Personally, Model UN has given me some of the best friends who I still lean on today. Additionally learning from Model UN Academy is a gift in itself."
      },
      {
        name: "Charles Witteman",
        school: "University of Virginia",
        image: "/assets/charles-witteman.jpg",
        quote: "Upon further investigation, I loved the initial look of the Model UN Academy website. Right away, it was very apparent that the scope of Model UN Academy far exceeded my expectations, and it's clear that their team is dedicated to delivering quality Model UN resources to as many students as possible... I left feeling inspired and driven by Momin's vision for global student empowerment and collaboration."
      },
      {
        name: "Sarah Maghrabi",
        school: "University of Illinois Urbana-Champaign",
        image: "/assets/sarah-maghrabi.jpg",
        quote: "I joined Model UN as a junior in high school, eager to learn more about how it works. I found an amazing community and learned a lot about what it means to be a delegate and representative of a larger state. It helped me improve not only my technical skills but also develop soft skills that are crucial to working in team environments."
      }
    ]
  }
];

// ─────────────────────────────
// IMPORT FUNCTION
// ─────────────────────────────
async function seedData() {
  console.log("Seeding Firestore...");

  // 1. Learning Modules & Quizzes
  for (const mod of modules) {
    const docRef = await db.collection("learning_modules").add({
      page_id: mod.page_id,
      sort_order: mod.sort_order,
      title: mod.title,
      short_desc: mod.short_desc,
      icon: mod.icon,
      content_html: mod.content_html,
      image_url: mod.image_url
    });
    console.log(`  Module: ${mod.title}`);
    for (const q of mod.quizzes) {
      await docRef.collection("quiz_questions").add(q);
    }
  }

  // 2. People
  for (const p of people) {
    await db.collection("people").add(p);
  }
  console.log("  People seeded");

  // 3. News Config
  await db.collection("config").doc("news").set(newsConfig);
  console.log("  News config seeded");

  // 4. News Posts
  for (const np of newsPosts) {
    await db.collection("news_posts").add(np);
  }
  console.log("  News posts seeded");

  // 5. Masterclasses
  for (const mc of masterclasses) {
    await db.collection("masterclasses").add(mc);
  }
  console.log("  Masterclasses seeded");

  // 6. Stats
  for (const st of stats) {
    await db.collection("stats").add(st);
  }
  console.log("  Stats seeded");

  // 7. Partners
  for (const p of partners) {
    await db.collection("partners").add(p);
  }
  console.log("  Partners seeded");

  // 8. Take Action Items
  for (const ta of takeActionItems) {
    await db.collection("take_action_items").add(ta);
  }
  console.log("  Take action items seeded");

  // 9. About Content
  for (const ac of aboutContent) {
    await db.collection("about_content").add({
      section_key: ac.section_key,
      content: ac.content
    });
  }
  console.log("  About content seeded");

  console.log("✅ Seeding complete!");
}

seedData().catch(console.error);