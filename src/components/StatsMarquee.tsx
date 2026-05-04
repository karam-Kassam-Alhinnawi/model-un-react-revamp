import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const StatsMarquee = () => {
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const snap = await getDocs(collection(db, "stats"));
      setStats(snap.docs.map((doc) => doc.data()));
      setLoading(false);
    };
    fetchStats();
  }, []);

  if (loading) return <div className="py-12 text-center text-muted-foreground">Loading stats...</div>;

  // Repeat enough items to fill the marquee
  const items = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="py-12 bg-accent overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-foreground/5 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex animate-marquee whitespace-nowrap"
      >
        {items.map((stat, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-accent-foreground font-heading font-bold text-2xl md:text-4xl">
              {stat.value}
            </span>
            <span className="ml-2 text-accent-foreground/70 font-body text-sm uppercase tracking-wider">
              {stat.label}
            </span>
            <span className="ml-8 text-secondary text-2xl">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsMarquee;