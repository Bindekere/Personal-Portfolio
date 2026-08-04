import { useTheme } from '../ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  const isTerminal = theme === 'terminal'
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '3.5rem 0 2rem' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p style={{
              fontFamily: isTerminal ? "'JetBrains Mono', monospace" : "'Playfair Display', serif",
              fontSize: isTerminal ? '0.9rem' : '1.25rem',
              color: 'var(--accent)',
              fontWeight: 600,
              marginBottom: '0.75rem',
              letterSpacing: isTerminal ? '0.05em' : 'normal',
            }}>
              {isTerminal ? '~/aaron_lutalo' : 'Aaron Lutalo'}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '240px', fontFamily: 'var(--body-font)' }}>
              {isTerminal
                ? '// Frontend developer & trader building at the intersection of code and markets.'
                : 'Frontend developer & trader building at the intersection of code and markets.'
              }
            </p>
          </div>

          {/* Navigation */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600, fontFamily: 'var(--mono-font)' }}>
              {isTerminal ? '// Nav' : 'Navigation'}
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              {[['Home','#home'],['About','#about'],['Projects','#projects'],['Contact','#contact']].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s', fontFamily: 'var(--body-font)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {isTerminal ? `> ${label}` : label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="footer-connect" style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600, fontFamily: 'var(--mono-font)' }}>
              {isTerminal ? '// Connect' : 'Connect'}
            </p>
            <div className="footer-connect-links" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.25rem' }}>
              {[['GitHub','https://github.com/Bindekere'],['Twitter','https://x.com/ABindekere']].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s', fontFamily: 'var(--body-font)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'var(--mono-font)' }}>
            {isTerminal ? `© ${year} aaron_lutalo. All rights reserved.` : `© ${year} Aaron Lutalo. All rights reserved.`}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'var(--mono-font)' }}>
            {isTerminal ? 'built_with: React + Tailwind CSS' : 'Built with React + Tailwind CSS'}
          </p>
        </div>
      </div>
    </footer>
  )
}
