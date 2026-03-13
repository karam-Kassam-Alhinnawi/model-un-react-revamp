import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OliveBranch } from "@/components/decorative/SVGElements";

const Fellowship = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <OliveBranch className="absolute left-2 top-32 w-12 h-48 text-primary" side="left" />
        <OliveBranch className="absolute right-2 top-32 w-12 h-48 text-primary" side="right" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Meet the Fellows</h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto mb-8">
              Cohort II of the Model UN Academy Fellowship hosted workshops for thousands of students, created targeted communities for those who needed it most, and developed software to apply Model UN and their personal experiences to the United Nations Sustainable Development Goals.
            </p>
            <a
              href="https://drive.google.com/file/d/1qMt5keAtC2XO_3IzM3ZddbaejJiTcCP0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Meet the Fellows
            </a>
          </motion.div>
        </div>
      </section>

      {/* What do Fellows do */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">What do Fellows do?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Spend 3-4 months building at the intersection of personal experiences and the United Nations Sustainable Development Goals.",
                "Learn relevant, powerful skills like entrepreneurship, leadership, project management, fundraising, communication, and more with exclusive modules.",
                "Attend personalized workshops to work directly with mentors, advisory board members, and experienced leaders.",
                "Utilize Model UN Academy's audience to build a professional foundation of visibility and credibility.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background rounded-2xl p-6 shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-muted-foreground font-body leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 gradient-hero text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">Unlock your potential.</h2>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Change the world.</h2>
            <a
              href="https://forms.gle/CRDRKFsNzenY31368"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Join the Waitlist for Cohort III
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fellowship;
