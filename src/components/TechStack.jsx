const groups = [
  {
    label: 'Core',
    techs: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    techs: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    label: 'Tools',
    techs: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
    ],
  },
]

const TechStack = () => (
  <section id="tech" className="section-pad" style={{ background: 'var(--bg-primary)', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <p className="section-label" style={{ marginBottom: '0.75rem' }}>My Toolkit</p>
      <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4rem', lineHeight: 1.2 }}>
        Tech <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Stack</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {groups.map((group, gi) => (
          <div key={gi}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.25rem', fontWeight: 600, borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>
              {group.label}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {group.techs.map((tech, ti) => (
                <div key={ti} className="card" style={{ padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', gap: '0.875rem', minWidth: '140px' }}>
                  <img src={tech.icon} alt={tech.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack