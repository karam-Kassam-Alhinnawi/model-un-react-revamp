import { motion } from "framer-motion";

const partners = [
  {
    name: "UNA Chicago",
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/3c9c7837-b144-452c-b3d1-3b263367cb60/UNA%E2%80%93Chicago+Logo.png",
    url: "https://www.unachicago.org/",
  },
  {
    name: "MedGlobal",
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/eac17681-7622-4c85-8b2c-290c9a9b882e/MedGlobal+logo.png",
    url: "https://medglobal.org/",
  },
  {
    name: "Grace School of Applied Diplomacy",
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/7aff5be1-906e-42bc-8c5b-77b5e3bef0d7/Grace+School+of+Applied+Diplomacy+at+DePaul+University+Logo.png",
    url: "https://las.depaul.edu/academics/departments-programs/applied-diplomacy",
  },
  {
    name: "Humanity Rising",
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/dd27d216-3ce6-4ce0-a80b-0f610b3cf936/Humanity+Rising+Logo.png",
    url: "https://humanityrising.org/",
  },
  {
    name: "DePaul University Model UN",
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/6f2ac383-3c7a-4a33-b923-3cbbb8c927d4/DePaul+University+Model+UN+Logo.png",
    url: "https://www.depaulmun.org/",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl md:text-4xl font-bold text-foreground mb-14"
        >
          Our Strategic Partners
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="block"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
