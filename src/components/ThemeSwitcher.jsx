import { useTheme } from '../ThemeContext'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        padding: '4px',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <SwitchBtn
        active={theme === 'obsidian'}
        onClick={() => setTheme('obsidian')}
        icon="◆"
        label="Obsidian"
        activeColor="#c9a84c"
      />
      <SwitchBtn
        active={theme === 'terminal'}
        onClick={() => setTheme('terminal')}
        icon="⌮"
        label="Terminal"
        activeColor="#39d353"
      />
      <SwitchBtn
        active={theme === 'ethereal'}
        onClick={() => setTheme('ethereal')}
        icon="✧"
        label="Ethereal"
        activeColor="#818cf8"
      />
    </div>
  )
}

function SwitchBtn({ active, onClick, icon, label, activeColor }) {
  return (
    <button
      onClick={onClick}
      title={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        background: active ? activeColor : 'transparent',
        color: active ? '#0e0e0f' : 'rgba(255,255,255,0.45)',
        boxShadow: active ? `0 2px 12px ${activeColor}55` : 'none',
      }}
      onMouseEnter={e => {
        if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
      }}
      onMouseLeave={e => {
        if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
      }}
    >
      <span style={{ fontSize: '16px' }}>{icon}</span>
    </button>
  )
}
