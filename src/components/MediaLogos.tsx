import { motion } from "framer-motion";
import { db } from "@/lib/firebase"; // adjust path if needed
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

interface MediaLogo {
  id: string;
  name: string;
  logo_url: string;
  sort_order?: number;
}

const MediaLogos = () => {
  const [logos, setLogos] = useState<MediaLogo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const snap = await getDocs(collection(db, "media_logos"));
        const items: MediaLogo[] = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as MediaLogo[];

        // Sort client-side (same logic as AdminPage)
        items.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));

        setLogos(items);
      } catch (err) {
        console.error("Failed to load media logos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading) return null; // or a tiny spinner

  return (
    <section className="relative py-16 bg-card overflow-hidden">
      
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <motion.img
              key={logo.id}
              src={logo.logo_url}
              alt={logo.name}
              className="h-8 md:h-16 object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaLogos;