import React, { useState, useEffect } from 'react'

const Hero = () => {
  const phrases = [
    "I build modern, responsive web apps.",
    "I bring ideas to life with code.",
    "I turn coffee into UI and occasional bugs.",
  ]

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
    <section id="home" className="grain" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'var(--bg-primary)', overflow: 'hidden' }}>

      {/* Decorative background circle */}
      <div className="hero-circle" style={{
        position: 'absolute', top: '10%', right: '-10%', width: '520px', height: '520px',
        borderRadius: '50%', border: '1px solid rgba(201,168,76,0.08)',
        pointerEvents: 'none',
      }} />
      <div className="hero-circle" style={{
        position: 'absolute', top: '15%', right: '-5%', width: '380px', height: '380px',
        borderRadius: '50%', border: '1px solid rgba(201,168,76,0.05)',
        pointerEvents: 'none',
      }} />

      {/* Vertical line accent */}
      <div className="hero-line" style={{
        position: 'absolute', left: '6%', top: '20%', width: '1px', height: '160px',
        background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div style={{ maxWidth: '720px' }}>

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

          <p
            className="fade-up fade-up-delay-3"
            style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', minHeight: '1.8rem', marginBottom: '2.5rem' }}
          >
            {currentPhrase}
            <span className="animate-blink" style={{ display: 'inline-block', width: '2px', height: '1.1rem', background: 'var(--accent)', marginLeft: '3px', verticalAlign: 'middle' }} />
          </p>

          <div className="fade-up fade-up-delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-gold">View My Work</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          background: 'transparent', border: '1px solid var(--border)', borderRadius: '999px',
          padding: '0.6rem 1rem', color: 'var(--text-secondary)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem',
          letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'border-color 0.3s, color 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
      >
        <span>Scroll</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  )
}

export default Hero
