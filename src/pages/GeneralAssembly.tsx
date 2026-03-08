import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { GlobeGrid } from "@/components/decorative/SVGElements";

const GeneralAssembly = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <div className="pt-8"><Navbar /></div>
      <PageHero title="General Assembly" />

      <section className="py-16 px-6 relative overflow-hidden">
        <GlobeGrid className="absolute -right-32 top-0 w-96 h-96 text-primary opacity-[0.04]" />
        <div className="max-w-4xl mx-auto relative z-10 prose-container">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">

            {/* What is Model UN */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What is Model UN?</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p><strong className="text-foreground">Model UN</strong> is a simulation of the United Nations. A student, typically known as a <strong className="text-foreground">delegate</strong>, is assigned to a country to represent. Regardless of a student's personal beliefs or values, they are expected to adhere to their country's stance as a delegate of that country.</p>
                <p>A <strong className="text-foreground">Model UN conference</strong> is an event in which students act as delegates, taking on the roles of their assigned countries. A conference is the culmination of the entire event, often hosted by high schools or universities. Some examples of Model UN conferences are Harvard Model UN, Chicago International Model UN, and Saint Ignatius Model UN.</p>
                <p>Within a conference, committees are held. A <strong className="text-foreground">committee</strong> is a group of delegates who come together to discuss and solve a particular topic or type of issue. This guide covers General Assembly committees, which serve as the standard committee type for Model UN. <strong className="text-foreground">Beginners are recommended to start with the General Assembly</strong>. Some common examples of General Assembly committees are the World Health Organization (discusses global health issues) and the United Nations Children's Fund (focuses on children's rights and welfare).</p>
                <p>As a delegate in a committee, a student will discuss their country's stance on a topic, debate with other delegates, form alliances with delegates that have a similar stance, and form resolutions to the problem discussed.</p>
                <p>General Assembly committees can be split into four different categories:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Preparation</li>
                  <li>The Moderated Caucus</li>
                  <li>The Unmoderated Caucus</li>
                  <li>Presentation and Voting</li>
                </ol>
              </div>
            </div>

            {/* Preparation */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Preparation</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>It is vital to come prepared to Model UN conferences. The first step to preparation consists of research. Delegates typically research their country's history, government, policies, and values. Additionally, delegates are encouraged to study the topics that are assigned to their committee. Typically, a committee will have 2 topics, but the number can vary by conference.</p>
                <p>A good starting point for research is the <strong className="text-foreground">background guide</strong>, which is provided by the website of a conference.</p>

                <h3 className="font-heading text-lg font-bold text-foreground mt-6">General Research Tools:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="https://un.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UN.org</a></li>
                  <li><a href="https://digitallibrary.un.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The United Nations Digital Library</a></li>
                  <li><a href="https://treaties.un.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The United Nations Treaty Collection</a></li>
                  <li><a href="https://news.un.org/en/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">United Nations News</a></li>
                </ul>

                <h3 className="font-heading text-lg font-bold text-foreground mt-6">Country-Specific Information:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="https://www.cia.gov/the-world-factbook/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CIA World Factbook</a></li>
                  <li><a href="https://www.un.int/missions" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Permanent Missions to the United Nations</a></li>
                  <li>Embassy Websites</li>
                </ul>

                <h3 className="font-heading text-lg font-bold text-foreground mt-6">News and Current Events:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="https://www.bbc.com/news/world" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BBC Country Profiles</a></li>
                  <li><a href="https://www.aljazeera.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Al Jazeera</a></li>
                  <li><a href="https://www.reuters.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Reuters</a></li>
                  <li><a href="https://www.economist.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Economist</a></li>
                  <li><a href="https://www.theatlantic.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Atlantic</a></li>
                </ul>

                <h3 className="font-heading text-lg font-bold text-foreground mt-6">Policy and Academic Research:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="https://www.hrw.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Human Rights Watch</a></li>
                  <li><a href="https://www.amnesty.org/en/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Amnesty International</a></li>
                  <li><a href="https://www.cfr.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Council on Foreign Relations</a></li>
                  <li><a href="https://www.brookings.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Brookings Institution</a></li>
                  <li><a href="https://www.chathamhouse.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chatham House</a></li>
                  <li><a href="https://carnegieendowment.org/?lang=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Carnegie Endowment</a></li>
                </ul>

                <p>Many conferences require delegates to submit their research in the form of a <strong className="text-foreground">position paper</strong> (also known as a <strong className="text-foreground">white paper</strong>), a short essay that clarifies a delegate's position, demonstrates research and understanding, proposes solutions, and guides discussion.</p>

                <h3 className="font-heading text-lg font-bold text-foreground mt-6">Position Paper Resources:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="/how-to-write-a-white-paper" className="text-primary hover:underline">How to Write a White Paper</a></li>
                  <li><a href="/example-white-paper-1" className="text-primary hover:underline">Example White Paper #1</a></li>
                  <li><a href="/example-white-paper-2" className="text-primary hover:underline">Example White Paper #2</a></li>
                  <li><a href="/example-white-paper-3" className="text-primary hover:underline">Example White Paper #3</a></li>
                  <li><a href="/example-white-paper-4" className="text-primary hover:underline">Example White Paper #4</a></li>
                  <li><a href="/example-white-paper-5" className="text-primary hover:underline">Example White Paper #5</a></li>
                </ul>

                <p>A delegate should bring all materials digitally on a personal device, a printed-out position paper, research notes, pens, papers, sticky notes, and water. The standard dress code for a Model UN Conference is Western Business Attire.</p>
              </div>
            </div>

            {/* Moderated Caucus */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Moderated Caucus</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>A conference begins with the <strong className="text-foreground">roll call</strong>, which establishes attendance and determines whether <strong className="text-foreground">quorum</strong> is met. When their country's name is called, delegates respond with "present" or "present and voting". New delegates are encouraged to respond with "present" due to the flexibility given.</p>
                <p>A <strong className="text-foreground">moderated caucus</strong> is a structured form of debate focused on one specific sub-topic. During this caucus, delegates give speeches, allowing the committee to understand each delegate's position and find possible allies. Key features:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Topic-focused:</strong> allows delegates to dive deep into a single issue</li>
                  <li><strong className="text-foreground">Moderated by the dais</strong> (the person or group running the committee) to ensure order and formality</li>
                  <li><strong className="text-foreground">Proposed by delegates:</strong> Any delegate can motion for a moderated caucus by specifying the topic, total time, and speaking time</li>
                </ol>
                <p>Once motions are suggested, the committee votes. The first motion to receive a <strong className="text-foreground">simple majority</strong> passes. The dais will choose a <strong className="text-foreground">speaker's list</strong>. A delegate may <strong className="text-foreground">yield</strong> their time to: the dais, another delegate, or questions.</p>
                <p>Delegates can send <strong className="text-foreground">notes</strong> (pieces of paper) to other delegates during a moderated caucus to reach out to potential allies.</p>
              </div>
            </div>

            {/* Unmoderated Caucus */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Unmoderated Caucus</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>An <strong className="text-foreground">unmoderated caucus</strong> is a less structured form of discussion where delegates leave their seats and form groups (<strong className="text-foreground">blocs</strong>) with delegates holding similar positions. Blocs form through similar speeches during moderated caucuses or through <strong className="text-foreground">lobbying</strong>.</p>
                <p>Once blocs are formed, delegates begin writing a <strong className="text-foreground">working paper</strong>, a draft of solutions to the topic being discussed. After multiple unmoderated caucuses, the working paper becomes the <strong className="text-foreground">resolution paper</strong>, the final draft.</p>
                <p>Resolution papers have <strong className="text-foreground">sponsors</strong> (delegates who contributed significantly, typically 2-5) and <strong className="text-foreground">signatories</strong> (delegates who helped write or want to see the paper presented).</p>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="/example-resolution-paper" className="text-primary hover:underline">Example Resolution Paper</a></li>
                </ul>
              </div>
            </div>

            {/* Presentation and Voting */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Presentation and Voting</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Once a resolution paper has enough sponsors and signatories, sponsors will present to the committee. Some sponsors read the paper and others participate in Q&A.</p>
                <p>All delegates vote on each resolution paper ("yes", "no", "abstain", "yes with rights", "no with rights", or "pass"). A <strong className="text-foreground">simple majority</strong> passes the paper.</p>
                <p>An <strong className="text-foreground">amendment</strong> may be proposed. A <strong className="text-foreground">friendly amendment</strong> (agreed upon by all sponsors) passes without voting. An <strong className="text-foreground">unfriendly amendment</strong> requires a committee vote.</p>
              </div>
            </div>

            {/* Miscellaneous */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Miscellaneous</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>The <strong className="text-foreground">motion order precedence</strong> determines which motions are most important: Point of Order → Point of Personal Privilege → Point of Parliamentary Inquiry → Motion to Adjourn the Meeting → Motion to Suspend the Meeting → Motion to Adjourn Debate → Motion to Close Debate → Motion to Set the Agenda → Motion for a Moderated Caucus → Motion for an Unmoderated Caucus → Motion to Change Speaking Time.</p>
                <p>A <strong className="text-foreground">supermajority</strong> (more than two-thirds) is required for special resolutions, amendments, procedure changes, suspension of debate, revival of topics, or Division of the Question.</p>
                <p>A <strong className="text-foreground">dilatory motion</strong> is disruptive and made solely to obstruct debate. The dais can rule a motion as dilatory.</p>
              </div>
            </div>

            {/* Respect */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Respect and Behavior</h2>
              <p className="text-muted-foreground font-body leading-relaxed">It is important to be respectful to other delegates, the dais, and the conference as a whole. Significant effort is put into the creation and running of every Model UN conference, so delegates should put their best effort into their work and contribute to the committee as much as they can.</p>
            </div>

            {/* Glossary */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Glossary</h2>
              <dl className="space-y-3 text-muted-foreground font-body leading-relaxed">
                {[
                  ["Amendment", "A revision to part of a resolution paper that can serve as a compromise between two groups of delegates."],
                  ["Background Guide", "A research guide provided by the conference website; a good starting point for preparing for committee."],
                  ["Bloc", "A group of delegates who share a similar position or stance on an issue."],
                  ["Committee", "A group of delegates who come together to discuss and solve a specific topic or type of issue."],
                  ["Dais", "The person or group of people who run the committee."],
                  ["Delegate", "A student assigned to represent a country."],
                  ["Dilatory Motion", "A motion considered disruptive, proposed solely to obstruct the flow of debate."],
                  ["Division of the Question", "Voting on parts of a resolution paper separately."],
                  ["Formal Debate", "A structured debate where each delegate discusses main topics, national policy, and their position."],
                  ["Lobbying", "The informal process of building alliances with other delegates before or outside of sessions."],
                  ["Model UN", "A simulation of the United Nations."],
                  ["Moderated Caucus", "A structured form of debate focused on one specific sub-topic."],
                  ["Motion", "A formal request for the committee to perform a specific action."],
                  ["Note", "A small piece of paper passed between delegates during a moderated caucus."],
                  ["Point", "A request raised by a delegate for information or action; can be made without being recognized."],
                  ["Position Paper", "A short essay that clarifies a delegate's stance and proposes aligned solutions."],
                  ["Quorum", "The minimum number of delegates required for the committee to proceed."],
                  ["Resolution Paper", "The final draft of proposed solutions."],
                  ["Roll Call", "The attendance check at the beginning of a session."],
                  ["Simple Majority", "More than half of the votes."],
                  ["Speaker's List", "The list of delegates scheduled to speak during a moderated caucus."],
                  ["Sponsor", "A delegate who contributed significantly to a resolution paper."],
                  ["Signatory", "A delegate who helped write a resolution paper or supports it being presented."],
                  ["Substantive Voting", "Voting that allows yes, no, abstain, yes/no with rights, or pass."],
                  ["Supermajority", "A majority requiring more than two-thirds of the votes."],
                  ["Unmoderated Caucus", "A less structured debate format where delegates form groups and collaborate."],
                  ["White Paper", "Another name for a position paper."],
                  ["Working Paper", "A draft for the solutions that delegates want to see in effect."],
                ].map(([term, def]) => (
                  <div key={term} className="border-b border-border pb-3 last:border-0">
                    <dt className="font-bold text-foreground">{term}</dt>
                    <dd className="ml-4 mt-1">{def}</dd>
                  </div>
                ))}
              </dl>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralAssembly;
