export default function SovereignAITerminal() {
  return (
    <div className="dark">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Public+Sans:wght@300;400;500;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .sovereign-root {
          background-color: #131313;
          color: #e5e2e1;
          font-family: 'Public Sans', sans-serif;
          overflow: hidden;
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

        .font-headline { font-family: 'Noto Serif', serif; }
        .font-body { font-family: 'Public Sans', sans-serif; }

        .nav-item-hover:hover { background-color: rgba(53,53,52,0.5); color: white; }
        .icon-hover:hover { color: #f1c100; }
        .input-bar:focus-within { border-bottom-color: #f1c100; }
      `}</style>

      <div className="sovereign-root" style={{ height: '100vh', position: 'relative' }}>

        {/* Background Watermark */}
        <div style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.03, overflow: 'hidden',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '600px', fontVariationSettings: "'wght' 100" }}>language</span>
        </div>
        <div className="diplomatic-grain" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

        {/* TopNavBar */}
        <nav style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          width: '100%', padding: '0 2rem', height: '64px',
          position: 'fixed', top: 0, zIndex: 50, backgroundColor: '#131313',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{
              fontSize: '1.25rem', fontWeight: 'bold', color: '#f1c100',
              fontFamily: "'Noto Serif', serif", textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>Model UN Academy</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['Simulation Arena'].map(label => (
              <a key={label} href="#" style={{
                color: '#94a3b8', textDecoration: 'none', fontFamily: "'Noto Serif', serif",
                fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em',
                transition: 'color 0.2s',
              }}>{label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{
              color: '#f1c100', fontFamily: "'Noto Serif', serif", fontWeight: 'bold',
              textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem',
            }}>Diplomatic Rank: Attaché</span>
            <div style={{
              width: '2rem', height: '2rem', backgroundColor: '#2a2a2a',
              border: '1px solid rgba(68,70,81,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>account_circle</span>
            </div>
          </div>
        </nav>

        {/* SideNavBar */}
        <aside style={{
          position: 'fixed', left: 0, top: '64px', height: 'calc(100vh - 64px)',
          display: 'flex', flexDirection: 'column', zIndex: 40,
          backgroundColor: '#1c1b1b', width: '256px',
          boxShadow: '4px 0px 24px rgba(11,43,113,0.06)',
        }}>
          <div style={{ padding: '1.5rem' }}>
            <div style={{
              color: '#f1c100', fontWeight: 900, fontFamily: "'Public Sans', sans-serif",
              fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '-0.05em',
            }}>Sovereign Shell</div>
            <div style={{ color: '#64748b', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
              V1.0 Diplomatic Intelligence
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '1rem' }}>
            {[
              { icon: 'gavel', label: 'General Assembly', active: false },
              { icon: 'shield', label: 'Security Council', active: false },
              { icon: 'error', label: 'Crisis Room', active: false },
              { icon: 'book_5', label: 'Library', active: false },
              { icon: 'analytics', label: 'Intelligence', active: true },
            ].map(({ icon, label, active }) => (
              <div key={label} className={active ? '' : 'nav-item-hover'} style={{
                padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem',
                backgroundColor: active ? '#353534' : 'transparent',
                color: active ? '#f1c100' : '#64748b',
                borderLeft: active ? '4px solid #f1c100' : '4px solid transparent',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>
                <span className="material-symbols-outlined">{icon}</span>
                <span style={{
                  fontFamily: "'Public Sans', sans-serif", fontSize: '0.75rem',
                  fontWeight: 500, textTransform: 'uppercase', letterSpacing: '-0.05em',
                }}>{label}</span>
              </div>
            ))}
          </div>

        
        </aside>

        {/* TopAppBar */}
        <header style={{
          display: 'flex', alignItems: 'center', width: '100%',
          padding: '1rem 3rem', marginTop: '64px', marginLeft: '256px',
          backgroundColor: 'rgba(19,19,19,0.6)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(68,70,81,0.15)', zIndex: 30,
          position: 'fixed', top: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="material-symbols-outlined" style={{ color: '#f1c100' }}>smart_toy</span>
            <h1 style={{
              fontFamily: "'Noto Serif', serif", fontSize: '1.125rem',
              fontStyle: 'italic', color: '#f1c100',
            }}>Sovereign AI Terminal</h1>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {['history', 'settings'].map(icon => (
              <span key={icon} className="material-symbols-outlined icon-hover" style={{
                color: '#94a3b8', cursor: 'pointer', transition: 'color 0.2s',
              }}>{icon}</span>
            ))}
          </div>
        </header>

        {/* Main Chat Canvas */}
        <main style={{
          marginLeft: '256px', paddingTop: '1rem',
          height: 'calc(100vh - 144px)', overflowY: 'auto',
          zIndex: 10, position: 'relative',
          marginTop: '128px',
        }}>
          <div style={{
            maxWidth: '56rem', margin: '0 auto', padding: '3rem 1.5rem',
            display: 'flex', flexDirection: 'column', gap: '3rem',
          }}>

            {/* System Timestamp */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{
                backgroundColor: '#1c1b1b', padding: '0.25rem 1rem',
                fontSize: '0.625rem', fontWeight: 'bold', letterSpacing: '0.2em',
                color: '#8e909c', textTransform: 'uppercase',
              }}>Session Initialized // 14:02:44 GMT</span>
            </div>

            {/* AI Message 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '48rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <div style={{
                  width: '1.5rem', height: '1.5rem', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', backgroundColor: 'rgba(241,193,0,0.1)',
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#f1c100', fontSize: '0.75rem', fontVariationSettings: "'FILL' 1" }}>gavel</span>
                </div>
                <span style={{
                  fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: '#f1c100',
                }}>Intelligence Briefing</span>
              </div>
              <div style={{
                backgroundColor: '#1c1b1b', padding: '1.5rem',
                borderLeft: '2px solid #f1c100', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem', opacity: 0.1 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '3.75rem' }}>shield</span>
                </div>
                <p className="font-headline" style={{ fontSize: '1.125rem', lineHeight: 1.625, marginBottom: '1rem' }}>
                  Good afternoon, Delegate. The Security Council has just received an urgent report regarding the maritime border dispute in the East Aegean. Analysis suggests a 64% increase in regional tension.
                </p>
                <p style={{ fontSize: '0.875rem', color: '#c5c6d2', lineHeight: 1.8 }}>
                  The Sovereign Terminal is standing by for your strategic assessment. We must draft a resolution that addresses sovereignty without escalating naval presence. How would you like to proceed with the opening statement?
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', padding: '0 0.5rem' }}>
                <span style={{ fontSize: '0.5625rem', color: '#8e909c', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '-0.05em' }}>Ref: SEC-CON-772</span>
                <span style={{ fontSize: '0.5625rem', color: '#8e909c', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '-0.05em' }}>Classification: TOP SECRET</span>
              </div>
            </div>

            {/* User Message */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              alignItems: 'flex-end', marginLeft: 'auto', maxWidth: '40rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span style={{
                  fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: '#b4c5ff',
                }}>Delegate Assessment</span>
                <div style={{
                  width: '1.5rem', height: '1.5rem', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', backgroundColor: 'rgba(180,197,255,0.1)',
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#b4c5ff', fontSize: '0.75rem', fontVariationSettings: "'FILL' 1" }}>person</span>
                </div>
              </div>
              <div style={{
                backgroundColor: '#353534', padding: '1.5rem',
                borderRight: '2px solid #b4c5ff', textAlign: 'right',
              }}>
                <p style={{ fontSize: '1rem', lineHeight: 1.625 }}>
                  Let's prioritize multilateral mediation. I want to propose a neutral observation zone coordinated by a third-party non-aligned state. What are the legal precedents for similar buffer zones in the last decade?
                </p>
              </div>
            </div>

            {/* AI Message 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '48rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <div style={{
                  width: '1.5rem', height: '1.5rem', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', backgroundColor: 'rgba(241,193,0,0.1)',
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#f1c100', fontSize: '0.75rem', fontVariationSettings: "'FILL' 1" }}>gavel</span>
                </div>
                <span style={{
                  fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: '#f1c100',
                }}>Intelligence Briefing</span>
              </div>
              <div style={{ backgroundColor: '#1c1b1b', padding: '1.5rem', borderLeft: '2px solid #f1c100' }}>
                <h3 className="font-headline" style={{
                  fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem',
                  textTransform: 'uppercase', letterSpacing: '-0.025em',
                }}>Legal Precedents Identified</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    {
                      num: '01',
                      title: 'Resolution 1244 (1999)',
                      desc: 'Established international civil and security presence under UN auspices.',
                    },
                    {
                      num: '02',
                      title: 'Treaty of Lausanne (1923)',
                      desc: 'Historical framework for demilitarization of designated island zones.',
                    },
                  ].map(({ num, title, desc }) => (
                    <div key={num} style={{
                      display: 'flex', gap: '1rem', padding: '1rem',
                      backgroundColor: '#0e0e0e', border: '1px solid rgba(68,70,81,0.1)',
                    }}>
                      <span style={{ color: '#f1c100', fontWeight: 'bold' }}>{num}</span>
                      <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e5e2e1' }}>{title}</p>
                        <p style={{ fontSize: '0.75rem', color: '#c5c6d2', marginTop: '0.25rem' }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#c5c6d2', marginTop: '1.5rem', fontStyle: 'italic' }}>
                  Awaiting your directive for drafting Clause 4.a: Non-Aligned Mediation.
                </p>
              </div>
            </div>

          </div>
        </main>

        {/* Bottom Input Bar */}
        <div style={{
          position: 'fixed', bottom: 0, left: '256px', right: 0, height: '96px',
          backgroundColor: '#131313', zIndex: 40, padding: '0 2rem',
          display: 'flex', alignItems: 'center',
        }}>
          <div className="input-bar" style={{
            maxWidth: '56rem', margin: '0 auto', width: '100%',
            display: 'flex', alignItems: 'center', gap: '1rem',
            backgroundColor: '#1c1b1b', padding: '0.5rem',
            borderBottom: '2px solid #444651', transition: 'border-color 0.2s',
          }}>
            <span className="material-symbols-outlined" style={{ color: '#8e909c', padding: '0 0.5rem' }}>edit_note</span>
            <input
              type="text"
              placeholder="Type diplomatic directive or draft resolution clause..."
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: '#e5e2e1', fontFamily: "'Public Sans', sans-serif", fontSize: '0.875rem',
                textTransform: 'uppercase', letterSpacing: '-0.025em',
              }}
            />
            <button style={{
              backgroundColor: '#f1c100', color: '#3d2f00',
              padding: '0.75rem 2rem', fontWeight: 'bold', fontSize: '0.75rem',
              textTransform: 'uppercase', letterSpacing: '0.2em', border: 'none', cursor: 'pointer',
              transition: 'filter 0.2s, transform 0.1s',
            }}>TRANSMIT</button>
          </div>
        </div>

      </div>
    </div>
  );
}