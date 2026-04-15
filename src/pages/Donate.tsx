import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const faqs = [
  {
    q: "What is Model UN Academy's legal status?",
    a: "Model UN Academy is a registered 501(c)(3) organization, Tax ID (EIN) 39-3117635.",
  },
  {
    q: "Is my donation tax deductible?",
    a: "Your donation is tax-deductible to the fullest extent of the law. After we receive your donation, you will receive a confirmation email with the necessary tax information.",
  },
  {
    q: "How will my donation be used?",
    a: "Your donation may be used to support the development of our volunteer network or chapter network. Every donation helps further our mission of furthering accessibility with global diplomacy education, providing students necessary skills for whatever future they choose to pursue. If you'd like to request that your donation support a specific program, email exec@modelunacademy.org.",
  },
  {
    q: "How can I contact Model UN Academy with any further questions?",
    a: "➡️ Email exec@modelunacademy.org",
  },
];

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>
      <PageHero title="Donate" />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="font-heading text-base font-semibold text-foreground text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground font-body">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center items-center text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Donate to Model UN Academy
            </h2>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-model-un-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-elevated"
            >
              Donate Online
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
