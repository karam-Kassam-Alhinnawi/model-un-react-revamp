import { motion } from "framer-motion";
import impactImg from "@/assets/impact-report.jpeg";
import { DiplomaticStar, DotGrid } from "@/components/decorative/SVGElements";

const ImpactSection = () => {
  return (
    <section className="relative py-24 bg-card overflow-hidden">
      {/* Decorative elements */}
      <DotGrid className="absolute left-0 bottom-0 w-40 h-40 text-muted-foreground" rows={6} cols={6} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-y-14"
        >
       <div>
           <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            2025 Cumulative Impact Report
          </h2>
          <p className="text-black font-medium text-lg mb-8 font-body leading-relaxed">
            We were named to Forbes 30 Under 30 at 17 months old, making us one
            of the fastest growing nonprofits in the world.
          </p>
       </div>
          <motion.a
            href="/impact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-elevated transition-shadow"
          >
            Read the Report
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative group">
            <div className=" overflow-hidden scale-110 shadow-elevated">
              <motion.img
                src={impactImg}
                alt="2025 Impact Report"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
