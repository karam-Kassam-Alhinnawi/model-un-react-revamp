import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const masterclasses = [
  { num: 14, title: "Building an Opening Speech", date: "March 8 | 6:00 PM-7:00 PM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-14-building-an-opening-speech", open: true },
  { num: 13, title: "Accessibility and Inclusive Debate", date: "February 22 | 6:00 PM-7:00 PM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-13-accessibility-and-inclusive-debate", open: true },
  { num: 12, title: "Representation and Voice in Global Governance", date: "February 8 | 6:00 PM-7:00 PM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-12-representation-and-voice-in-global-governance-60-minutes", open: true },
  { num: 11, title: "Diplomatic Etiquette and Professionalism", date: "January 25 | 10:00 AM-11:00 AM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-11-diplomatic-etiquette-and-professionalism-60-minutes", open: true },
  { num: 10, title: "Understanding Geopolitics", date: "January 11 | 6:00 PM-7:00 PM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-9-understanding-geopolitics-60-minutes", open: true },
  { num: 9, title: "Representation and Position Profiling", date: "December 14 | 6:00 PM-7:00 PM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-9-representation-and-position-profiling-60-minutes", open: true },
  { num: 8, title: "The Key to Resolution Papers", date: "November 30 | 6:00 PM-7:00 PM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-8-the-key-to-resolution-papers", open: true },
  { num: 7, title: "Standing Out in Committee", date: "November 16 | 6:00 PM-7:00 PM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-7-standing-out-in-committee", open: true },
  { num: 6, title: "The Strategic Speech", date: "November 2 | 6:00 PM-7:00 PM CST", link: "https://www.zeffy.com/en-US/ticketing/masterclass-6-the-strategic-speech-60-minutes", open: true },
  { num: 5, title: "Navigating Position Papers", date: "October 19 | 6:00 PM-7:00 PM CDT", link: "https://www.zeffy.com/en-US/ticketing/masterclass-5-navigating-position-papers-60-minutes", open: true },
  { num: 4, title: "The Power of Procedure", date: "October 5 | 6:00 PM-7:00 PM CDT", link: "https://www.zeffy.com/en-US/ticketing/masterclass-4-the-power-of-procedure-60-minutes", open: true },
  { num: 3, title: "Research Unlocked", date: "September 21 | 6:00 PM-7:00 PM CDT", link: "https://www.zeffy.com/en-US/ticketing/masterclass-3-research-unlocked", open: true },
  { num: 2, title: "The Art of Speaking", date: "September 7 | 6:00 PM-7:00 PM CDT", link: "#", open: false },
  { num: 1, title: "Welcome to Model UN", date: "August 17 | 6:00 PM-7:00 PM CDT", link: "#", open: false },
];

const Masterclass = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <div className="pt-8"><Navbar /></div>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Meet the Masterclass</h1>
            <h2 className="font-heading text-xl md:text-2xl text-primary mb-2">Your Free Guide to a Gavel</h2>
            <p className="text-muted-foreground font-body">Hosted by Chloe Kizito, Director of Education</p>
          </motion.div>
        </div>
      </section>

      {/* Masterclass List */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {masterclasses.map((mc, i) => (
            <motion.div
              key={mc.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
                  Masterclass #{mc.num}: {mc.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-1">{mc.date}</p>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  {mc.open ? "Register for free to gain live and on-demand access!" : "Thank you to all attendees!"}
                </p>
              </div>
              <a
                href={mc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-shrink-0 px-6 py-2 rounded-full font-medium text-sm text-center transition-opacity ${
                  mc.open
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-muted-foreground cursor-default"
                }`}
              >
                {mc.open ? "Register" : "Registration Closed"}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-card rounded-2xl p-8 shadow-card">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Disclaimers</h3>
          <ul className="space-y-2 text-muted-foreground font-body text-sm">
            <li>• Masterclasses are recorded, so all audio, video, and chats are recorded and transcribed permanently</li>
            <li>• Masterclass topics are subject to change without notice</li>
            <li>• Reach out to Chloe Kizito, Director of Education, with any questions</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Masterclass;
