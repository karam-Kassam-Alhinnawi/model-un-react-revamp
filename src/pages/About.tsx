import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const About = () => {
  const [ourStoryParagraphs, setOurStoryParagraphs] = useState<string[]>([]);
  const [missionStatement, setMissionStatement] = useState("");
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      const snap = await getDocs(collection(db, "about_content"));
      snap.docs.forEach((doc) => {
        const data = doc.data();
        if (data.section_key === "our-story-paragraphs") {
          setOurStoryParagraphs(data.content.paragraphs);
        } else if (data.section_key === "mission-statement") {
          setMissionStatement(data.content.text);
        } else if (data.section_key === "testimonials") {
          setTestimonials(data.content);
        }
      });
      setLoading(false);
    };
    fetchAbout();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>
      <PageHero title="Our Organization" />

      {/* Thoughts From Students */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-16"
          >
            Thoughts From Students
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 flex flex-col items-center text-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-36 h-36 rounded-lg object-cover mb-6"
                />
                <h3 className="font-heading font-bold text-lg text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.school}</p>
                <p className="text-sm text-black leading-relaxed italic">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sky-800 text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-black leading-relaxed font-body">
              {ourStoryParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pt-0 pb-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-sky-800 text-3xl md:text-4xl font-bold mb-8">Mission Statement</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 font-body">{missionStatement}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;