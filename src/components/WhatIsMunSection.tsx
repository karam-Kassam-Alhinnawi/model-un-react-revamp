import { motion } from "framer-motion";
import { CrosshatchPattern } from "@/components/decorative/SVGElements";

const WhatIsMunSection = () => {
  return (
    <section className="relative py-24 bg-card overflow-hidden">
      <CrosshatchPattern className="absolute right-0 top-0 w-64 h-64 text-primary" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            What is Model UN?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-lg font-body leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Model UN is an extracurricular activity that gives students the
            opportunity to simulate United Nations committees as delegates
            representing various countries. It offers high school students the
            chance to develop life-changing skills, become more involved in
            local, regional, national, and global communities, and involve
            themselves in an academic and enjoyable opportunity.
          </motion.p>
          <motion.a
            href="/learn-model-un"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-elevated transition-shadow"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsMunSection;
