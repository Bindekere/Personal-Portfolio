import React from 'react'

const About = () => {
  const education = [
    { school: 'University of the People', degree: "Associate's Degree — Computer Science", period: '2022 – 2025' },
    { school: 'Scrimba', degree: 'Frontend Developer Certificate', period: '2021 – 2022' },
  ]

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg-secondary)', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="section-label" style={{ marginBottom: '0.75rem' }}>Who I Am</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4rem', maxWidth: '480px', lineHeight: 1.2 }}>
          About <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <div>
            <div className="accent-bar" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '0.01em' }}>
              Developer. Trader. Builder.
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.25rem', fontSize: '0.975rem' }}>
              I started my journey in tech through Scrimba and the University of the People, building responsive web apps and sharpening my frontend skills. Along the way I discovered a passion for financial markets and pivoted to trading fulltime — a career that demands discipline, pattern recognition, and resilience.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '2.5rem', fontSize: '0.975rem' }}>
              Today I sit at the intersection of both worlds — markets and code. My goal is to build real-world AI-powered products that matter.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-gold">Get in Touch</a>
              <a href="/resume.pdf" className="btn-ghost" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>

          {/* Right — Education */}
          <div>
            <div className="accent-bar" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Education & Training
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((item, i) => (
                <div key={i} style={{
                  padding: '1.25rem 1.5rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '2px',
                }}>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.975rem', marginBottom: '0.3rem' }}>{item.school}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.degree}</p>
                  <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>{item.period}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
