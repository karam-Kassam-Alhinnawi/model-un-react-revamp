import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Fellowship = () => {
  const fellowshipActivities = [
    "Spend 3-4 months building at the intersection of personal experiences and the United Nations Sustainable Development Goals.",
    "Learn relevant, powerful skills like entrepreneurship, leadership, project management, fundraising, communication, and more with exclusive modules.",
    "Attend personalized workshops to work directly with mentors, advisory board members, and experienced leaders.",
    "Utilize Model UN Academy's audience to build a professional foundation of visibility and credibility.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8"><Navbar /></div>

      {/* Hero Section: Flexed, justify-between, items-center, px-12 */}
      <section className="pt-32 pb-24 px-12 relative overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          {/* Left Side: Existing text and buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="text-left max-w-2xl"
          >
            <h1 className="font-body text-4xl md:text-5xl font-bold text-foreground mb-6">Meet the Fellows</h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              Cohort II of the Model UN Academy Fellowship hosted workshops for thousands of students, created targeted communities for those who needed it most, and developed software to apply Model UN and their personal experiences to the United Nations Sustainable Development Goals.
            </p>
            <a
              href="https://drive.google.com/file/d/1qMt5keAtC2XO_3IzM3ZddbaejJiTcCP0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Meet the Fellows
            </a>
          </motion.div>

          {/* Right Side: Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex justify-center lg:justify-end gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="w-48 h-64 bg-accent rounded-2xl shadow-elevated overflow-hidden">
                <img src="/api/placeholder/200/300" alt="Fellow 1" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="w-48 h-64 bg-accent rounded-2xl shadow-elevated overflow-hidden mt-8">
                <img src="/api/placeholder/200/300" alt="Fellow 2" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What do Fellows do section: Flexed, Title left, Bullets right */}
      <section className="py-12 px-12 bg-background ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h2 className="font-body text-3xl md:text-4xl font-bold text-foreground">What do Fellows do?</h2>
          </motion.div>
          
          <div className="md:w-2/3">
            <ul className="space-y-6 list-disc list-outside ml-5">
              {fellowshipActivities.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-black font-body text-xl leading-relaxed marker:text-primary"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Unlock your potential section */}
      <section className="pb-24 pt-10 px-6 text-foreground relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="w-full mb-12 text-blue-500 opacity-40">
            <svg width="100%" height="47" viewBox="0 0 1200 27" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13C200 13 200 2 400 2C600 2 600 25 800 25C1000 25 1000 13 1200 13" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Side by side large text with gap-x, blue highlights */}
            <div className="flex flex-wrap justify-center gap-x-6 font-heading text-4xl md:text-6xl font-bold mb-12">
              <span>Unlock your <span className="text-blue-600">potential.</span></span>
              <span>Change the <span className="text-blue-600">world.</span></span>
            </div>
            
            {/* Blue button */}
            <a
              href="https://forms.gle/CRDRKFsNzenY31368"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Join the Waitlist for Cohort III
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fellowship;