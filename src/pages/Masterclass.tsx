import { motion } from "framer-motion";
import { Play, Calendar, Clock, ArrowRight, CheckCircle, Lock } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WaveDivider } from "@/components/decorative/SVGElements";

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
      <div className="pt-8"><Navbar /></div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 gradient-hero overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-8 backdrop-blur-sm">
              <Play size={14} className="fill-current" />
              Free & On-Demand
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-5">
              Meet the Masterclass
            </h1>
            <h2 className="font-heading text-xl md:text-2xl text-secondary mb-4">
              Your Free Guide to a Gavel
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg max-w-xl mx-auto">
              Hosted by Chloe Kizito, Director of Education
            </p>
          </motion.div>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 w-full h-12 text-background" />
      </section>

      {/* Stats */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
          {[
            { label: "Masterclasses", value: "14" },
            { label: "Free Sessions", value: "12" },
            { label: "Minutes Each", value: "60" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-card rounded-2xl p-6 shadow-card border border-border/50"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-body mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Masterclass Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
          >
            All Sessions
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-5">
            {masterclasses.map((mc, i) => (
              <motion.a
                key={mc.num}
                href={mc.open ? mc.link : undefined}
                target={mc.open ? "_blank" : undefined}
                rel={mc.open ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
                whileHover={mc.open ? { y: -4, scale: 1.01 } : {}}
                className={`group relative bg-card rounded-2xl p-6 shadow-card border border-border/50 transition-all duration-300 ${
                  mc.open ? "hover:shadow-elevated hover:border-primary/30 cursor-pointer" : "opacity-60 cursor-default"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-heading font-bold text-lg ${
                    mc.open
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {mc.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-foreground text-base mb-1.5 leading-snug">
                      {mc.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {mc.date.split("|")[0].trim()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {mc.date.split("|")[1]?.trim()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {mc.open ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Register <ArrowRight size={12} />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                        <Lock size={12} /> Closed
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-16 bg-card rounded-2xl p-8 shadow-card border border-border/50"
        >
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle size={18} className="text-primary" />
            Disclaimers
          </h3>
          <ul className="space-y-2 text-muted-foreground font-body text-sm">
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Masterclasses are recorded, so all audio, video, and chats are recorded and transcribed permanently</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Masterclass topics are subject to change without notice</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Reach out to Chloe Kizito, Director of Education, with any questions</li>
          </ul>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Masterclass;
