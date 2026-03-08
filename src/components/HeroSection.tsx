import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroChapter from "@/assets/hero-chapter.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Model UN Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-secondary font-medium text-sm uppercase tracking-widest mb-4">
            Featured Chapter
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Meet Antipolo City, Philippines
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-lg mb-8 font-body">
            Sharmagne, Lianne, Zoe, Geri, Maycee, and Thea are leading Model UN
            Academy's chapter in Antipolo City, mobilizing youth to ensure that
            diplomacy and Model UN are more accessible to their local community.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Start a Chapter
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroChapter}
              alt="Antipolo City Chapter"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
