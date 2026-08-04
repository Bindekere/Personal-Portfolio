import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'

const phrases = [
  "I build modern, responsive web apps.",
  "I bring ideas to life with code.",
  "I turn coffee into UI and occasional bugs.",
]

export default function Hero() {
  const { theme } = useTheme()
  const isTerminal = theme === 'terminal'
  const isEthereal = theme === 'ethereal'

  const [currentPhrase, setCurrentPhrase] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const target = phrases[currentIndex]
    const speed = isDeleting ? 40 : 90
    const animate = () => {
      setCurrentPhrase(prev => {
        if (!isDeleting) {
          if (prev.length < target.length) return target.slice(0, prev.length + 1)
          setTimeout(() => setIsDeleting(true), 1800)
          return prev
        } else {
          if (prev.length > 0) return prev.slice(0, prev.length - 1)
          setIsDeleting(false)
          setCurrentIndex(i => (i + 1) % phrases.length)
          return prev
        }
      })
    }
    const t = setTimeout(animate, speed)
    return () => clearTimeout(t)
  }, [currentPhrase, isDeleting, currentIndex])

  return (
    <section
      id="home"
      className="grain"
      style={{
        minHeight: isEthereal ? '80vh' : '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Obsidian: decorative circles */}
      {theme === 'obsidian' && (
        <>
          <div className="hero-circle" style={{ position: 'absolute', top: '10%', right: '-10%', width: '520px', height: '520px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.08)', pointerEvents: 'none' }} />
          <div className="hero-circle" style={{ position: 'absolute', top: '15%', right: '-5%', width: '380px', height: '380px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.05)', pointerEvents: 'none' }} />
          <div className="hero-line" style={{ position: 'absolute', left: '6%', top: '20%', width: '1px', height: '160px', background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)', opacity: 0.4, pointerEvents: 'none' }} />
        </>
      )}

      {/* Terminal: scanline effect */}
      {isTerminal && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57,211,83,0.015) 2px, rgba(57,211,83,0.015) 4px)',
        }} />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: isTerminal ? '800px' : '720px' }}>

          {isTerminal ? (
            /* ── TERMINAL LAYOUT ── */
            <>
              <p className="section-label fade-up fade-up-delay-1" style={{ marginBottom: '1.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
                $ whoami
              </p>
              <div className="fade-up fade-up-delay-2" style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1 }}>
                  aaron_lutalo
                </span>
              </div>
              <p className="fade-up fade-up-delay-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                <span style={{ color: 'var(--accent)', opacity: 0.6 }}>role:</span> Frontend Developer
                <span style={{ margin: '0 1rem', opacity: 0.3 }}>|</span>
                <span style={{ color: 'var(--accent)', opacity: 0.6 }}>loc:</span> Kampala, UG
              </p>
              <p className="fade-up fade-up-delay-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem', color: 'var(--text-secondary)', minHeight: '1.8rem', marginBottom: '2.5rem' }}>
                <span style={{ color: 'var(--accent)', opacity: 0.5 }}>$ </span>
                {currentPhrase}
                <span className="animate-blink" style={{ display: 'inline-block', width: '8px', height: '1rem', background: 'var(--accent)', marginLeft: '2px', verticalAlign: 'middle' }} />
              </p>
              <div className="fade-up fade-up-delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn-gold">View My Work</a>
                <a href="#contact" className="btn-ghost">Contact Me</a>
              </div>
            </>
          ) : isEthereal ? (
            /* ── ETHEREAL LAYOUT ── */
            <>
              <div className="fade-up fade-up-delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', marginBottom: '2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399' }} />
                <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', tracking: '0.1em', color: 'rgba(255,255,255,0.6)' }}>Available for new projects</span>
              </div>
              
              <h1
                className="fade-up fade-up-delay-2"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--text-primary)', marginBottom: '3rem' }}
              >
                Crafting digital <br />
                <span style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>experiences</span> with intent.
              </h1>

              <div className="fade-up fade-up-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}>
                  <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '500px', lineHeight: 1.6 }}>
                    I'm <span style={{ color: '#fff' }}>Aaron Lutalo</span>, a Frontend Developer dedicated to building products that feel as good as they look.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>Kampala, Uganda</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                  <a 
                    href="#projects" 
                    className="btn-gold"
                    style={{ background: '#fff', color: '#000', borderRadius: '12px', padding: '1rem 2rem', fontWeight: 600, border: 'none' }}
                  >
                    Get in touch
                  </a>
                  <a 
                    href="#contact" 
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}
                  >
                    View Work
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                </div>
              </div>
            </>
          ) : (
            /* ── OBSIDIAN LAYOUT ── */
            <>
              <p className="section-label fade-up fade-up-delay-1">Portfolio — 2025</p>
              <h1
                className="font-display fade-up fade-up-delay-2"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 1.08, color: 'var(--text-primary)', margin: '1.25rem 0 1rem' }}
              >
                Hi, I'm{' '}
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Aaron Lutalo.</span>
              </h1>
              <h2
                className="fade-up fade-up-delay-3"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: 'var(--text-secondary)', fontWeight: 300, letterSpacing: '0.02em', marginBottom: '1.5rem' }}
              >
                Frontend Developer
              </h2>
              <p className="fade-up fade-up-delay-3" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', minHeight: '1.8rem', marginBottom: '2.5rem' }}>
                {currentPhrase}
                <span className="animate-blink" style={{ display: 'inline-block', width: '2px', height: '1.1rem', background: 'var(--accent)', marginLeft: '3px', verticalAlign: 'middle' }} />
              </p>
              <div className="fade-up fade-up-delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn-gold">View My Work</a>
                <a href="#contact" className="btn-ghost">Contact Me</a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          background: 'transparent', border: '1px solid var(--border)', borderRadius: '999px',
          padding: '0.6rem 1rem', color: 'var(--text-secondary)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          fontFamily: isTerminal ? "'JetBrains Mono', monospace" : 'inherit',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
      >
        <span>{isTerminal ? 'scroll_down' : 'Scroll'}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  )
}
