import React from "react";

// Data Extracted & Updated with Topic Images
export const MODULES_DATA = [
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

export const PAGE_2_MODULES = [
  {
    id: 1,
    title: "What is Crisis?",
    shortDesc: "A fast-paced committee built around immediate response and short-term solutions.",
    icon: "warning",
    left: 80,
    bottom: 160,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
          alt="Fast-paced team discussion"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>Crisis committees are a more advanced, smaller, and faster type of Model UN committee. They simulate the rapid-response decision-making of a specific body, often under urgent pressure.</p>
        <p>They can be historical, contemporary, fictional, or futuristic. Examples include the United States Presidential Cabinet during the Cuban Missile Crisis, the United Nations Security Council facing a nuclear threat, a zombie apocalypse, or even a committee running a space colony.</p>
        <div style={{ backgroundColor: "rgba(7, 89, 133, 0.15)", borderLeft: "4px solid #075985", padding: "1.5rem", borderRadius: "0 8px 8px 0" }}>
          <h4 style={{ color: "#0ea5e9", margin: "0 0 1rem 0", fontFamily: "'Noto Serif', serif" }}>Core idea</h4>
          <p style={{ margin: 0 }}>Unlike General Assembly, crisis committees focus on immediate response, short-term solutions, and constant adaptation.</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Preparation",
    shortDesc: "Supplemental research, white papers, and black papers.",
    icon: "assignment",
    left: 380,
    bottom: 340,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
          alt="Planning and research"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>Everything required for preparation in a General Assembly committee is also required for Crisis. Anything extra is supplemental, not a replacement for the usual research work.</p>
        <p>Many conferences require a white paper and a black paper for each topic. The black paper explains a delegate's position and role, assessment, objectives, and intended initial actions.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
          <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>
            <strong style={{ color: "#0ea5e9", display: "block", marginBottom: "0.5rem" }}>White paper</strong>
            <span>General background research and position-building for the topic.</span>
          </div>
          <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>
            <strong style={{ color: "#0ea5e9", display: "block", marginBottom: "0.5rem" }}>Black paper</strong>
            <span>Delegate role, objectives, first actions, and crisis priorities.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "The Position",
    shortDesc: "Representing an individual with a portfolio of powers.",
    icon: "badge",
    left: 680,
    bottom: 500,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=800"
          alt="Delegate at a conference"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>In a Crisis committee, delegates usually represent individual people instead of countries. The delegate must speak and act according to that individual's opinions, values, and possible actions.</p>
        <p>Each position comes with a portfolio of powers, meaning a collection of powers and capabilities that can be used during committee. A stronger understanding of the position creates stronger, more believable crisis strategy.</p>
        <div style={{ backgroundColor: "rgba(7, 89, 133, 0.15)", borderLeft: "4px solid #075985", padding: "1.5rem", borderRadius: "0 8px 8px 0" }}>
          <h4 style={{ color: "#0ea5e9", margin: "0 0 1rem 0", fontFamily: "'Noto Serif', serif" }}>Think like the person</h4>
          <p style={{ margin: 0 }}>The strongest crisis delegates do not just know the topic; they understand how their role would realistically react under pressure.</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Frontroom",
    shortDesc: "Moderated debate, unmoderated caucuses, and directives.",
    icon: "forum",
    left: 980,
    bottom: 260,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
          alt="Committee discussion"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>The frontroom is the public side of committee. Crisis committees use directives instead of resolution papers, and those directives are written in response to fast-moving problems.</p>
        <p>The frontroom includes moderated caucuses, unmoderated caucuses, and the drafting of directives. One example of this style is a directive that pushes a short-term solution with immediate effect.</p>
        <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>
          <strong style={{ color: "#0ea5e9", display: "block", marginBottom: "0.5rem" }}>Directive</strong>
          <span>A short resolution-style paper that focuses on immediate, practical action.</span>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Backroom",
    shortDesc: "Crisis notes, updates, secret actions, and narrative strategy.",
    icon: "lock",
    left: 1280,
    bottom: 420,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
          alt="Behind the scenes planning"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>The backroom is the behind-the-scenes side of Crisis. It receives crisis notes from delegates, which are private notes sent to make secret moves for a delegate's personal agenda.</p>
        <p>A delegate's crisis arc is the long-term narrative and strategic plan developed through those crisis notes. The backroom staff sends crisis updates based on the agenda, the notes, or random events that reshape the committee.</p>
        <div style={{ backgroundColor: "rgba(7, 89, 133, 0.15)", borderLeft: "4px solid #075985", padding: "1.5rem", borderRadius: "0 8px 8px 0" }}>
          <h4 style={{ color: "#0ea5e9", margin: "0 0 1rem 0", fontFamily: "'Noto Serif', serif" }}>Crisis note thinking</h4>
          <p style={{ margin: 0 }}>Strong notes are specific, secretive, and tied to a goal that changes the committee in a meaningful way.</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Glossary",
    shortDesc: "Important crisis-committee terminology at a glance.",
    icon: "menu_book",
    left: 1580,
    bottom: 300,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)" }}>
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800"
          alt="Reference notes and glossary"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)", marginBottom: "1rem" }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Ad-Hoc Committee</strong><br />Delegates do not know their topic until the day of.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Assassination</strong><br />The removal of another delegate from committee, resulting in a new position.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Backroom</strong><br />The behind-the-scenes element of a Crisis simulation.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Crisis</strong><br />A more advanced, fast-paced type of Model UN committee.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Crisis Arc</strong><br />A delegate's long-term narrative and strategic plan.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Crisis Notes</strong><br />Private notes sent to backroom chairs requesting secret actions.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Directive</strong><br />A short resolution with short-term solutions.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Frontroom</strong><br />The public part of committee with debate and directives.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Joint Crisis Committee</strong><br />Two separate Crisis committees with opposing sides.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Portfolio of Powers</strong><br />A collection of powers based on the position represented.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Private Directive</strong><br />A directive that a small group works on in private.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Single Crisis</strong><br />The standard Crisis committee format.</div>
          <div style={{ backgroundColor: "rgba(28,27,27,0.5)", padding: "1rem", borderRadius: "12px" }}><strong style={{ color: "#0ea5e9", fontSize: "1.02rem" }}>Specialized Committees</strong><br />Simulated bodies that differ from traditional committees.</div>
        </div>
      </div>
    )
  }
];

export const PAGE_3_MODULES = [
  {
    id: 1,
    title: "Awards",
    shortDesc: "What awards mean and why consistency matters.",
    icon: "military_tech",
    left: 80,
    bottom: 160,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
          alt="Awards podium"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>Once a delegate has attended a few Model UN conferences, earning awards becomes the next goal. These recognitions are desirable and usually competitive, especially at international conferences with hundreds of delegates.</p>
        <p>With enough effort, the methods below can increase a delegate's chances of standing out. The real key is consistency: strong preparation, respectful behavior, and clear speaking habits across the entire conference.</p>
        <div style={{ backgroundColor: "rgba(7, 89, 133, 0.15)", borderLeft: "4px solid #075985", padding: "1.5rem", borderRadius: "0 8px 8px 0" }}>
          <h4 style={{ color: "#0ea5e9", margin: "0 0 1rem 0", fontFamily: "'Noto Serif', serif" }}>Award mindset</h4>
          <p style={{ margin: 0 }}>Awards usually go to delegates who prepare well, contribute constantly, and make the dais's job easier.</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "All Times",
    shortDesc: "Habits that matter in every single setting.",
    icon: "schedule",
    left: 380,
    bottom: 340,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
          alt="Professional public speaking"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>Research and prepare as much as possible before the conference. Put effort into everything, because the dais can tell how much effort a delegate puts in.</p>
        <p>Be respectful and consistent. Fight through fatigue, stay detailed and clear, keep eye contact, maintain good posture, and speak professionally while still sounding like yourself.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
          <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>Prepare early.</div>
          <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>Be respectful.</div>
          <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>Stay consistent.</div>
          <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>Speak clearly.</div>
          <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>Keep good posture.</div>
          <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>Sound like yourself.</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Moderated Caucus",
    shortDesc: "How to stand out while speeches are tightly structured.",
    icon: "record_voice_over",
    left: 680,
    bottom: 500,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
          alt="Delegate speaking"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>Memorize the opening speech for a strong first impression. A good speech should include a strong opening, the position name, a clear policy statement, and effective rhetoric.</p>
        <p>Address sub-issues during speeches, take notes during other delegates' speeches, keep your placard raised when possible, and send notes during unmoderated caucuses so delegates know where to find you.</p>
        <div style={{ backgroundColor: "rgba(7, 89, 133, 0.15)", borderLeft: "4px solid #075985", padding: "1.5rem", borderRadius: "0 8px 8px 0" }}>
          <h4 style={{ color: "#0ea5e9", margin: "0 0 1rem 0", fontFamily: "'Noto Serif', serif" }}>Speech advantage</h4>
          <p style={{ margin: 0 }}>A strong opening speech can shape the room before alliances even begin to form.</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Unmoderated Caucus",
    shortDesc: "Collaboration, leadership, and resolution writing.",
    icon: "groups",
    left: 980,
    bottom: 260,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
          alt="Team collaboration"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>Show cooperation, because the dais actively looks for leaders and collaborators. Address delegates by their first names to seem more personable, distribute tasks, and contribute to the resolution paper where the main substance lives.</p>
        <p>Creative solutions matter, but they still need to be realistic. Learn from real United Nations successes and failures, compromise with collaborators, and try to earn a Q&amp;A session or presentation spot for the paper.</p>
        <div style={{ backgroundColor: "rgba(15,23,42,0.78)", border: "1px solid rgba(14,165,233,0.14)", borderRadius: "14px", padding: "1rem" }}>
          <strong style={{ color: "#0ea5e9", display: "block", marginBottom: "0.5rem" }}>Leadership signal</strong>
          <span>Delegates who organize people, not just ideas, usually stand out fastest.</span>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Crisis-Specific",
    shortDesc: "How to balance the front room and back room in crisis committees.",
    icon: "all_inclusive",
    left: 1280,
    bottom: 420,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
          alt="Strategic crisis planning"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>Balance the front room and back room. Be ready to speak twice in the same moderated caucus without repeating yourself, and create directives by drafting the main ideas before passing them around.</p>
        <p>Write multiple directives for different crisis updates, try to be the primary speaker, make your crisis notes clear and specific, and keep your crisis arc creative and multidimensional.</p>
        <div style={{ backgroundColor: "rgba(7, 89, 133, 0.15)", borderLeft: "4px solid #075985", padding: "1.5rem", borderRadius: "0 8px 8px 0" }}>
          <h4 style={{ color: "#0ea5e9", margin: "0 0 1rem 0", fontFamily: "'Noto Serif', serif" }}>Crisis edge</h4>
          <p style={{ margin: 0 }}>If crisis notes are not being approved, try different angles, use your personal powers, and do not panic if you are assassinated — the dais will give you a new position.</p>
        </div>
      </div>
    )
  }
];

export const PAGE_4_MODULES = [
  {
    id: 1,
    title: "Coming Soon",
    shortDesc: "Page 04 is ready for the next set of modules.",
    icon: "auto_awesome",
    left: 80,
    bottom: 160,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "rgba(229,226,225,0.9)", lineHeight: 1.7 }}>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
          alt="Workspace placeholder"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover", height: "250px", border: "1px solid rgba(14, 165, 233, 0.2)" }}
        />
        <p>This page is reserved for the next learning path module set.</p>
        <p>When you're ready, you can drop in another page worth of content without changing the dashboard layout.</p>
      </div>
    )
  }
];

export const PAGE_MODULES = {
  "page-1": MODULES_DATA,
  "page-2": PAGE_2_MODULES,
  "page-3": PAGE_3_MODULES,
  "page-4": PAGE_4_MODULES,
} as const;



export const PAGE_QUIZ_QUESTIONS = {
  "page-1": {
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
  },
  "page-2": {
    1: [
      { q: "What makes Crisis committees different from General Assembly?", a: ["They focus on immediate response", "They never use research", "They only use voting"], correct: 0 },
      { q: "What is the main purpose of a black paper?", a: ["To explain the delegate's role and objectives", "To replace a position paper", "To list the voting procedure"], correct: 0 },
      { q: "What is a portfolio of powers?", a: ["A collection of powers based on the position", "A group of country speeches", "A voting system"], correct: 0 }
    ],
    2: [
      { q: "What should Crisis preparation always include?", a: ["Only supplemental notes", "The same research required for GA", "No research at all"], correct: 1 },
      { q: "Which paper explains a delegate's position and role in Crisis?", a: ["White paper", "Black paper", "Working paper"], correct: 1 },
      { q: "What does supplemental mean here?", a: ["It replaces the main research", "It adds to the main research", "It removes the need for notes"], correct: 1 }
    ],
    3: [
      { q: "In Crisis committees, delegates usually represent what?", a: ["Countries", "Individual people", "Entire blocs"], correct: 1 },
      { q: "What is a portfolio of powers?", a: ["A set of powers and capabilities tied to the position", "A speech format", "A voting rule"], correct: 0 },
      { q: "What is the best way to think in this module?", a: ["As the individual person", "As the chair", "As a spectator"], correct: 0 }
    ],
    4: [
      { q: "What does the frontroom use instead of resolution papers?", a: ["Directives", "Position papers", "Reports"], correct: 0 },
      { q: "Which activities happen in the frontroom?", a: ["Moderated caucuses and unmoderated caucuses", "Only voting", "Only writing crisis notes"], correct: 0 },
      { q: "What is a directive?", a: ["A short resolution paper with short-term solutions", "A long background guide", "A secret crisis update"], correct: 0 }
    ],
    5: [
      { q: "What are crisis notes?", a: ["Private notes to backroom chairs for secret actions", "Public speeches", "Voting slips"], correct: 0 },
      { q: "What is a crisis arc?", a: ["A delegate's long-term narrative and plan", "A moderation rule", "A committee motion"], correct: 0 },
      { q: "What may happen if a delegate is assassinated?", a: ["They leave forever", "They receive a new position and continue", "The committee ends"], correct: 1 }
    ],
    6: [
      { q: "What is an Ad-Hoc Committee?", a: ["A committee where the topic is unknown until the day of", "A committee with only voting", "A committee with no delegates"], correct: 0 },
      { q: "What is the backroom?", a: ["The behind-the-scenes element of Crisis", "The public debate room", "A type of paper"], correct: 0 },
      { q: "What is a Joint Crisis Committee?", a: ["Two separate Crisis committees with opposing sides", "A single committee with one chair", "A committee without powers"], correct: 0 }
    ]
  },
  "page-3": {
    1: [
      { q: "What is the goal of earning awards in Model UN?", a: ["Recognition for strong performance", "A different committee topic", "A kind of motion"], correct: 0 },
      { q: "What matters most over time?", a: ["Consistency", "Luck only", "Winning every vote"], correct: 0 },
      { q: "What should the dais notice?", a: ["Effort and preparation", "Only loud voices", "Only fancy speeches"], correct: 0 }
    ],
    2: [
      { q: "What should delegates do all the time?", a: ["Prepare, stay respectful, and be consistent", "Only take notes", "Only speak during voting"], correct: 0 },
      { q: "How should delegates speak?", a: ["Professionally but still like themselves", "Like a robot", "Only in memorized lines"], correct: 0 },
      { q: "What helps the most visually?", a: ["Eye contact, good posture, confident voice", "Looking away", "Speaking too softly"], correct: 0 }
    ],
    3: [
      { q: "What should a strong opening speech include?", a: ["Opening, position name, policy statement, rhetoric", "Only a joke", "Only a long quote"], correct: 0 },
      { q: "During moderated caucus, what should you do with other speeches?", a: ["Take notes", "Ignore them", "Leave the room"], correct: 0 },
      { q: "Why send notes to other delegates?", a: ["So they can find you in unmoderated caucus", "To end committee early", "To replace speeches"], correct: 0 }
    ],
    4: [
      { q: "What does unmoderated caucus reward?", a: ["Cooperation and leadership", "Silence", "Random talking"], correct: 0 },
      { q: "How should delegates address one another?", a: ["By first name", "Only by country", "By number"], correct: 0 },
      { q: "What should resolutions do?", a: ["Solve the problem realistically", "Avoid compromise", "Ignore the topic"], correct: 0 }
    ],
    5: [
      { q: "What must crisis delegates balance?", a: ["Front room and back room", "Only speaking and voting", "Only writing"], correct: 0 },
      { q: "What should crisis notes be?", a: ["Clear and specific", "Vague and short", "Public and loud"], correct: 0 },
      { q: "What should you always use?", a: ["Your personal powers", "Only the chair's advice", "No powers at all"], correct: 0 }
    ]
  }
};

export const QUIZ_QUESTIONS = PAGE_QUIZ_QUESTIONS["page-1"];

export const PAGE_LINKS = [
  { id: "page-1", label: "Page 01", title: "Learning Path Dashboard", href: "/learning-path/page-1" },
  { id: "page-2", label: "Page 02", title: "Learning Path Dashboard", href: "/learning-path/page-2" },
  { id: "page-3", label: "Page 03", title: "Learning Path Dashboard", href: "/learning-path/page-3" },
];
