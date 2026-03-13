import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '3.5rem 0 2rem' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.75rem' }}>
              Aaron Lutalo
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '240px' }}>
              Frontend developer & trader building at the intersection of code and markets.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600 }}>
              Navigation
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              {[['Home','#home'],['About','#about'],['Projects','#projects'],['Contact','#contact']].map(([label, href]) => (
                <a key={href} href={href} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >{label}</a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="footer-connect" style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600 }}>
              Connect
            </p>
            <div className="footer-connect-links" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.25rem' }}>
              {[['GitHub','https://github.com/Bindekere'],['LinkedIn','#'],['Twitter','#']].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >{label}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
            © {year} Aaron Lutalo. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
