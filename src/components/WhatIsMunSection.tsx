import { motion } from "framer-motion";

const WhatIsMunSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            What is Model UN?
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed mb-10 max-w-2xl mx-auto">
            Model UN is an extracurricular activity that gives students the
            opportunity to simulate United Nations committees as delegates
            representing various countries. It offers high school students the
            chance to develop life-changing skills, become more involved in
            local, regional, national, and global communities, and involve
            themselves in an academic and enjoyable opportunity.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsMunSection;
