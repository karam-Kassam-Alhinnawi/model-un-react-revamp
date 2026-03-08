import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground mb-8 leading-tight">
            We're Making Diplomacy More Accessible For All
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-body leading-relaxed mb-10">
            Model UN Academy is dedicated to bridging the gap between universal
            talent and limited opportunity in global diplomacy education. By
            transforming diplomacy into a vital life skill through accessibility
            in Model UN education, we're preparing the next generation to become
            Citizen Diplomats capable of navigating a polarized world with
            empathy and action.
          </p>
          <a
            href="#"
            className="inline-block px-10 py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Take Action
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
