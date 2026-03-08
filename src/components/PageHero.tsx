import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

interface PageHeroProps {
  title: string;
}

const PageHero = ({ title }: PageHeroProps) => {
  return (
    <section className="relative pt-24 h-[50vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/60" />

      {/* Welcome words in different languages */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["স্বাগতম", "مرحبا", "BIENVENU", "WILLKOMMEN", "欢迎", "Добро пожаловать", "BEM-VINDO", "BIENVENIDO", "환영", "स्वागत"].map(
          (word, i) => (
            <span
              key={i}
              className="absolute font-heading text-primary-foreground/15 font-bold select-none"
              style={{
                fontSize: `${2 + Math.random() * 3}rem`,
                top: `${10 + Math.random() * 70}%`,
                left: `${5 + Math.random() * 85}%`,
                transform: `rotate(${-10 + Math.random() * 20}deg)`,
              }}
            >
              {word}
            </span>
          )
        )}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 font-heading text-5xl md:text-6xl font-bold text-primary-foreground text-center"
      >
        {title}
      </motion.h1>
    </section>
  );
};

export default PageHero;
