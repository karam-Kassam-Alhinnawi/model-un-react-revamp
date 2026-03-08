import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const opportunities = [
  {
    title: "Apply For Global Leadership",
    content:
      "Apply to join the Global Leadership team of a Forbes 30 Under 30 nonprofit! Applications are due Monday, March 2nd, 2026 and will be reviewed on a rolling basis.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdkT8kn5VV2Ju3YwmKRBo5EG2Vr0I2w-FsAWFGzjYGDAHQH6Q/viewform?usp=dialog",
    linkText: "Apply For Global Leadership",
  },
  {
    title: "Read the Written Guides",
    content:
      "Read Model UN Academy's free written guides, available in 104 languages and totaling 1.3 million words. Learn diplomacy through Model UN to master public speaking, research, negotiation, and more.",
    link: "https://modelunacademy.org/written-guides",
    linkText: "Read the Written Guides",
  },
  {
    title: "Register for the Masterclass",
    content:
      "The Model UN Academy Masterclass is a dynamic webinar series crafted to elevate delegates of all experience levels into poised, persuasive, and globally aware diplomats.",
    link: "https://modelunacademy.org/masterclass",
    linkText: "Register for the Masterclass",
  },
  {
    title: "Start a Chapter",
    content:
      "Model UN Academy Chapters are official local branches of the world's largest youth-led educational Model UN nonprofit. These chapters empower students to become global leaders through diplomacy training, impactful programming, and community engagement. With structured leadership roles and opportunities for hands-on experience, members gain critical skills, connect with like-minded peers, and contribute to real-world change—locally and globally.",
    link: "https://modelunacademy.org/start-a-chapter",
    linkText: "Start a Chapter",
  },
  {
    title: "Join the Fellowship Waitlist",
    content:
      "Fellows spend 3-4 months building at the intersection of personal experiences and the United Nations Sustainable Development Goals.",
    link: "https://modelunacademy.org/fellowship",
    linkText: "Join the Fellowship Waitlist",
  },
];

const services = [
  {
    title: "Partnerships",
    content:
      "Model UN Academy is proud to collaborate with mission-aligned organizations to expand access to global education and civic engagement. We welcome opportunities to explore partnerships with organizations that value youth empowerment, education, diplomacy, and global learning. Together, we can make a meaningful, global impact.",
  },
  {
    title: "Press Coverage",
    content:
      "Model UN Academy has captured national and international attention for our innovative, youth-led approach to global education. Our story is resonating across communities—and we're just getting started. For media inquiries or opportunities to cover our work, please get in touch.",
  },
  {
    title: "Speaking Engagements",
    content:
      "Our youth leaders share insights on global issues, education, language accessibility, youth-driven advocacy, and more. We bring firsthand expertise on mobilizing young people, breaking barriers to advocacy, and action through inclusive, multilingual communication. Topics: Youth Empowerment, Language Access, Economic Access, Responsible Applications of Technology, Global Issues, Education, Entrepreneurship.",
  },
  {
    title: "Advisory Services",
    content:
      "Our organization and our student leaders provide guidance and advisory services to organizations, governments, businesses, and schools on: Youth Empowerment, Language Access, Economic Access, Responsible Applications of Technology, Global Issues, Education, Entrepreneurship. Our advisory services help develop inclusive, impactful strategies that drive meaningful educational action and ensure diversity.",
  },
];

const TakeAction = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <div className="pt-8">
        <Navbar />
      </div>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Opportunities */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {opportunities.map((item, i) => (
                <AccordionItem key={i} value={`opp-${i}`}>
                  <AccordionTrigger className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground font-body mb-4">
                      {item.content}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      {item.linkText}
                    </a>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Request Our Services */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {services.map((item, i) => (
                <AccordionItem key={i} value={`svc-${i}`}>
                  <AccordionTrigger className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground font-body mb-4">
                      {item.content}
                    </p>
                    <p className="text-foreground font-medium text-sm">
                      ➡️ Email{" "}
                      <a
                        href="mailto:exec@modelunacademy.org"
                        className="text-primary underline"
                      >
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
