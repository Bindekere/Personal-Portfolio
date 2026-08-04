import { useTheme } from '../ThemeContext'
import quizApp from '../assets/quiz-app.png'
import ipTracker from '../assets/screenshot (1).png'
import adviceGenerator from '../assets/advice 2.png'
import movie from '../assets/image.png'
import Prime from '../assets/Prime.png'

const projects = [
  {
    title: 'Trivia Quiz App',
    description: 'A React quiz app that fetches live questions from the Open Trivia DB API. Pick your category and difficulty, answer multiple-choice questions, and get scored at the end. Built with full state management, randomised answer ordering, and a Play Again flow — no page refresh needed.',
    tech: ['React', 'JavaScript', 'Vite', 'CSS', 'Open Trivia API'],
    image: quizApp,
    liveLink: 'https://capstonequizproject.netlify.app/',
    githubLink: 'https://github.com/Bindekere/scrimba-solo-quiz-project',
  },
  {
    title: 'PrimeMagnetar Website',
    description: 'A modern, responsive website for PrimeMagnetar, showcasing their services and products with a clean design and intuitive user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: Prime,
    liveLink: 'https://primemagnetar.netlify.app/',
    githubLink: 'https://github.com/Bindekere/prime-magnetar-capital-website',
  },
  {
    title: 'IP Address Tracker',
    description: 'A Frontend Mentor challenge — fetches live IP geolocation data and renders it on an interactive Leaflet.js map. Tests API integration and external library skills.',
    tech: ['HTML', 'Bootstrap', 'JavaScript', 'Leaflet.js', 'ipify'],
    image: ipTracker,
    liveLink: 'https://bindekere-ip-address-tracker.netlify.app/',
    githubLink: 'https://github.com/Bindekere/IP-Address-Tracker',
  },
  {
    title: 'Advice Generator',
    description: 'A Frontend Mentor challenge integrating RapidAPI to serve random pieces of advice, with smooth CSS animations on card flip.',
    tech: ['HTML', 'CSS', 'JavaScript', 'RapidAPI'],
    image: adviceGenerator,
    liveLink: 'https://advice-generation.netlify.app/',
    githubLink: 'https://github.com/Bindekere/Advice-generator',
  },
  {
    title: 'Movie Watchlist',
    description: 'Search for movies via the OMDb API, view details, and manage a personal watchlist. Built to practice DOM manipulation, API fetching, and localStorage.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OMDb API'],
    image: movie,
    liveLink: 'https://bindekere-movie-watchlist.netlify.app/',
    githubLink: 'https://github.com/Bindekere/movie-watchlist',
  },
]

export default function Projects() {
  const { theme } = useTheme()
  const isTerminal = theme === 'terminal'
  const isEthereal = theme === 'ethereal'

  return (
    <section
      id="projects"
      className="section-pad"
      style={{ background: 'var(--bg-secondary)', padding: '7rem 0', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="section-label" style={{ marginBottom: '0.75rem' }}>
          {isTerminal ? 'projects --list' : isEthereal ? '// Curated Work' : "What I've Built"}
        </p>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--text-primary)',
            fontWeight: isTerminal ? 700 : 600,
            marginBottom: '4rem',
            lineHeight: 1.2,
            fontFamily: 'var(--display-font)',
          }}
        >
          {isTerminal ? (
            <><span style={{ color: 'var(--accent)' }}>{'>'}</span> Selected <span style={{ color: 'var(--accent)' }}>Projects</span></>
          ) : isEthereal ? (
            <>Selected <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Creations</span></>
          ) : (
            <>Selected <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Projects</span></>
          )}
        </h2>

        {/* Terminal: table header */}
        {isTerminal && (
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            padding: '0.5rem 1.5rem',
            borderBottom: '1px solid var(--border)',
            marginBottom: '0',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            opacity: 0.5,
          }}>
            <span>Project_Name</span>
            <span>Stack</span>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: isTerminal ? '0' : undefined }}>
          {projects.map((project, i) => (
            <div
              key={i}
              className="card"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Image */}
              <div style={{ overflow: 'hidden', height: '200px', position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {isTerminal && (
                  <div style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    background: 'rgba(13,17,23,0.85)',
                    border: '1px solid var(--border)',
                    padding: '0.2rem 0.6rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.2rem', fontWeight: 600,
                    color: 'var(--text-primary)', marginBottom: '0.75rem',
                    fontFamily: 'var(--display-font)',
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.25rem', flex: 1, fontFamily: 'var(--body-font)' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      style={{
                        fontSize: '0.7rem', letterSpacing: '0.07em', textTransform: 'uppercase',
                        padding: '0.25rem 0.6rem', border: '1px solid var(--border)',
                        color: 'var(--text-secondary)', borderRadius: isTerminal ? '0' : '2px',
                        fontFamily: 'var(--mono-font)',
                      }}
                    >{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <a
                    href={project.liveLink}
                    target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, fontFamily: 'var(--mono-font)' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {isTerminal ? '$ open --live' : 'Live Demo ↗'}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, fontFamily: 'var(--mono-font)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {isTerminal ? '$ git clone' : 'GitHub ↗'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
