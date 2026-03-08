import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Model UN Academy" className="h-10 w-10" />
              <span className="font-heading font-bold text-lg">
                MODEL UN ACADEMY
              </span>
            </div>
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
              {["About", "Impact", "Programs", "Learn Model UN", "Take Action"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-accent-foreground/70 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-accent-foreground/70 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:exec@modelunacademy.org" className="text-accent-foreground/70 hover:text-secondary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-accent-foreground/70 font-body">
              exec@modelunacademy.org
            </p>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center text-sm text-accent-foreground/50 font-body">
          © {new Date().getFullYear()} Model UN Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
