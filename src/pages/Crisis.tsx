import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Crisis = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <div className="pt-8"><Navbar /></div>
      <PageHero title="Crisis Committees" />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What is Crisis?</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p><strong className="text-foreground">Crisis</strong> committees are a more advanced, smaller, fast-paced type of Model UN committee that simulates the rapid-response decision-making process of a specific body. They can be historical, contemporary, fictional, or futuristic. Some examples include the United States Presidential Cabinet on the Cuban Missile Crisis, the United Nations Security Council responding to a nuclear threat, a zombie apocalypse, or space colonies.</p>
                <p>Unlike the long-term solutions of General Assembly, crisis committees highlight immediate response and short-term solutions. <strong className="text-foreground">Crisis committees are recommended for delegates who have already done a General Assembly committee.</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Preparation</li>
                  <li>The Position</li>
                  <li>The Frontroom</li>
                  <li>The Backroom</li>
                </ol>
                <p>The standard Crisis committee is a <strong className="text-foreground">Single Crisis</strong>. A <strong className="text-foreground">Joint Crisis Committee</strong> is two separate Crisis committees with opposing sides. An <strong className="text-foreground">Ad-Hoc Committee</strong> is where delegates don't know their topic until the day of.</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Preparation</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Everything required for <a href="/general-assembly" className="text-primary hover:underline">preparation for a General Assembly committee</a> is also required for Crisis. Any preparation here is supplemental.</p>
                <p>For Crisis committees, many conferences require a white paper and a <strong className="text-foreground">black paper</strong> for each topic. Black papers explain a delegate's position and role, assessment, objectives, and intended initial actions.</p>
                <h3 className="font-heading text-lg font-bold text-foreground mt-4">Resources:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="/how-to-write-a-white-paper" className="text-primary hover:underline">How to Write a White Paper</a></li>
                  <li><a href="/example-white-paper-1" className="text-primary hover:underline">Example White Paper #1–#5</a></li>
                  <li><a href="/example-black-paper" className="text-primary hover:underline">Example Black Paper</a></li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Position</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>In a Crisis committee, delegates typically represent individual people instead of countries. Delegates must represent their individual's opinions, values, and possible actions. They have a <strong className="text-foreground">portfolio of powers</strong>, a collection of powers and capabilities based on their position.</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Frontroom</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Crisis committees have <strong className="text-foreground">directives</strong> instead of resolution papers. A directive is a short resolution paper with short-term solutions written in response to a problem. The <strong className="text-foreground">frontroom</strong> contains moderated caucuses, unmoderated caucuses, and directives.</p>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="/example-directive" className="text-primary hover:underline">Example Directive</a></li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Backroom</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>The <strong className="text-foreground">backroom</strong> is the behind-the-scenes element. It receives <strong className="text-foreground">crisis notes</strong> from delegates—private notes sent to take secret actions for a delegate's personal agenda. Common reasons include furthering power, harming an opposing delegate, or learning about hidden details.</p>
                <p>A delegate's <strong className="text-foreground">Crisis arc</strong> is their long-term narrative and strategic plan developed through crisis notes.</p>
                <p>The backroom staff give <strong className="text-foreground">Crisis updates</strong> based on their agenda, delegates' crisis notes, or random events. An <strong className="text-foreground">assassination</strong> may result from attempting to remove opposition—the victim receives a new position and continues.</p>
                <h3 className="font-heading text-lg font-bold text-foreground mt-4">Example Crisis Notes:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  {[1,2,3,4,5,6].map(n => (
                    <li key={n}><a href={`/example-crisis-note-${n}`} className="text-primary hover:underline">Example Crisis Note #{n}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Glossary</h2>
              <dl className="space-y-3 text-muted-foreground font-body leading-relaxed">
                {[
                  ["Ad-Hoc Committee", "A type where delegates don't know their topic until the day of."],
                  ["Assassination", "The removal of another delegate from committee, resulting in a new position."],
                  ["Backroom", "The behind-the-scenes element of a Crisis simulation."],
                  ["Crisis", "A more advanced, fast-paced type of Model UN committee."],
                  ["Crisis Arc", "A delegate's long-term narrative and strategic plan."],
                  ["Crisis Notes", "Private notes sent to backroom chairs requesting secret actions."],
                  ["Crisis Update", "Random, influential events that affect most delegates."],
                  ["Directive", "A short resolution paper with short-term solutions."],
                  ["Frontroom", "The part of committee with moderated/unmoderated caucuses and directives."],
                  ["Joint Crisis Committee", "Two separate Crisis committees with opposing sides."],
                  ["Portfolio of Powers", "A collection of powers based on the position represented."],
                  ["Private Directive", "Directives that a small group works on in private."],
                  ["Single Crisis", "The standard Crisis committee."],
                  ["Specialized Committees", "Simulated bodies that differ from traditional committees."],
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

export default Crisis;
