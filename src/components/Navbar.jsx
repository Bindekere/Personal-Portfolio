import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Services', 'Tech Stack', 'Projects', 'Contact']
  const hrefs = ['#home', '#about', '#services', '#tech', '#projects', '#contact']

  const isTerminal = theme === 'terminal'

  return (
    <nav
      style={{
        background: scrolled ? (isTerminal ? 'rgba(13,17,23,0.95)' : 'rgba(14,14,15,0.92)') : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? `1px solid var(--border)`
          : '1px solid transparent',
        transition: 'all 0.4s ease',
        fontFamily: 'var(--nav-font)',
      }}
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Brand */}
          <a
            href="#home"
            style={{
              color: 'var(--accent)',
              fontFamily: isTerminal ? "'JetBrains Mono', monospace" : "'Playfair Display', serif",
              fontSize: isTerminal ? '0.9rem' : '1.25rem',
              fontWeight: 600,
              letterSpacing: isTerminal ? '0.1em' : '0.05em',
              textDecoration: 'none',
            }}
          >
            {isTerminal ? '~/aaron_lutalo' : 'AL'}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <a key={i} href={hrefs[i]} className="nav-link">{link}</a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--text-secondary)', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }} className="md:hidden">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link, i) => (
              <a key={i} href={hrefs[i]} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
