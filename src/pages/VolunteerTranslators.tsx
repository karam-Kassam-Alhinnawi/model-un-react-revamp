import { motion } from "framer-motion";
import {  Clock, Languages, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import translatorsHero from "@/assets/translators-hero.jpg";


const VolunteerTranslators = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8">
        <Navbar />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
              <Languages size={16} />
              Now Recruiting Translators
            </div>
            <h1 className="font-body text-4xl md:text-5xl font-bold text-foreground mb-6">
              Volunteer Translators Program
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
Enable accessibility to Model UN and diplomatic training. <br /> By contributing to our translated written guides, one volunteer hour can be earned for every 100 words translated


            </p>

            <div className="bg-card p-6 shadow-card border border-border mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-foreground">
                    100 words = 1 hour
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    Earn verified volunteer hours for every 100 words you translate
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/Bk6AhbigdZyk3wQj8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-elevated"
              >
                Apply Now <ArrowRight size={18} />
              </a>
              <a
                href="mailto:exec@modelunacademy.org"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors"
              >
                Questions? Email Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={translatorsHero}
              alt="Volunteer Translators collaborating"
              className="rounded-2xl shadow-elevated w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground font-body mb-10">
            Register to be a volunteer translator with the form below. Registrations are reviewed on a rolling basis. To be eligible, volunteers must have proficiency in English and another language. This is a fully remote position.
          </p>
          <a
            href="https://forms.gle/Bk6AhbigdZyk3wQj8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-12 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity shadow-elevated"
          >
            Apply Now <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default VolunteerTranslators;
