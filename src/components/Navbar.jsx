import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Services', 'Tech Stack', 'Projects', 'Contact']
  const hrefs = ['#home', '#about', '#services', '#tech', '#projects', '#contact']

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(14,14,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #2a2a2e' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            style={{ color: 'var(--accent)', fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
          >
            AL
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <a key={i} href={hrefs[i]} className="nav-link">{link}</a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }} className="md:hidden">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link, i) => (
              <a key={i} href={hrefs[i]} className="nav-link" onClick={() => setIsMenuOpen(false)}>{link}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
