import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroChapter from "@/assets/video.mov";

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8">
        <Navbar />
      </div>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              Start a Chapter
            </h1>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                Model UN Academy chapters serve as the bridge between our global
                organization and local communities interested in furthering
                diplomacy education while reflecting local context.
              </p>
              <p>
                Chapters dedicate their work to Model UN education, profound
                dialogue, and applications of the United Nations Sustainable
                Development Goals.
              </p>
              <p>
                With support from global leadership, the credibility of the
                Model UN Academy name, and our tried-and-true Chapter model,
                we're enabling youth leaders to change the world.
              </p>
              <p className="text-foreground font-medium">
                ➡️ Email{" "}
                <a
                  href="mailto:exec@modelunacademy.org"
                  className="text-primary underline hover:opacity-80"
                >
                  exec@modelunacademy.org
                </a>{" "}
                with any questions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <video controls width="100%" controlsList="nodownload">
               <source src={heroChapter}  />
              </video>
            <p className="text-center text-sm text-muted-foreground mt-4 font-body font-medium">
              Model UN Academy Antipolo City, Philippines
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-16 text-center"
        >
          <a
            href="https://docs.google.com/forms/d/1iW22WiLNYKqvrenGSpFRwuikiF1X1aQX5UeSR8Ny0rg/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity shadow-elevated"
          >
            Learn More & Apply
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
