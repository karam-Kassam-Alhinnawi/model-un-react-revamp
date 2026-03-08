// Reusable decorative SVG elements for the site

export const GlobeGrid = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <ellipse cx="200" cy="200" rx="180" ry="70" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <ellipse cx="200" cy="200" rx="180" ry="70" stroke="currentColor" strokeWidth="0.5" opacity="0.15" transform="rotate(60 200 200)" />
    <ellipse cx="200" cy="200" rx="180" ry="70" stroke="currentColor" strokeWidth="0.5" opacity="0.15" transform="rotate(120 200 200)" />
    <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
  </svg>
);

export const DotGrid = ({ className = "", rows = 8, cols = 8 }: { className?: string; rows?: number; cols?: number }) => (
  <svg
    viewBox={`0 0 ${cols * 24} ${rows * 24}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {Array.from({ length: rows * cols }).map((_, i) => (
      <circle
        key={i}
        cx={(i % cols) * 24 + 12}
        cy={Math.floor(i / cols) * 24 + 12}
        r="2"
        fill="currentColor"
        opacity={0.15 + Math.random() * 0.15}
      />
    ))}
  </svg>
);

export const WaveDivider = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 1440 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    style={flip ? { transform: "rotate(180deg)" } : undefined}
  >
    <path
      d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
      fill="currentColor"
    />
  </svg>
);

export const DiplomaticStar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon
      points="50,5 61,35 95,35 68,57 79,90 50,70 21,90 32,57 5,35 39,35"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.2"
    />
    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
  </svg>
);

export const OliveBranch = ({ className = "", side = "left" }: { className?: string; side?: "left" | "right" }) => (
  <svg
    viewBox="0 0 120 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={side === "right" ? { transform: "scaleX(-1)" } : undefined}
  >
    <path d="M60 0C60 0 60 300 60 300" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    {[40, 80, 120, 160, 200, 240].map((y, i) => (
      <g key={i}>
        <ellipse cx={30} cy={y} rx="25" ry="12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" transform={`rotate(-30 30 ${y})`} />
        <path d={`M60 ${y + 10} Q40 ${y} 15 ${y - 5}`} stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.2" />
      </g>
    ))}
  </svg>
);

export const FloatingCircles = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <circle cx="150" cy="60" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
    <circle cx="80" cy="150" r="35" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
    <circle cx="170" cy="160" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <circle cx="100" cy="80" r="15" fill="currentColor" opacity="0.05" />
  </svg>
);

export const CrosshatchPattern = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {Array.from({ length: 10 }).map((_, i) => (
      <g key={i}>
        <line x1={i * 20} y1="0" x2={i * 20} y2="200" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
        <line x1="0" y1={i * 20} x2="200" y2={i * 20} stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
      </g>
    ))}
  </svg>
);
