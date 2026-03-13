import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Overview", href: "/about" },
      { label: "Our People", href: "/our-people" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    children: [
      { label: "Overview", href: "/impact" },
      { label: "Reports", href: "/reports" },
      { label: "Languages", href: "/languages" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Chapters", href: "/programs" },
      { label: "Fellowship", href: "/fellowship" },
      { label: "Volunteer Translators", href: "/volunteer-translators" },
    ],
  },
  {
    label: "Learn Model UN",
    href: "/learn-model-un",
    children: [
      { label: "Written Guides", href: "/learn-model-un" },
      { label: "General Assembly", href: "/general-assembly" },
      { label: "Crisis", href: "/crisis" },
      { label: "Awards", href: "/awards" },
      { label: "Masterclass", href: "/masterclass" },
    ],
  },
  { label: "Take Action", href: "/take-action" },
];

const DropdownMenu = ({ items, isOpen }: { items: { label: string; href: string }[]; isOpen: boolean }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
      >
        <div className="bg-card border border-border rounded-lg shadow-elevated py-2 min-w-[200px]">
          {items.map((item) => (
            <Link
              key={item.href + item.label}
              to={item.href}
              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const NavItemWithDropdown = ({ item, index }: { item: NavItem; index: number }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  if (!item.children) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + index * 0.05 }}
      >
        <Link
          to={item.href}
          className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
        >
          {item.label}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        to={item.href}
        className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </Link>
      <DropdownMenu items={item.children} isOpen={open} />
    </motion.div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const toggleMobileDropdown = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

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
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-heading font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
            MODEL UN ACADEMY
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-6">
          {navItems.map((item, i) => (
            <NavItemWithDropdown key={item.label} item={item} index={i} />
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <motion.a
            href="https://www.instagram.com/modelun.academy/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/modelunacademy/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -5 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
          <Link to="/donate">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-elevated transition-shadow inline-block"
            >
              Donate
            </motion.span>
          </Link>
        </div>

        <button
          className="xl:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <motion.div
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            expandedMobile === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {expandedMobile === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 border-l-2 border-primary/20"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href + child.label}
                                to={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <Link to="/donate" onClick={() => setMobileOpen(false)}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm text-center block"
                >
                  Donate
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
