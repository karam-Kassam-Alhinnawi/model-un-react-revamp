import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WaveDivider } from "@/components/decorative/SVGElements";
import { Button } from "@/components/ui/button"; // Assuming a standard UI button exists

const seniorLeadership = [
  {
    name: "Momin Ahmed",
    role: "Founder and President",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/a2daff4b-c90b-4ad9-966c-4dd0dbdf7a9b/1046788845.jpeg",
  },
  {
    name: "Sharmagne Bacongallo",
    role: "Director of Programs",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/5f1310b8-0b74-41af-b0c9-d0aa928ec61b/IMG_7517.jpg",
  },
  {
    name: "Chloe Kizito",
    role: "Director of Events",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/cff4fc78-232e-4782-9fc9-cedbe2f7c69d/Chloe+Kizito.jpeg",
  },
  {
    name: "Mohammad Atiya",
    role: "Community Director",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/3a907f06-74da-4964-9b0e-99b05be822fc/Mohammad+Atiya.jpeg",
  },
  {
    name: "Charlotte Kim",
    role: "Director of Education",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/36d1b97a-9850-40f0-bcc6-52b95311d360/Charlotte+Kim.jpg",
  },
];

const advisoryBoard = [
  {
    name: "Dr. David Wellman",
    role: "Inaugural Director, Grace School of Applied Diplomacy at DePaul University",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/59868ed2-9f46-443b-811d-48a70f8ab60d/David+Wellman.jpg",
  },
  {
    name: "Michael Eaton",
    role: "Executive Director, National Model UN",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/8d966aa6-76a2-4740-ab50-5aeb2a589171/Michael+Eaton.jpg",
  },
  {
    name: "Himaja Nagireddy",
    role: "11th UNA–USA Youth Observer to the United Nations",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/ac510af8-c3fe-4100-ac73-18f56401c353/Himaja+Nagireddy.jpg",
  },
  {
    name: "Farah Eck",
    role: "Managing Director, United Nations Association of the USA",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b349f6b6-9dac-461a-bdd7-90e7ffec4aea/Farah+Eck.jpg",
  },
  {
    name: "Harlan Cohen",
    role: "Public Speaker and New York Times Bestselling Author",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/85454e97-a02c-4a28-9585-6b3c59f957f5/Harlan+Cohen.jpg",
  },
  {
    name: "Sean Seymore, PhD",
    role: "Centennial Professor of Law, Vanderbilt University",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/f35c998c-ee61-4c49-9172-83ce43bd7b36/Sean+Seymore.jpg",
  },
  {
    name: "Dr. Zaher Sahloul",
    role: "President and Co-Founder, MedGlobal",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/a329751c-0b50-4b37-9791-eca47ff4648c/Zaher+Sahloul.jpg",
  },
  {
    name: "Dr. Dilara Sayeed",
    role: "Founder and CEO, Center for Advancing Opportunity",
    image: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/ce80e0e3-e692-4ed9-b0ee-80ca50c4485c/Dilara+Sayeed.jpeg",
  },
];

const PersonCard = ({ 
  person, 
  index, 
  imageClass = "w-44 h-44 rounded-full", 
  showButton = false 
}: { 
  person: typeof seniorLeadership[0]; 
  index: number;
  imageClass?: string;
  showButton?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.5 }}
    className="group text-center"
  >
    <div className={`relative mx-auto mb-5 ${imageClass.split(' ').filter(c => c.startsWith('w-') || c.startsWith('h-')).join(' ')}`}>
      <div className={`absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 scale-105 ${imageClass.includes('rounded-full') ? 'rounded-full' : ''}`} />
      <img
        src={person.image}
        alt={person.name}
        className={`relative object-cover shadow-elevated group-hover:scale-105 transition-transform duration-500 ${imageClass}`}
      />
    </div>
    <h3 className="font-heading font-bold text-lg text-foreground mb-1">{person.name}</h3>
    <p className="text-sm text-muted-foreground font-body leading-snug max-w-[200px] mx-auto mb-4">{person.role}</p>
    {showButton && (
      <button className="px-4 py-2 text-sm font-medium border border-primary text-primary bg-primary text-white hover:scale-105 transition duration-300 rounded-md">
        Read Bio
      </button>
    )}
  </motion.div>
);

const OurPeople = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>

      {/* Senior Leadership */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            Senior Leadership
          </motion.h2>
          {/* Grid maintained for Senior Leadership, but image size increased via props */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12">
            {seniorLeadership.map((person, i) => (
              <PersonCard 
                key={person.name} 
                person={person} 
                index={i} 
                imageClass="w-56 h-56 rounded-full" 
                showButton={true} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            Advisory Board
          </motion.h2>
          {/* Changed to 4 in a row for LG screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {advisoryBoard.map((person, i) => (
              <PersonCard 
                key={person.name} 
                person={person} 
                index={i} 
                imageClass="w-full aspect-square rounded-none" 
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurPeople;