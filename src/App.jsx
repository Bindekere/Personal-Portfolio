import { useEffect } from 'react'
import { ThemeProvider, useTheme } from './ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'

function Inner() {
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Ethereal Atmospheric Background */}
      {theme === 'ethereal' && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px]"
            style={{ background: 'rgba(129, 140, 248, 0.1)' }}
          />
          <div 
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px]"
            style={{ background: 'rgba(52, 211, 153, 0.1)' }}
          />
        </div>
      )}
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Inner />
    </ThemeProvider>
  )
}
