import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import impactCover from "@/assets/impact-report-cover.png";
import founderLetter from "@/assets/founder-letter.jpeg";
import { Globe, BookOpen, Users, Eye, Languages, Heart } from "lucide-react";

const stats = [
  { value: "18,000", label: "STUDENTS", description: "tracked through direct communication with programs and website analytics", icon: Users },
  { value: "1,553,344", label: "WORDS", description: "of written guides about General Assembly, Crisis, and awards", icon: BookOpen },
  { value: "101", label: "COUNTRIES", description: "tracked through direct communication with programs and website analytics", icon: Globe },
  { value: "741,059", label: "ORGANIC VIEWS", description: "across Model UN Academy website and social media platforms", icon: Eye },
  { value: "104", label: "LANGUAGES", description: "written guides translated to make diplomacy accessible worldwide", icon: Languages },
  { value: "100%", label: "FREE", description: "all resources completely free to ensure accessibility for all students", icon: Heart },
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <div className="pt-8">
        <Navbar />
      </div>

      {/* Impact Report Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={founderLetter}
              alt="Letter from the Founder"
              className="rounded-2xl shadow-elevated w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              2025 Cumulative Impact Report
            </h1>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              During 2025, Founder Momin Ahmed was named as the youngest honoree
              of the 2026 Forbes 30 Under 30 list.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={impactCover}
                alt="Impact Report Cover"
                className="w-32 rounded-lg shadow-card"
              />
              <a
                href="https://drive.google.com/file/d/1qMt5keAtC2XO_3IzM3ZddbaejJiTcCP0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Read the Report
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 17 Months of Impact */}
      <section className="py-24 px-6 gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-wider uppercase">
              17 Months of Impact
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto font-body">
              In just 17 months, we've grown from a collection of Google Docs to
              a global edtech nonprofit changing lives around the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <p className="text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm font-bold tracking-widest uppercase mb-3 opacity-90">
                  {stat.label}
                </p>
                <p className="text-sm opacity-70 font-body">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
