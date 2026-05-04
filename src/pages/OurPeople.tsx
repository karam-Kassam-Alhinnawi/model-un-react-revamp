import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

const OurPeople = () => {
  const navigate = useNavigate();
  const [leadership, setLeadership] = useState<any[]>([]);
  const [advisory, setAdvisory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      // Order by sort_order to respect admin ordering
      const leadSnap = await getDocs(
        query(
          collection(db, "people"),
          where("category", "==", "leadership"),
          // orderBy("sort_order")
        )
      );
      const advSnap = await getDocs(
        query(
          collection(db, "people"),
          where("category", "==", "advisory"),
          // orderBy("sort_order")
        )
      );

      setLeadership(leadSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setAdvisory(advSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    };
    fetchPeople();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8">
        <Navbar />
      </div>

      {/* Senior Leadership */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            Senior Leadership
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12">
            {leadership.map((person, i) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.08, 0.4), duration: 0.5 }}
                className="group text-center"
              >
                <div className="relative mx-auto mb-5 w-56 h-56">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 scale-105 rounded-full" />
                  <img
                    src={person.image_url}
                    alt={person.name}
                    className="relative object-cover shadow-elevated group-hover:scale-105 transition-transform duration-500 w-full h-full rounded-full"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-snug max-w-[200px] mx-auto mb-4">
                  {person.role}
                </p>
                <button
                  onClick={() => navigate(`/bio/${person.id}`)}
                  className="px-4 py-2 text-sm font-medium border border-primary text-primary hover:scale-105 transition duration-300 rounded-md"
                >
                  Read Bio
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            Advisory Board
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {advisory.map((person, i) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.08, 0.4), duration: 0.5 }}
                className="group text-center"
              >
                <div className="relative mx-auto mb-5 w-full aspect-square">
                  <img
                    src={person.image_url}
                    alt={person.name}
                    className="relative object-cover shadow-elevated group-hover:scale-105 transition-transform duration-500 w-full h-full"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-snug max-w-[200px] mx-auto">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurPeople;