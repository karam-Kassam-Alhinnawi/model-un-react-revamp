import { motion } from "framer-motion";
import { WaveDivider, OliveBranch } from "@/components/decorative/SVGElements";

const MissionSection = () => {
  return (
    <section className="relative py-24 gradient-hero overflow-hidden">
      {/* Wave divider top */}
      <WaveDivider className="absolute top-0 left-0 w-full h-12 text-card" flip />

      {/* Olive branches */}
      <OliveBranch className="absolute left-4 top-20 w-16 h-60 text-primary-foreground" side="left" />
      <OliveBranch className="absolute right-4 top-20 w-16 h-60 text-primary-foreground" side="right" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground mb-8 leading-tight"
          >
            We're Making Diplomacy More Accessible For All
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-primary-foreground/80 text-lg md:text-xl font-body leading-relaxed mb-10"
          >
            Model UN Academy is dedicated to bridging the gap between universal
            talent and limited opportunity in global diplomacy education. By
            transforming diplomacy into a vital life skill through accessibility
            in Model UN education, we're preparing the next generation to become
            Citizen Diplomats capable of navigating a polarized world with
            empathy and action.
          </motion.p>
          <motion.a
            href="/take-action"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-sm hover:shadow-elevated transition-shadow"
          >
            Take Action
          </motion.a>
        </motion.div>
      </div>

      {/* Wave divider bottom */}
      <WaveDivider className="absolute bottom-0 left-0 w-full h-12 text-background" />
    </section>
  );
};

export default MissionSection;
