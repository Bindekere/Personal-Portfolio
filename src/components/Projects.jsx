import React from 'react'
import quizApp from '../assets/quiz-app.png'
import ipTracker from '../assets/screenshot (1).png'
import adviceGenerator from '../assets/advice 2.png'
import movie from '../assets/image.png'
import unitConverter from '../assets/unit-converter.png'

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
  {
    title: 'Unit Converter',
    description: 'A real-time metric/imperial unit converter covering length, volume and mass. Type a value and all conversions update instantly with full input validation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: unitConverter,
    liveLink: 'https://mysimpleunitconverter.netlify.app/',
    githubLink: 'https://github.com/Bindekere/Unit-converter',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-pad" style={{ background: 'var(--bg-secondary)', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="section-label" style={{ marginBottom: '0.75rem' }}>What I've Built</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4rem', lineHeight: 1.2 }}>
          Selected <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ overflow: 'hidden', height: '200px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.25rem', flex: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {project.tech.map((t, j) => (
                    <span key={j} style={{
                      fontSize: '0.7rem', letterSpacing: '0.07em', textTransform: 'uppercase',
                      padding: '0.25rem 0.6rem', border: '1px solid var(--border)',
                      color: 'var(--text-secondary)', borderRadius: '2px',
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >Live Demo ↗</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600 }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >GitHub ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
