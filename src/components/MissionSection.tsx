import { motion } from "framer-motion";
import { OliveBranch } from "@/components/decorative/SVGElements";

const MissionSection = () => {
  return (
    <section className="relative py-5 overflow-hidden">

      <OliveBranch className="absolute left-4 top-20 w-16 h-60 text-primary-foreground" side="left" />
      <OliveBranch className="absolute right-4 top-20 w-16 h-60 text-primary-foreground" side="right" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video"
          >
            <iframe
              src="https://www.youtube.com/embed/1RN7wtJWeJQ"
              title="TEDx Talk - Model UN Academy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-body text-2xl md:text-4xl font-bold text-black mb-8 leading-tight"
            >
              We're Making Diplomacy More Accessible For All
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-black text-lg md:text-xl font-body leading-relaxed mb-10"
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
              className="inline-block px-10 py-4 rounded-full bg-primary text-white font-bold text-sm hover:shadow-elevated transition-shadow"
            >
              Take Action
            </motion.a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default MissionSection;
