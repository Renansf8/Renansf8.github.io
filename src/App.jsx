import { useCallback, useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Stack from './components/Stack.jsx'
import Contact from './components/Contact.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import { useTheme } from './hooks.js'
import { profile } from './data/portfolio.js'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const closePalette = useCallback(() => setPaletteOpen(false), [])

  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav theme={theme} onToggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <CommandPalette open={paletteOpen} onClose={closePalette} onToggleTheme={toggleTheme} />
    </>
  )
}
