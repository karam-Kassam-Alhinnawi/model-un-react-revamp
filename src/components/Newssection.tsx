
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NewsPost {
  id: string;
  src: string;
  alt: string;
  href: string;
}

export interface NewsSectionConfig {
  heading: string;
  bodyPrefix: string;
  bodyBold: string;
  bodySuffix: string;
  instagramUrl: string;
  linkedinUrl: string;
  posts: NewsPost[];
}

interface NewsSectionProps {
  config?: Partial<NewsSectionConfig>;
}

// ─── Default Config (swap this out from your admin panel later) ───────────────

export const DEFAULT_NEWS_CONFIG: NewsSectionConfig = {
  heading: "STAY UP TO DATE WITH MODEL UN ACADEMY!",
  bodyPrefix: "Follow our social media to keep up with all the ",
  bodyBold: "latest news, events, and opportunities",
  bodySuffix: " offered on our page!",
  instagramUrl: "https://instagram.com/modelunacademy",
  linkedinUrl: "https://linkedin.com/company/modelunacademy",
  posts: [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
      alt: "Model UN speaker at podium",
      href: "https://instagram.com",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop",
      alt: "Youth conference stage",
      href: "https://instagram.com",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=300&h=300&fit=crop",
      alt: "Volunteer opportunity flyer",
      href: "https://instagram.com",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop",
      alt: "Panel discussion",
      href: "https://instagram.com",
    },
  ],
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    className="w-7 h-7"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.046c.431-.816 1.485-1.676 3.057-1.676 3.267 0 3.868 2.149 3.868 4.943v6.624zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.955 20.452H3.717V9h3.238v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Post Card ────────────────────────────────────────────────────────────────

const PostCard = ({ post, index }: { post: NewsPost; index: number }) => (
  <motion.a
    href={post.href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block w-[140px] h-[140px] flex-shrink-0 overflow-hidden rounded-sm group"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.15 + index * 0.08, ease: "easeOut" }}
    whileHover={{ scale: 1.04 }}
    aria-label={post.alt}
  >
    <img
      src={post.src}
      alt={post.alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
  </motion.a>
);

// ─── Social Button ────────────────────────────────────────────────────────────

const SocialButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-700 hover:text-[#003b6f] transition-colors duration-200"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

// ─── News Section ─────────────────────────────────────────────────────────────
//
// Usage:
//   <NewsSection />                          ← uses defaults
//   <NewsSection config={adminData} />       ← fully overrides from your DB/admin panel
//   <NewsSection config={{ posts: [...] }} /> ← partial override (merges with defaults)
//
// When you build your admin panel, fetch the config from your DB and pass it
// as the `config` prop. The NewsSectionConfig type tells you exactly what shape
// to store. Example admin usage:
//
//   const { data } = useSWR<NewsSectionConfig>("/api/news-section");
//   return <NewsSection config={data} />;

export default function NewsSection({ config }: NewsSectionProps) {
  const cfg: NewsSectionConfig = { ...DEFAULT_NEWS_CONFIG, ...config };

  return (
    <section className="w-full bg-[#efefef] px-8 py-10">
      <div className="max-w-7xl mx-auto flex items-center gap-6">

        {/* ── Left: Text ── */}
        <motion.div
          className="flex-shrink-0 max-w-[600px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-[2.6rem] font-semibold font-body leading-tight text-gray-900 mb-4 uppercase tracking">
            {cfg.heading}
          </h2>
          <p className="text-md text-gray-900 leading-relaxed">
            {cfg.bodyPrefix}
            <strong className="font-bold">{cfg.bodyBold}</strong>
            {cfg.bodySuffix}
          </p>
        </motion.div>

        {/* ── Center: Posts ── */}
        <div className="flex justify-end gap-2 overflow-x-auto py-1">
          {cfg.posts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* ── Right: Social icons ── */}
        <motion.div
          className="flex-shrink-0 flex flex-row items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <SocialButton href={cfg.instagramUrl} label="Follow us on Instagram">
            <InstagramIcon />
          </SocialButton>
          <SocialButton href={cfg.linkedinUrl} label="Follow us on LinkedIn">
            <LinkedInIcon />
          </SocialButton>
        </motion.div>

      </div>
    </section>
  );
}