import { useNavigate } from "react-router-dom";

export default function SecurityCouncilBriefing() {
  const Navigate = useNavigate();
  return (
    <div className="dark">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@300;400;600;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #131313;
          color: #e5e2e1;
          font-family: 'Public Sans', sans-serif;
        }

        ::selection {
          background-color: #f1c100;
          color: #3d2f00;
        }

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
          -webkit-font-smoothing: antialiased;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .diplomatic-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
        }

        .globe-grid {
          background-image: radial-gradient(circle at 2px 2px, #444651 1px, transparent 0);
          background-size: 40px 40px;
          opacity: 0.1;
        }

        .font-headline { font-family: 'Noto Serif', serif; }
        .font-body { font-family: 'Public Sans', sans-serif; }
        .font-label { font-family: 'Public Sans', sans-serif; }

        .nav-item:hover { background-color: rgba(53,53,52,0.5); color: white; }
        .option-btn:hover { border-color: #f1c100; }
        .icon-btn:hover { color: #f1c100; }
      `}</style>

      {/* TopNavBar */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        width: '100%', padding: '0 2rem', height: '64px',
        position: 'fixed', top: 0, zIndex: 50, backgroundColor: '#131313',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span style={{
            fontSize: '1.25rem', fontWeight: 'bold', color: '#f1c100',
            fontFamily: "'Noto Serif', serif", textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>Model UN Academy</span>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#" style={{
              color: '#f1c100', textDecoration: 'none', fontFamily: "'Noto Serif', serif",
              fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem',
              borderBottom: '2px solid #f1c100', paddingBottom: '4px',
            }}>Simulation Arena</a>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            color: '#f1c100', fontFamily: "'Noto Serif', serif", fontWeight: 'bold',
            textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem',
          }}>Diplomatic Rank: Attaché</span>
          <div style={{
            width: '2rem', height: '2rem', backgroundColor: '#353534',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img
              alt="Diplomatic Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwDEElOvyPyeEcap-nxJRj22UDEfB0Kus5O2CgEcfkoN7erqEQ6PmY25eSpilh_KY7Jmz6q6pUlCJiF1LBBbemR076R8MJVv2hxNDv7F2kuqcTBu-_b0Enia7QaL2IXHBvSyQH4NJTD-ZQ1ZYfWNlJivTm5v-TTo1ARAYueOflGY6HtiyMtwA5Ikb8994E-ymWJoYHBP885k2d_3HqyT3MspISCcxhPXLdU61Wgb3wVtMAgqlDbzNVCz8zKbX-Y8YGNz545BVMOQYI"
            />
          </div>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside style={{
        position: 'fixed', left: 0, top: '64px', height: 'calc(100vh - 64px)',
        display: 'flex', flexDirection: 'column', zIndex: 40,
        backgroundColor: '#1c1b1b', boxShadow: '4px 0px 24px rgba(11,43,113,0.06)',
        width: '256px', transition: 'transform 150ms ease-in-out',
      }}>
        <div style={{ padding: '1.5rem' }}>
          <span style={{
            color: '#f1c100', fontWeight: 900, fontFamily: "'Public Sans', sans-serif",
            fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>Sovereign Shell</span>
          <p style={{ color: '#64748b', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
            V1.0 Diplomatic Intelligence
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {[
            { icon: 'gavel', label: 'General Assembly', active: false },
            { icon: 'shield', label: 'Security Council', active: true },
            { icon: 'error', label: 'Crisis Room', active: false },
            { icon: 'book_5', label: 'Library', active: false },
            { icon: 'analytics', label: 'Intelligence', active: false },
          ].map(({ icon, label, active }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', padding: '1rem 1.5rem',
              backgroundColor: active ? '#353534' : 'transparent',
              color: active ? '#f1c100' : '#64748b',
              borderLeft: active ? '4px solid #f1c100' : '4px solid transparent',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <span className="material-symbols-outlined">{icon}</span>
              <span style={{
                marginLeft: '1rem', fontWeight: 500,
                fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '-0.05em',
              }}>{label}</span>
            </div>
          ))}
        </div>

      
      </aside>

      {/* Main Canvas */}
      <main style={{
        marginLeft: '256px', paddingTop: '64px',
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        backgroundColor: '#131313',
      }}>
        <div className="diplomatic-grain" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="globe-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

        {/* TopAppBar */}
        <header style={{
          display: 'flex', alignItems: 'center', width: '100%',
          padding: '2rem 3rem', backgroundColor: 'rgba(19,19,19,0.6)',
          backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(68,70,81,0.15)',
        }}>
          <div style={{ marginRight: '1.5rem', cursor: 'pointer', color: '#f1c100' }}>
            <span className="material-symbols-outlined" onClick={() => Navigate("/learningpath")}>arrow_back</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: "'Public Sans', sans-serif", fontSize: '0.625rem',
              textTransform: 'uppercase', letterSpacing: '0.2em', color: '#8e909c', marginBottom: '0.25rem',
            }}>Module: Intelligence Gathering</p>
            <h1 style={{
              fontFamily: "'Noto Serif', serif", fontSize: '1.875rem',
              fontStyle: 'italic', color: '#f1c100',
            }}>Security Council Briefing</h1>
          </div>
          <div style={{ display: 'flex', gap: '1rem', color: '#8e909c' }}>
            <span className="material-symbols-outlined icon-btn" style={{ cursor: 'pointer' }}>share</span>
            <span className="material-symbols-outlined icon-btn" style={{ cursor: 'pointer' }}>more_vert</span>
          </div>
        </header>

        {/* Content Section */}
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '3rem' }}>

          {/* Header Group */}
          <div style={{ marginBottom: '4rem' }}>
            <p style={{
              fontFamily: "'Public Sans', sans-serif", fontSize: '0.75rem', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.3em', color: '#f1c100', marginBottom: '1rem',
            }}>Phase 01: Foundations</p>
            <h2 style={{
              fontFamily: "'Noto Serif', serif", fontSize: '3rem', fontWeight: 'bold',
              lineHeight: 1.2, maxWidth: '32rem', marginBottom: '1.5rem',
            }}>Resolution Writing Quest: Part 1</h2>
            <div style={{ width: '6rem', height: '0.25rem', backgroundColor: '#f1c100' }} />
          </div>

          {/* Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>

            {/* Sidebar */}
            <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <section style={{
                backgroundColor: '#1c1b1b', padding: '2rem',
                borderLeft: '4px solid #f1c100',
              }}>
                <h3 style={{
                  fontFamily: "'Public Sans', sans-serif", fontSize: '0.625rem', fontWeight: 900,
                  textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8e909c', marginBottom: '1.5rem',
                }}>Quest Objective</h3>
                <p style={{ fontSize: '0.875rem', color: '#e5e2e1', lineHeight: 1.625, marginBottom: '1.5rem' }}>
                  Master the art of preambular and operative clauses to secure sovereign support in the General Assembly.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '0.25rem' }}>
                    <span>Authority Rank</span>
                    <span style={{ color: '#f1c100' }}>45%</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.25rem', height: '0.5rem' }}>
                    {[true, true, false, false, false].map((filled, i) => (
                      <div key={i} style={{ flex: 1, backgroundColor: filled ? '#f1c100' : '#353534' }} />
                    ))}
                  </div>
                </div>
              </section>

              <div style={{ position: 'relative' }}>
                <img
                  alt="UN Chamber"
                  style={{ width: '100%', filter: 'grayscale(1) brightness(0.5) contrast(1.25)', display: 'block' }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUVju7efAIH9txkVm9ZNgWFyGNf2JEgILGMCwdPEDbVLAEuzdMIkPfy6upOuhG0klC7BXVItcLYQDAiDx4pD62t6AJD4mBFeCF-dn_x60wbnPEgROaCOTybv_qMirPCa0NWC3eUopthy-rsIpEZYgCrzJZt7jddNV09alpqAKOog1qg5lq2sB7Z21hQ7oaAKyPMOR173pWLEwIhDhgwtEqG1K3fX2uH3zBfWrlrsJCRLksxp68ti73y0280J91VBPb-sgVurW2hs7H"
                />
                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(241,193,0,0.2)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                  <span style={{
                    fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase',
                    letterSpacing: '0.1em', backgroundColor: '#f1c100', color: '#3d2f00',
                    padding: '0.25rem 0.5rem',
                  }}>Sovereign Territory</span>
                </div>
              </div>
            </div>

            {/* Main Flow */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

              {/* Checkpoint 1 */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '-1.5rem', top: 0, height: '100%',
                  width: '2px', backgroundColor: 'rgba(68,70,81,0.2)',
                }} />
                <div style={{
                  position: 'absolute', left: '-9px', top: 0,
                  width: '1rem', height: '1rem', backgroundColor: '#131313',
                  border: '2px solid #f1c100', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: '0.375rem', height: '0.375rem', backgroundColor: '#f1c100' }} />
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <h4 style={{
                    fontFamily: "'Noto Serif', serif", fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem',
                  }}>Checkpoint 01: The Operative Mandate</h4>
                  <p style={{ color: 'rgba(229,226,225,0.8)', lineHeight: 1.625, marginBottom: '2rem' }}>
                    Operative clauses are the "action" part of your resolution. Unlike preambular clauses which describe the situation, operative clauses state exactly what the body intends to do. The choice of verb defines the weight of the mandate.
                  </p>

                  {/* Simulation Box */}
                  <div style={{
                    backgroundColor: '#353534', padding: '2rem',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '6rem' }}>gavel</span>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{
                        fontFamily: "'Public Sans', sans-serif", fontSize: '0.625rem', fontWeight: 900,
                        textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f1c100',
                        display: 'block', marginBottom: '0.5rem',
                      }}>Simulation Scenario</span>
                      <p style={{ fontSize: '1.125rem', fontFamily: "'Noto Serif', serif", fontStyle: 'italic' }}>
                        A crisis has emerged in the Sahel region. You are drafting a resolution to demand immediate humanitarian access. Which operative opener commands the most authority?
                      </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <button className="option-btn" style={{
                        padding: '1.5rem', textAlign: 'left',
                        borderBottom: '2px solid #444651', backgroundColor: '#1c1b1b',
                        transition: 'all 0.2s', cursor: 'pointer', border: 'none',
                        borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#444651',
                        color: '#e5e2e1',
                      }}>
                        <span style={{
                          fontFamily: "'Public Sans', sans-serif", fontSize: '0.625rem', color: '#8e909c',
                          textTransform: 'uppercase',
                        }}>OPTION A</span>
                        <p style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '0.5rem' }}>"The General Assembly Urges..."</p>
                      </button>
                      <button style={{
                        padding: '1.5rem', textAlign: 'left',
                        borderBottom: '2px solid #f1c100', backgroundColor: '#1c1b1b',
                        transition: 'all 0.2s', cursor: 'pointer', border: 'none',
                        borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#f1c100',
                        color: '#e5e2e1',
                      }}>
                        <span style={{
                          fontFamily: "'Public Sans', sans-serif", fontSize: '0.625rem', color: '#f1c100',
                          textTransform: 'uppercase',
                        }}>OPTION B</span>
                        <p style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '0.5rem' }}>"The General Assembly Decides..."</p>
                      </button>
                    </div>

                    {/* Feedback */}
                    <div style={{
                      marginTop: '2rem', padding: '1.5rem',
                      backgroundColor: 'rgba(241,193,0,0.1)', borderLeft: '4px solid #f1c100',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <span className="material-symbols-outlined" style={{ color: '#f1c100', fontVariationSettings: "'FILL' 1" }}>verified</span>
                        <span style={{
                          fontFamily: "'Public Sans', sans-serif", fontSize: '0.625rem', fontWeight: 900,
                          textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f1c100',
                        }}>Diplomatic Success</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#e5e2e1', lineHeight: 1.625, fontStyle: 'italic' }}>
                        "Decides" is a stronger operative verb reserved for binding actions or definitive stances. "Urges" is a recommendation. In a crisis mandate, clarity is power.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkpoint 2 */}
              <div style={{ position: 'relative', opacity: 0.6 }}>
                <div style={{
                  position: 'absolute', left: '-1.5rem', top: 0, height: '100%',
                  width: '2px', backgroundColor: 'rgba(68,70,81,0.2)',
                }} />
                <div style={{
                  position: 'absolute', left: '-9px', top: 0,
                  width: '1rem', height: '1rem', backgroundColor: 'rgba(68,70,81,0.4)',
                }} />
                <div style={{ paddingLeft: '2.5rem' }}>
                  <h4 style={{
                    fontFamily: "'Noto Serif', serif", fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem',
                  }}>Checkpoint 02: Preambular Nuance</h4>
                  <p style={{ color: 'rgba(229,226,225,0.8)', lineHeight: 1.625, marginBottom: '2rem' }}>
                    Before action, comes justification. Preambular clauses establish the legal and moral ground for your resolution. They are the narrative engine of diplomacy.
                  </p>
                  <div style={{
                    border: '1px solid rgba(68,70,81,0.2)', padding: '2rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    cursor: 'not-allowed',
                  }}>
                    <div>
                      <span style={{
                        fontFamily: "'Public Sans', sans-serif", fontSize: '0.625rem', fontWeight: 900,
                        textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8e909c',
                      }}>Locked Level</span>
                      <p style={{ fontFamily: "'Noto Serif', serif", fontSize: '1.25rem', color: '#8e909c' }}>
                        Decision Scenario: The Sovereignty Clause
                      </p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: '#8e909c' }}>lock</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Achievement Badge */}
        <div style={{
          position: 'fixed', bottom: '3rem', right: '3rem',
          display: 'flex', alignItems: 'center', gap: '1rem',
          backgroundColor: 'rgba(53,53,52,0.8)', backdropFilter: 'blur(24px)',
          padding: '1rem', border: '1px solid rgba(68,70,81,0.15)', zIndex: 50,
        }}>
          <div style={{
            width: '3rem', height: '3rem', display: 'flex', alignItems: 'center',
            justifyContent: 'center', border: '2px solid rgba(241,193,0,0.3)', position: 'relative',
          }}>
            <span className="material-symbols-outlined" style={{ color: '#f1c100', fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
              justifyContent: 'center', transform: 'scale(1.5)', opacity: 0.1,
            }}>
              <span className="material-symbols-outlined">star</span>
            </div>
          </div>
          <div>
            <p style={{
              fontSize: '0.5625rem', fontWeight: 900, textTransform: 'uppercase',
              letterSpacing: '0.2em', color: '#f1c100',
            }}>Badge Earned</p>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', fontFamily: "'Noto Serif', serif" }}>Eloquent Sovereign</p>
          </div>
        </div>
      </main>
    </div>
  );
}