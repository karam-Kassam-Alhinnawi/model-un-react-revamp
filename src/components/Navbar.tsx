import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Programs", href: "/programs" },
  { label: "Learn Model UN", href: "/learn-model-un" },
  { label: "Volunteer Translators", href: "/volunteer-translators" },
  { label: "Take Action", href: "/take-action" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-card border-b border-border"
          : "bg-card/80 backdrop-blur-lg border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 group">
          <motion.img
            src={logo}
            alt="Model UN Academy"
            className="h-10 w-10"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="font-heading font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
            MODEL UN ACADEMY
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.15, rotate: -5 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-elevated transition-shadow"
          >
            Donate
          </motion.a>
        </div>

        <button
          className="xl:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm text-center"
              >
                Donate
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
