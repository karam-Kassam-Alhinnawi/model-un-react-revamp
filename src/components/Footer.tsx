import { motion } from "framer-motion";
import { GlobeGrid } from "@/components/decorative/SVGElements";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Languages", href: "/languages" },
  { label: "contact and support", href: "/contact" },
  { label: "Terms and conditions", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      <GlobeGrid className="absolute -right-20 -bottom-20 w-80 h-80 text-white opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              {/* Added logo before text */}
              <img src="logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-heading font-bold text-lg">
                MODEL UN ACADEMY
              </span>
            </motion.div>
            <p className="text-white/70 font-body text-sm leading-relaxed max-w-sm mb-6">
              Making diplomacy more accessible for all. Join us in preparing the
              next generation of Citizen Diplomats.
            </p>
            {/* Added 2026 rights and 501(c)(3) disclaimer */}
            <div className="space-y-1">
              <p className="text-white font-body text-sm">
                2026 Model UN Academy. All rights reserved.
              </p>
              <p className="text-white/70 font-body text-xs leading-relaxed max-w-sm">
                Model UN Academy is a 501(c)(3) tax-exempt organization. Your donation is tax-deductible to the fullest extent of the law.
              </p>
            </div>
          </div>

          <div>
            {/* Removed Quick Links text header */}
            <ul className="space-y-2 text-sm text-white/70 pt-1">
              {footerLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={link.href} className="hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
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
            {/* Replaced icons with text links */}
            <div className="flex flex-col gap-2 mb-4">
              <motion.a
                href="https://www.instagram.com/modelun.academy/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Instagram
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/modelunacademy/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Linkedin
              </motion.a>
            </div>

          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/20 pt-8 text-center text-sm text-white/50 font-body origin-left"
        >
          © 2026 Model UN Academy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;