import { motion } from "framer-motion";
import { GlobeGrid } from "@/components/decorative/SVGElements";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const PartnersSection = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const snap = await getDocs(collection(db, "partners"));
        setPartners(snap.docs.map((doc) => doc.data()));
      } catch (err) {
        console.error("Firebase fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  if (loading) return <div className="py-24 text-center text-muted-foreground">Loading partners...</div>;

const getGridClasses = (index: number) => {
    switch (index) {
      case 0: return "col-start-1 row-start-1"; 
      case 1: return "col-start-1 row-start-2"; 
      case 2: return "col-start-2 row-start-1 row-span-2"; // The Big Middle
      case 3: return "col-start-3 row-start-1"; 
      case 4: return "col-start-3 row-start-2"; 
      default: return ""; 
    }
  };

  // Stagger variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
   <section className="relative py-16 bg-background overflow-hidden">
      <GlobeGrid className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] text-primary opacity-[0.04]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-bold mb-12 opacity-80"
        >
          Our Strategic Partners
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 md:gap-24 items-center justify-items-center"
        >
          {partners.slice(0, 5).map((p, i) => (
            <motion.a
              key={i}
              href={p.website_url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center justify-center w-full ${getGridClasses(i)}`}
            >
              <img
                src={p.logo_url}
                alt={p.name}
                className={`
                  ${i === 2 ? 'max-h-28 md:max-h-44' : 'max-h-12 md:max-h-20'} 
                  w-full object-contain opacity-90 hover:opacity-100 transition-opacity scale-125
                `}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;