import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { GlobeGrid } from "@/components/decorative/SVGElements";

interface PageHeroProps {
  title: string;
}

const PageHero = ({ title }: PageHeroProps) => {
  return (
    <section className="relative pt-24 h-[50vh] flex items-center justify-center overflow-hidden">
     
      <div className="absolute inset-0 bg-sky-800" />

      {/* Globe SVG */}
      <GlobeGrid className="absolute right-10 bottom-10 w-64 h-64 text-primary-foreground opacity-[0.08]" />

      {/* Welcome words in different languages */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["স্বাগতম", "مرحبا", "BIENVENU", "WILLKOMMEN", "欢迎", "Добро пожаловать", "BEM-VINDO", "BIENVENIDO", "환영", "स्वागत"].map(
          (word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="absolute font-heading text-primary-foreground/[0.12] font-bold select-none"
              style={{
                fontSize: `${2 + Math.random() * 3}rem`,
                top: `${10 + Math.random() * 70}%`,
                left: `${4 + Math.random() * 85}%`,
                transform: `rotate(${-10 + Math.random() * 20}deg)`,
              }}
            >
              {word}
            </motion.span>
          )
        )}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 font-heading text-5xl md:text-6xl font-bold text-primary-foreground text-center"
      >
        {title}
      </motion.h1>
    </section>
  );
};

export default PageHero;
