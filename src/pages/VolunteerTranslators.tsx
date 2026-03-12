import { motion } from "framer-motion";
import { Globe, Clock, BookOpen, Languages, CheckCircle, ArrowRight } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import translatorsHero from "@/assets/translators-hero.jpg";

const benefits = [
  {
    icon: Clock,
    title: "Earn Volunteer Hours",
    description: "1 volunteer hour for every 100 words translated. Track your impact and build your resume.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Your translations help students in 101+ countries access diplomacy education in their native language.",
  },
  {
    icon: BookOpen,
    title: "Build Skills",
    description: "Strengthen your translation, writing, and cross-cultural communication abilities.",
  },
  {
    icon: Languages,
    title: "104 Languages",
    description: "Join a network translating Model UN resources into 104 languages and growing.",
  },
];

const steps = [
  "Apply to become a Volunteer Translator",
  "Get matched with guides in your language",
  "Translate at your own pace — every 100 words = 1 volunteer hour",
  "Submit translations for review and approval",
  "Receive your verified volunteer hour certificate",
];

const VolunteerTranslators = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
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
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Volunteer Translators Program
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              Help make diplomacy education accessible worldwide by translating
              Model UN Academy's written guides into your native language. Earn
              verified volunteer hours while making a global impact.
            </p>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-8">
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

      {/* Benefits */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            Why Become a Volunteer Translator?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 gradient-hero text-primary-foreground">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-secondary-foreground text-sm">
                    {i + 1}
                  </span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <CheckCircle className="w-5 h-5 opacity-70 flex-shrink-0" />
                  <p className="font-body text-lg">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            Join our global team of volunteer translators and help students
            around the world access diplomacy education in their native language.
          </p>
          <a
            href="mailto:exec@modelunacademy.org"
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
