import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import generalAssemblyImg from "@/assets/general-assembly.jpeg";
import crisisImg from "@/assets/crisis.jpeg";
import awardsImg from "@/assets/awards.jpeg";
import languagesImg from "@/assets/languages.jpg";

const categories = [
  { title: "General Assembly", image: generalAssemblyImg, link: "/general-assembly" },
  { title: "Crisis", image: crisisImg, link: "/crisis" },
  { title: "Awards", image: awardsImg, link: "/awards" },
  { title: "Languages", image: languagesImg, link: "/languages" },
];

const LearnModelUN = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? categories.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === categories.length - 1 ? 0 : c + 1));

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>

      <section className="pt-24 relative">
        <div className="relative h-[80vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img src={categories[current].image} alt={categories[current].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/50" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-primary-foreground">
              <motion.h1
                key={`title-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-5xl md:text-7xl font-bold mb-8"
              >
                {categories[current].title}
              </motion.h1>
              <a
                href={categories[current].link}
                className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity shadow-elevated"
              >
                Access Resources
              </a>
            </div>
          </div>

          <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors">
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {categories.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/50"}`} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearnModelUN;
