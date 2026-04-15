import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const tips = {
  allTimes: [
    "Research and prepare as much as possible leading up to the conference.",
    "Put effort into all work; the dais can tell how much effort a delegate puts in.",
    "Be respectful; the dais appreciates respectful delegates.",
    "Be consistent; fight through any fatigue.",
    "Be detailed and clear.",
    "Eye contact, good posture, and confident voice at all times.",
    "Speak professionally, but still sound like yourself.",
    'Never address yourself as "I" or "we", but as "the delegation of ____".',
    "Represent a position's policies accurately; Model UN is not for personal opinions.",
  ],
  moderated: [
    "Memorize the opening speech for a strong impression; include a strong opening, position name, clear policy statement, and effective rhetoric.",
    "Address sub-issues during speeches.",
    "Take notes during speeches; background knowledge on other perspectives is vital.",
    "Raise your placard at all times (unless you've already spoken).",
    "Send notes to other delegates telling them to find you during unmoderated caucuses.",
  ],
  unmoderated: [
    "Show cooperation; the dais actively seeks leaders and collaborators.",
    "Address other delegates by their first name; it makes you seem more personable.",
    "Distribute tasks; it makes you be seen as a leader.",
    "Contribute to the resolution paper (the main body has the most substance).",
    "Write creative solutions by thinking outside of the box (but stay realistic).",
    "Learn from the United Nations' successes and failures in real life.",
    "Ensure solutions solve the problem and aren't too extreme or unrealistic.",
    "Be willing to compromise with collaborators or other blocs.",
    "Push to get a Q&A session or a presentation spot for the resolution paper.",
  ],
  crisis: [
    "Balance the front room and back room.",
    "Be ready to speak twice in the same moderated caucus (without repeating).",
    "Create a directive and come up with the main ideas, then pass it around.",
    "Write multiple directives to address crisis updates.",
    "Try to be the primary speaker for directives.",
    "Clarity and specificity are key regarding crisis notes.",
    "Be creative and multidimensional with your crisis arc.",
    "If crisis notes aren't being approved, try different angles.",
    "Always use your personal powers (outlined in the background guide).",
    "Don't worry if you are assassinated; the dais will give you a new position.",
  ],
};

const Awards = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>
      <PageHero title="Awards" />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">

            <div className="py-8 text-left">
              <h2 className="font-heading text-2xl font-bold text-blue-600 mb-4">Introduction</h2>
              <p className="text-muted-foreground font-body leading-relaxed">Once a delegate has attended a few Model UN conferences, earning awards is the next step. These desirable recognitions aren't easy to get, especially at international conferences with hundreds of delegates. With enough effort, the tried-and-true methods below boost any delegate's chances.</p>
            </div>

            {[
              { title: "All Times", items: tips.allTimes },
              { title: "Moderated Caucus", items: tips.moderated },
              { title: "Unmoderated Caucus", items: tips.unmoderated },
              { title: "Crisis-Specific", items: tips.crisis },
            ].map((section) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-8 text-left">
                <h2 className="font-heading text-2xl font-bold text-blue-600 mb-4">{section.title}</h2>
                <ul className="space-y-3 text-muted-foreground font-body leading-relaxed">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Awards;