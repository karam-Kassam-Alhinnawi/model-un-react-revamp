import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";

// Icons (unchanged)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-7 h-7" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.046c.431-.816 1.485-1.676 3.057-1.676 3.267 0 3.868 2.149 3.868 4.943v6.624zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.955 20.452H3.717V9h3.238v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function NewsSection() {
  const [config, setConfig] = useState<any>({
    heading: "STAY UP TO DATE WITH MODEL UN ACADEMY!",
    body_prefix: "",
    body_bold: "",
    body_suffix: "",
    instagram_url: "#",
    linkedin_url: "#",
  });
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load Instagram embed script once
  useEffect(() => {
    if (document.getElementById("instagram-embed-script")) return;

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      // Process any existing embeds after script loads
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      // optional cleanup, not strictly necessary
    };
  }, []);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch News Configuration
        const configSnap = await getDoc(doc(db, "config", "news"));
        if (configSnap.exists()) setConfig(configSnap.data());

        // Fetch News Posts (sorted by created_at desc)
        const postsRef = collection(db, "news_posts");
        try {
          const q = query(postsRef, orderBy("created_at", "desc"));
          const postsSnap = await getDocs(q);
          setPosts(postsSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
        } catch {
          // Fallback if index doesn't exist
          const basicSnap = await getDocs(postsRef);
          setPosts(basicSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
        }
      } catch (error) {
        console.error("Failed to load news data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Re-process Instagram embeds whenever posts change
  useEffect(() => {
    if (!loading && window.instgrm) {
      // Give a small delay for the DOM to settle
      const timer = setTimeout(() => {
        window.instgrm.Embeds.process();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading, posts]);

  if (loading) return <div className="py-10 text-center text-muted-foreground">Loading news...</div>;

  return (
    <section className="w-full bg-[#efefef] px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6">
        {/* Left text */}
        <motion.div
          className="flex-shrink-0 max-w-[600px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-[2.6rem] font-semibold font-body leading-tight text-gray-900 mb-4 uppercase tracking">
            {config.heading}
          </h2>
          <p className="text-md text-gray-900 leading-relaxed">
            {config.body_prefix}
            <strong className="font-bold">{config.body_bold}</strong>
            {config.body_suffix}
          </p>
        </motion.div>

        {/* Instagram Embeds (replaces square thumbnails) */}
        <div className="flex justify-end gap-4 overflow-x-auto py-4 no-scrollbar w-full">
          {posts.map((post, i) => (
            <motion.div
              key={post.id || i}
              className="relative flex-shrink-0 w-[150px]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: "easeOut" }}
            >
              {/* 1. THE MASK CONTAINER (Updated to 150x150) */}
              <div className="relative w-[150px] h-[150px] overflow-hidden rounded-md shadow-md bg-white">
                
                {/* 2. THE CLICK OVERLAY */}
                <a 
                  href={post.link_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label="View Instagram Post"
                />

                {/* 3. THE SHIFTED AND CENTERED CONTENT */}
                {/* ADDED: left-1/2 -translate-x-1/2 to center horizontally */}
                {/* ADDED: w-[326px] to match Instagram's minimum width */}
                <div className="absolute top-[-54px] left-1/2 -translate-x-1/2 w-[326px] pointer-events-none">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={post.link_url}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: "0",
                      margin: "0",
                      padding: "0",
                      width: "100%",
                    }}
                  ></blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Right social icons */}
        <motion.div
          className="flex-shrink-0 flex flex-row items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <motion.a
            href={config.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-700 hover:text-[#003b6f] transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href={config.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-[#003b6f] transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}