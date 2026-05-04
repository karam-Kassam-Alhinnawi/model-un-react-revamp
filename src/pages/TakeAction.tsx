import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const TakeAction = () => {
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [oppSnap, servSnap] = await Promise.all([
          getDocs(collection(db, "take_action_items")),
          getDocs(collection(db, "services")),
        ]);
        setOpportunities(oppSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
        setServices(servSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (error) {
        console.error("Error fetching take action data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Reach Out About Our Opportunities
              </h1>
              <a
                href="mailto:exec@modelunacademy.org"
                className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mb-12"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Accordion type="single" collapsible className="w-full">
              {opportunities.map((item, i) => (
                <AccordionItem key={item.id || i} value={`opp-${i}`}>
                  <AccordionTrigger className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-black text-lg font-body mb-4 whitespace-pre-line">{item.content}</p>
                    {item.link_url && item.link_text && (
                      <Link
                        to={item.link_url}
                        className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                      >
                        {item.link_text}
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Services section – now dynamic from Firestore */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, i) => (
                <AccordionItem key={service.id || i} value={`svc-${i}`}>
                  <AccordionTrigger className="font-heading text-2xl font-semibold text-foreground">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-black text-lg font-body mb-4 whitespace-pre-line">{service.content}</p>
                    <p className="text-foreground font-bold text-2xl">
                      ➡️ Email{" "}
                      <a href="mailto:exec@modelunacademy.org" className="text-primary underline">
                        exec@modelunacademy.org
                      </a>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Request Our Services
            </h2>
            <a
              href="mailto:exec@modelunacademy.org"
              className="inline-block w-fit px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TakeAction;