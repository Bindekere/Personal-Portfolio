import htmlLogo from '../assets/html-logo.png'
import githubLogo from '../assets/Github_logo.png'
import bootstrapLogo from '../assets/R (3).png'
import figmaLogo from '../assets/Figma.jpeg'
import reactLogo from '../assets/R (1).png'
import jsLogo from '../assets/javascript-logo-javascript-icon-transparent-free-png.webp'
import tailwindLogo from '../assets/tailwind2.jpeg'
import cssLogo from '../assets/R.png'

const groups = [
  {
    label: 'Core',
    techs: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    techs: [
      { name: 'React', logo: reactLogo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    label: 'Tools',
    techs: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
]

const TechStack = () => {
  return (
    <section id="tech" className="section-pad" style={{ background: 'var(--bg-primary)', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="section-label" style={{ marginBottom: '0.75rem' }}>My Toolkit</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4rem', lineHeight: 1.2 }}>
          Tech <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Stack</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {groups.map((group, gi) => (
            <div key={gi}>
              {/* Group label */}
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.25rem', fontWeight: 600, borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>
                {group.label}
              </p>

              {/* Tech cards */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {group.techs.map((tech, ti) => (
                  <div key={ti} className="card" style={{ padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', gap: '0.875rem', minWidth: '140px' }}>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                    />
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TechStack
