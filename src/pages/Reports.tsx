import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import impactCover from "@/assets/impact-report-cover.png";
import founderLetter from "@/assets/founder-letter.jpeg";

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="h-[110%] bg-black w-0 md:w-[80%] absolute"></div>
            <img src={impactCover} alt="2025 Impact Report" className=" translate-y-10 shadow-elevated w-full max-w-md mx-auto relative" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">2025 Cumulative Impact Report</h1>
            <p className="text-lg text-black font-body leading-relaxed mb-8">
              During 2025, Founder Momin Ahmed was named as the youngest honoree of the 2026 Forbes 30 Under 30 list.
            </p>
            <img src={founderLetter} alt="Letter from Founder" className="rounded-xl shadow-card mb-8 w-full max-w-sm md:max-w-md lg:max-w-full" />
            <a
              href="https://drive.google.com/file/d/1qMt5keAtC2XO_3IzM3ZddbaejJiTcCP0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity shadow-elevated"
            >
              Read the Report
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reports;
