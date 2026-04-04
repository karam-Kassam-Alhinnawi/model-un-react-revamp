import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tailwindConfig = `
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "on-primary-fixed": "#241a00",
          "tertiary": "#c6c6c7",
          "secondary-container": "#2b458b",
          "secondary": "#b4c5ff",
          "surface-bright": "#3a3939",
          "surface-container-high": "#2a2a2a",
          "on-secondary-fixed-variant": "#294389",
          "on-primary-fixed-variant": "#584400",
          "secondary-fixed": "#dbe1ff",
          "surface-variant": "#353534",
          "on-surface-variant": "#c5c6d2",
          "tertiary-fixed": "#e2e2e2",
          "on-error": "#690005",
          "on-surface": "#e5e2e1",
          "outline": "#8e909c",
          "primary-fixed-dim": "#f1c100",
          "on-tertiary": "#2f3131",
          "secondary-fixed-dim": "#b4c5ff",
          "error-container": "#93000a",
          "on-tertiary-fixed": "#1a1c1c",
          "inverse-surface": "#e5e2e1",
          "background": "#131313",
          "surface-container-lowest": "#0e0e0e",
          "surface-tint": "#f1c100",
          "on-secondary-fixed": "#00174b",
          "primary": "#f1c100",
          "tertiary-container": "#282a2a",
          "on-error-container": "#ffdad6",
          "primary-fixed": "#ffe08b",
          "surface": "#131313",
          "on-primary-container": "#b18d00",
          "surface-container-low": "#1c1b1b",
          "error": "#ffb4ab",
          "inverse-primary": "#745b00",
          "on-secondary": "#0b2b71",
          "on-primary": "#3d2f00",
          "on-tertiary-container": "#909191",
          "primary-container": "#352900",
          "surface-dim": "#131313",
          "on-tertiary-fixed-variant": "#454747",
          "on-background": "#e5e2e1",
          "outline-variant": "#444651",
          "inverse-on-surface": "#313030",
          "on-secondary-container": "#a0b6ff",
          "surface-container": "#201f1f",
          "surface-container-highest": "#353534",
          "tertiary-fixed-dim": "#c6c6c7"
        },
        fontFamily: {
          "headline": ["Noto Serif"],
          "body": ["Public Sans"],
          "label": ["Public Sans"]
        },
        borderRadius: { "DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px" },
      },
    },
  }
`;

export default function ModelUNDashboard() {
  const Navigate = useNavigate();
  return (
    <div className="dark">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@300;400;500;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .diplomatic-grid {
          background-image: radial-gradient(circle at 2px 2px, rgba(68, 70, 81, 0.15) 1px, transparent 0);
          background-size: 40px 40px;
        }
        .glass-panel {
          background: rgba(53, 53, 52, 0.6);
          backdrop-filter: blur(20px);
        }
        .path-line {
          background: repeating-linear-gradient(90deg, #f1c100 0, #f1c100 10px, transparent 10px, transparent 20px);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div
        style={{
          backgroundColor: "#131313",
          color: "#e5e2e1",
          fontFamily: "'Public Sans', sans-serif",
          overflow: "hidden",
        }}
      >
        {/* TopNavBar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0 2rem",
            height: "64px",
            position: "fixed",
            top: 0,
            zIndex: 50,
            backgroundColor: "#131313",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#f1c100",
                fontFamily: "'Noto Serif', serif",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Model UN Academy
            </span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
          
              <a
                href="#"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#f1c100",
                  borderBottom: "2px solid #f1c100",
                  paddingBottom: "4px",
                  textDecoration: "none",
                }}
              >
                Simulation Arena
              </a>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#f1c100",
                fontSize: "0.875rem",
              }}
            >
              Diplomatic Rank: Attaché
            </span>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: "#353534",
                border: "1px solid #444651",
              }}
            >
              <img
                alt="Diplomatic Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7PHwgEAayExHMmkXmc57TYgkTPcb9CShi1ePWI0t-MiZRv0CUvj4TdGbTcd5b26w77Ja1r_FtzuT7wh5zTrE0wx6cR5n1fPqVCHiP3dladPhgrgg3DYhVM6PdAt3HHFmY_fCZO6biNrsstvXh5y4hUEA87q21ZirSPB4AgyjoAA3AsgTBZMhD3hQ2V2yi_HWKneVk9FYejoTjUS4290WQhDIB2fh2LGiWdh3MVGuAUsjcl_VpsVhJetpTz_XNUAD2NCgEla2f5BPF"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </nav>

        {/* SideNavBar */}
        <aside
          style={{
            position: "fixed",
            left: 0,
            top: "64px",
            height: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            zIndex: 40,
            backgroundColor: "#1c1b1b",
            width: "256px",
            boxShadow: "4px 0px 24px rgba(11,43,113,0.06)",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              borderBottom: "1px solid rgba(68,70,81,0.1)",
            }}
          >
            <p
              style={{
                color: "#f1c100",
                fontWeight: 900,
                fontFamily: "'Public Sans', sans-serif",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "-0.05em",
              }}
            >
              Sovereign Shell
            </p>
            <p style={{ color: "#64748b", fontSize: "0.625rem", textTransform: "uppercase" }}>
              V1.0 Diplomatic Intelligence
            </p>
          </div>

          <div style={{ flexGrow: 1, paddingTop: "1rem", paddingBottom: "1rem" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {[
                { icon: "gavel", label: "General Assembly", active: false },
                { icon: "shield", label: "Security Council", link: "/module", active: true },
                { icon: "error", label: "Crisis Room", active: false },
                { icon: "book_5", label: "Library", active: false },
                { icon: "analytics", label: "Intelligence", link: "/model", active: false },
              ].map(({ icon, label, active, link }) => (
                <a
                  
                  key={label}
                  href={link? link : "#"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem 1.5rem",
                    backgroundColor: active ? "#353534" : "transparent",
                    color: active ? "#f1c100" : "#64748b",
                    borderLeft: active ? "4px solid #f1c100" : "4px solid transparent",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ marginRight: "1rem" }}>
                    {icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          
        </aside>

        {/* Main Content Canvas */}
        <main
          className="diplomatic-grid"
          style={{
            marginLeft: "256px",
            paddingTop: "64px",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* TopAppBar Contextual */}
          <header
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "1.5rem 3rem",
              backgroundColor: "rgba(19,19,19,0.6)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(68,70,81,0.15)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: "0.625rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#8e909c",
                  marginBottom: "0.25rem",
                }}
              >
                Navigation Protocol / Arena
              </span>
              <h1
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontSize: "1.875rem",
                  fontStyle: "italic",
                  color: "#f1c100",
                  margin: 0,
                }}
              >
                Learning Path Dashboard
              </h1>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
              <button
                style={{
                  padding: "0.5rem",
                  color: "#8e909c",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span className="material-symbols-outlined">share</span>
              </button>
              <button
                style={{
                  padding: "0.5rem",
                  color: "#8e909c",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </header>

          {/* Interactive Map Section */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "calc(100vh - 140px)",
              padding: "3rem",
              overflow: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* The Map UI */}
            <div
              style={{
                position: "relative",
                width: "1200px",
                height: "800px",
                border: "1px solid rgba(68,70,81,0.1)",
                backgroundColor: "rgba(28,27,27,0.3)",
                padding: "5rem",
                flexShrink: 0,
              }}
            >
              {/* Background UN Seal Watermark */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.03,
                  pointerEvents: "none",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "600px" }}>
                  public
                </span>
              </div>

              {/* SVG Connector Paths */}
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  filter: "drop-shadow(0 0 8px rgba(241, 193, 0, 0.2))",
                }}
              >
                <path
                  d="M 200 600 L 400 400 L 700 450 L 900 200"
                  fill="none"
                  stroke="#f1c100"
                  strokeDasharray="10,10"
                  strokeWidth="2"
                />
              </svg>

              {/* Node 1: Completed */}
              <div
                style={{
                  position: "absolute",
                  left: "150px",
                  bottom: "150px",
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "#f1c100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(241,193,0,0.3)",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: "#3d2f00" }}>
                      check_circle
                    </span>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      marginTop: "1rem",
                      left: 0,
                      width: "12rem",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.625rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#8e909c",
                      }}
                    >
                      Module 01
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        color: "white",
                        fontSize: "0.875rem",
                        margin: 0,
                      }}
                    >
                      The General Assembly Road
                    </h3>
                  </div>
                </div>
              </div>

              {/* Node 2: Completed */}
              <div
                style={{
                  position: "absolute",
                  left: "350px",
                  bottom: "350px",
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "#f1c100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(241,193,0,0.3)",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: "#3d2f00",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      history_edu
                    </span>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "100%",
                      marginBottom: "1rem",
                      left: 0,
                      width: "12rem",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.625rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#8e909c",
                      }}
                    >
                      Module 02
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        color: "white",
                        fontSize: "0.875rem",
                        margin: 0,
                      }}
                    >
                      Resolution Writing Quest
                    </h3>
                  </div>
                </div>
              </div>

              {/* Node 3: Current */}
              <div
                onClick={() => Navigate("/module")}
                style={{
                  position: "absolute",
                  left: "650px",
                  bottom: "300px",
                  cursor: "pointer",
                  transform: "scale(1.1)",
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    className="animate-pulse"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      backgroundColor: "#2b458b",
                      border: "2px solid #f1c100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#f1c100", fontSize: "1.875rem" }}
                    >
                      shield
                    </span>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      marginTop: "1rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      textAlign: "center",
                      width: "14rem",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.125rem 0.5rem",
                        backgroundColor: "#f1c100",
                        color: "#3d2f00",
                        fontSize: "0.5rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Active Mission
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        color: "white",
                        fontSize: "1rem",
                        margin: 0,
                      }}
                    >
                      Security Council Simulation
                    </h3>
                  </div>
                </div>
              </div>

              {/* Node 4: Locked */}
              <div
                style={{
                  position: "absolute",
                  right: "200px",
                  top: "150px",
                  cursor: "not-allowed",
                  opacity: 0.4,
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "#353534",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: "#8e909c" }}>
                      lock
                    </span>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      marginTop: "1rem",
                      right: 0,
                      textAlign: "right",
                      width: "12rem",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.625rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#8e909c",
                      }}
                    >
                      Module 04
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        color: "white",
                        fontSize: "0.875rem",
                        margin: 0,
                      }}
                    >
                      Veto Power Mastery
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Sidebar Panel (Right) */}
          <section
            className="glass-panel"
            style={{
              position: "fixed",
              right: 0,
              top: "128px",
              bottom: 0,
              width: "320px",
              borderLeft: "1px solid rgba(68,70,81,0.2)",
              padding: "2rem",
              zIndex: 30,
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  fontSize: "0.625rem",
                  fontFamily: "'Public Sans', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  color: "#f1c100",
                }}
              >
                Intelligence Briefing
              </span>
              <h2
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontSize: "1.5rem",
                  color: "white",
                  marginTop: "0.5rem",
                  marginBottom: 0,
                }}
              >
                Simulation Brief
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Selected Node Info */}
              <div
                style={{
                  backgroundColor: "#1c1b1b",
                  padding: "1.5rem",
                  borderLeft: "2px solid #f1c100",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#8e909c",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                    marginTop: 0,
                  }}
                >
                  Selected Node
                </p>
                <h4
                  style={{
                    fontFamily: "'Noto Serif', serif",
                    fontSize: "1.125rem",
                    fontStyle: "italic",
                    color: "white",
                    marginBottom: "1rem",
                    marginTop: 0,
                  }}
                >
                  Security Council Simulation
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.6875rem",
                    }}
                  >
                    <span style={{ color: "#94a3b8" }}>ESTIMATED TIME</span>
                    <span style={{ color: "white", fontWeight: "bold" }}>120 MIN</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.6875rem",
                    }}
                  >
                    <span style={{ color: "#94a3b8" }}>COMPLEXITY</span>
                    <span style={{ color: "#f1c100", fontWeight: "bold" }}>HIGH-LEVEL</span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div>
                <p
                  style={{
                    fontSize: "0.625rem",
                    color: "#8e909c",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "1rem",
                    marginTop: 0,
                  }}
                >
                  Earned Badges
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "1",
                      backgroundColor: "#353534",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#f1c100", marginBottom: "0.5rem", fontSize: "1.875rem" }}
                    >
                      verified_user
                    </span>
                    <span
                      style={{
                        fontSize: "0.5625rem",
                        textTransform: "uppercase",
                        lineHeight: "1.25",
                        fontWeight: 500,
                      }}
                    >
                      Diplomatic Immunity
                    </span>
                  </div>
                  <div
                    style={{
                      aspectRatio: "1",
                      backgroundColor: "#353534",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1rem",
                      textAlign: "center",
                      opacity: 0.3,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#8e909c", marginBottom: "0.5rem", fontSize: "1.875rem" }}
                    >
                      military_tech
                    </span>
                    <span
                      style={{
                        fontSize: "0.5625rem",
                        textTransform: "uppercase",
                        lineHeight: "1.25",
                        fontWeight: 500,
                      }}
                    >
                      Peacekeeper Medal
                    </span>
                  </div>
                </div>
              </div>

              {/* Description + CTA */}
              <div
                style={{
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(68,70,81,0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#c5c6d2",
                    lineHeight: "1.625",
                    marginBottom: "1.5rem",
                    marginTop: 0,
                  }}
                >
                  Step into the Horseshoe Table. You will represent a Permanent Member of the
                  Security Council. Negotiate, debate, and utilize your Veto strategically to
                  maintain global stability.
                </p>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#f1c100",
                    color: "#3d2f00",
                    padding: "1rem",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Commence Briefing
                  <span className="material-symbols-outlined" style={{ fontSize: "0.875rem" }}>
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Footer Laurel Graphic */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: 0.1,
              }}
            >
              <img
                alt="UN Laurel Wreath"
                style={{ width: "8rem", height: "8rem" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGKcWn19Nz6f1ZNrwv-qFoMyA5x6iyzhwBRl4xpXfMuf_C6c8Hv811svvJCpm5DgFXEyvESD71jqA2VriJnJ66d0Z7pKnG3RAzgnO_QeGjSryIkEiy0GPosIAW_AbdXqL-RwZODaljZbA3z283RESk3ilu7VwEUhOzW50PRseZ1rhefjR1Q9IfbqYh1yKhRKke_XsZ-gtrdT1My23Fdi03uDHkC2npGLZ-8sZJqraldeX6ag8kYmIJFIxw2R7BVSJx3cFDPyE2FdPz"
              />
            </div>
          </section>

          {/* Sovereign Progress Bar (Bottom) */}
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: "256px",
              right: "320px",
              height: "64px",
              backgroundColor: "#1c1b1b",
              display: "flex",
              alignItems: "center",
              padding: "0 3rem",
              zIndex: 20,
            }}
          >
            <div style={{ flexGrow: 1, display: "flex", gap: "0.5rem" }}>
              <div
                style={{
                  height: "0.5rem",
                  width: "100%",
                  backgroundColor: "#353534",
                  display: "flex",
                  gap: "0.25rem",
                }}
              >
                <div style={{ height: "100%", width: "25%", backgroundColor: "#f1c100" }} />
                <div style={{ height: "100%", width: "25%", backgroundColor: "#f1c100" }} />
                <div
                  style={{
                    height: "100%",
                    width: "25%",
                    backgroundColor: "#2b458b",
                    borderRight: "2px solid #f1c100",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-1.5rem",
                      left: 0,
                      fontSize: "0.625rem",
                      fontWeight: "bold",
                      color: "#f1c100",
                      whiteSpace: "nowrap",
                    }}
                  >
                    CURRENT POSITION
                  </div>
                </div>
                <div style={{ height: "100%", width: "25%", backgroundColor: "#353534" }} />
              </div>
            </div>
            <div style={{ marginLeft: "3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  fontSize: "0.625rem",
                  color: "#8e909c",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Global Ranking
              </span>
              <span
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontSize: "1.25rem",
                  color: "white",
                  fontStyle: "italic",
                }}
              >
                #1,204
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}