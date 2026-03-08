import { motion } from "framer-motion";
import { FloatingCircles } from "@/components/decorative/SVGElements";

const logos = [
  { name: "Forbes", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b971b48c-a7c5-4344-9e19-080235d56cad/Forbes+Logo.jpg" },
  { name: "FOX News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/68b86324-0484-4f6c-9647-df16f95d0405/FOX+News+Logo.jpg" },
  { name: "NBC", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b6c516a5-4474-44f0-a975-3ed6b323d513/NBC+Logo.png" },
  { name: "Google News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/405d1295-30a2-4002-b614-bf1333978df4/Google_News_Logo-removebg-preview.png" },
  { name: "Apple News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/020f22fa-6815-4938-bf4e-e9c78414fd63/Apple_News_Logo-removebg-preview.png" },
  { name: "Yahoo News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/d8799946-c855-4662-8b91-7435cf1c168c/Yahoo_News_Logo-removebg-preview.png" },
];

const MediaLogos = () => {
  return (
    <section className="relative py-16 bg-card overflow-hidden">
      <FloatingCircles className="absolute -left-10 top-0 w-40 h-40 text-primary" />
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-10 font-body"
        >
          As Featured In
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo, i) => (
            <motion.img
              key={logo.name}
              src={logo.url}
              alt={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaLogos;
