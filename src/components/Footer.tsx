import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { GlobeGrid } from "@/components/decorative/SVGElements";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Programs", href: "/programs" },
  { label: "Learn Model UN", href: "/learn-model-un" },
  { label: "Volunteer Translators", href: "/volunteer-translators" },
  { label: "Take Action", href: "/take-action" },
];

const Footer = () => {
  return (
    <footer className="relative bg-accent text-accent-foreground py-16 overflow-hidden">
      <GlobeGrid className="absolute -right-20 -bottom-20 w-80 h-80 text-accent-foreground opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="font-heading font-bold text-lg">
                MODEL UN ACADEMY
              </span>
            </motion.div>
            <p className="text-accent-foreground/70 font-body text-sm leading-relaxed max-w-sm">
              Making diplomacy more accessible for all. Join us in preparing the
              next generation of Citizen Diplomats.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-accent-foreground/70">
              {footerLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={link.href} className="hover:text-secondary transition-colors inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-secondary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4 mb-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/modelun.academy/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/modelunacademy/" },
                { icon: Mail, href: "mailto:exec@modelunacademy.org" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-accent-foreground/70 hover:text-secondary transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-accent-foreground/70 font-body">
              exec@modelunacademy.org
            </p>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-accent-foreground/20 pt-8 text-center text-sm text-accent-foreground/50 font-body origin-left"
        >
          © {new Date().getFullYear()} Model UN Academy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
