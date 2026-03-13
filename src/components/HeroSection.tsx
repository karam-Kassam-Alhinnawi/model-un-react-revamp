import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroChapter from "@/assets/video.mov";
import { GlobeGrid, DotGrid } from "@/components/decorative/SVGElements";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Model UN Conference"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      {/* Decorative SVGs */}
      <GlobeGrid className="absolute -left-40 top-1/4 w-[500px] h-[500px] text-primary-foreground opacity-[0.07]" />
      <DotGrid className="absolute right-0 bottom-0 w-48 h-48 text-primary-foreground" rows={6} cols={6} />

      {/* Floating language words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { text: "স্বাগতম", x: 15, y: 20, size: 2.5 },
          { text: "مرحبا", x: 70, y: 15, size: 2 },
          { text: "WILLKOMMEN", x: 25, y: 50, size: 3 },
          { text: "Добро пожаловать", x: 55, y: 70, size: 1.8 },
          { text: "BIENVENIDO", x: 35, y: 80, size: 2.8 },
          { text: "स्वागत", x: 80, y: 30, size: 2.2 },
          { text: "خوش آمدید", x: 60, y: 85, size: 2 },
          { text: "SELAMAT DATANG", x: 50, y: 20, size: 2.3 },
          { text: "欢迎", x: 85, y: 55, size: 2.5 },
          { text: "BIENVENU", x: 75, y: 25, size: 2.6 },
        ].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 1 }}
            className="absolute font-heading text-primary-foreground/[0.12] font-bold select-none"
            style={{
              fontSize: `${word.size}rem`,
              top: `${word.y}%`,
              left: `${word.x}%`,
              transform: `rotate(${-8 + Math.random() * 16}deg)`,
            }}
          >
            {word.text}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block text-secondary font-medium text-sm uppercase tracking-widest mb-4"
          >
            Featured Chapter
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Meet Antipolo City, Philippines
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-lg mb-8 font-body">
            Sharmagne, Lianne, Zoe, Geri, Maycee, and Thea are leading Model UN
            Academy's chapter in Antipolo City, mobilizing youth to ensure that
            diplomacy and Model UN are more accessible to their local community.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/programs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:shadow-elevated transition-shadow"
            >
              Start a Chapter
            </motion.a>
            <motion.a
              href="mailto:exec@modelunacademy.org"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <video controls width="100%" controlsList="nodownload">
               <source src={heroChapter}  />
              </video>
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-2xl border border-primary-foreground/10 -z-10" />
            <div className="absolute -inset-6 rounded-3xl border border-primary-foreground/5 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
