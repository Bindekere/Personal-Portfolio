import React from 'react'

const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications with React and modern CSS. Clean code, great UX, and pixel-perfect implementation from design to deployment.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
  },
  {
    number: '02',
    title: 'UI Implementation',
    description: 'Translating Figma designs and wireframes into polished, accessible interfaces. Attention to spacing, typography, motion, and cross-browser consistency.',
    tags: ['Figma', 'CSS', 'Responsive Design', 'Accessibility'],
  },
  {
    number: '03',
    title: 'API Integration',
    description: 'Connecting frontends to third-party APIs and backend services. Comfortable working with REST APIs, handling async data, and managing application state.',
    tags: ['REST APIs', 'Fetch / Axios', 'JSON', 'localStorage'],
  },
]

const Services = () => {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--bg-secondary)', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="section-label" style={{ marginBottom: '0.75rem' }}>What I Do</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4rem', lineHeight: 1.2 }}>
          What I <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Offer</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Number */}
              <span className="font-display" style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--border)', lineHeight: 1, userSelect: 'none' }}>
                {service.number}
              </span>

              {/* Title */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.85, margin: 0, flex: 1 }}>
                {service.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {service.tags.map((tag, j) => (
                  <span key={j} style={{
                    fontSize: '0.7rem', letterSpacing: '0.07em', textTransform: 'uppercase',
                    padding: '0.25rem 0.6rem', border: '1px solid var(--border)',
                    color: 'var(--text-secondary)', borderRadius: '2px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
