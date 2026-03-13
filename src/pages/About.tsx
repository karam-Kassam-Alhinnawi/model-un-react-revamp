import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import nainaImg from "@/assets/naina-kapur.jpg";
import charlesImg from "@/assets/charles-witteman.jpg";
import sarahImg from "@/assets/sarah-maghrabi.jpg";

const testimonials = [
  {
    name: "Naina Kapur",
    school: "Loyola University Chicago",
    image: nainaImg,
    quote:
      "Model UN is one of the most valuable extracurricular activities. Not just because it teaches students how to be concise, articulate and creative individuals, but because it teaches a lifelong skill of connecting. Personally, Model UN has given me some of the best friends who I still lean on today. Additionally learning from Model UN Academy is a gift in itself.",
  },
  {
    name: "Charles Witteman",
    school: "University of Virginia",
    image: charlesImg,
    quote:
      "Upon further investigation, I loved the initial look of the Model UN Academy website. Right away, it was very apparent that the scope of Model UN Academy far exceeded my expectations, and it's clear that their team is dedicated to delivering quality Model UN resources to as many students as possible... I left feeling inspired and driven by Momin's vision for global student empowerment and collaboration.",
  },
  {
    name: "Sarah Maghrabi",
    school: "University of Illinois Urbana-Champaign",
    image: sarahImg,
    quote:
      "I joined Model UN as a junior in high school, eager to learn more about how it works. I found an amazing community and learned a lot about what it means to be a delegate and representative of a larger state. It helped me improve not only my technical skills but also develop soft skills that are crucial to working in team environments.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <div className="pt-8">
        <Navbar />
      </div>

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
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 shadow-card flex flex-col items-center text-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-28 h-28 rounded-full object-cover mb-6 ring-4 ring-primary/20"
                />
                <h3 className="font-heading font-bold text-lg text-foreground">
                  {t.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{t.school}</p>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-body">
              <p>
                Model UN Academy was founded by Momin Ahmed in 2024 to make
                diplomacy, and the skills that come with it, more accessible to
                students worldwide. As a seasoned Model UN delegate himself,
                Momin recognized the power of Model UN in teaching public
                speaking, intellectual reasoning, negotiation, research, and
                many other vital skills. On top of skill development, Model UN
                also helps youth learn about global issues that aren't taught
                about in the majority of classrooms. Unfortunately, Model UN is
                an extracurricular activity typically limited to high-income
                students that speak English.
              </p>
              <p>
                Committed to solve this issue, Momin began writing educational
                guides on Model UN for free and translating them into other
                languages. With the initial success and positive feedback from
                local schools, Momin realized the profound impact of free
                education, especially when made available in a multitude of
                languages. This movement to make diplomacy more accessible has
                now grown into Model UN Academy.
              </p>
              <p>
                Momin's movement to make diplomacy more accessible to students
                worldwide has now grown into a global movement. Today, Model UN
                Academy serves as a global community for tens of thousands of
                students worldwide by championing accessibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Mission Statement
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 font-body">
              Model UN Academy is dedicated to bridging the gap between
              universal talent and limited opportunity in global diplomacy
              education. By transforming diplomacy into a vital life skill
              through accessibility in Model UN education, we're preparing the
              next generation to become Citizen Diplomats capable of navigating
              a polarized world with empathy and action.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
