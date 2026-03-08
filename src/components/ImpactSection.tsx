import { motion } from "framer-motion";
import impactImg from "@/assets/impact-report.jpeg";

const ImpactSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={impactImg}
              alt="2025 Impact Report"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            2025 Cumulative Impact Report
          </h2>
          <p className="text-muted-foreground text-lg mb-8 font-body leading-relaxed">
            We were named to Forbes 30 Under 30 at 17 months old, making us one
            of the fastest growing nonprofits in the world.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Read the Report
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
