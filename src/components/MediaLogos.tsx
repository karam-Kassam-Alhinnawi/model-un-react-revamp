import { motion } from "framer-motion";
import { FloatingCircles } from "@/components/decorative/SVGElements";

const logos = [
  { name: "Forbes", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b971b48c-a7c5-4344-9e19-080235d56cad/Forbes+Logo.jpg" },
  { name: "FOX News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/68b86324-0484-4f6c-9647-df16f95d0405/FOX+News+Logo.jpg" },
  { name: "NBC", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b6c516a5-4474-44f0-a975-3ed6b323d513/NBC+Logo.png" },
  { name: "Chicago Tribune", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/007fe245-5cc6-47da-b027-4a2e928a940a/Image+8.jpeg?format=500w" },
  { name: "TEDx", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b2f99b48-c90e-4465-aec2-8b3b277dc8f4/TEDx+Logo.png?format=300w" },
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
              className="h-8 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaLogos;
