import { SECTIONS, scrollToSection } from '../sections.js'
import { useActiveSection, useScrollProgress } from '../hooks.js'
import { profile } from '../data/portfolio.js'
import { useLang } from '../i18n.jsx'

const initials = profile.name.split(' ').map((p) => p[0]).slice(0, 2).join('')

export default function Nav({ theme, onToggleTheme, onOpenPalette }) {
  const active = useActiveSection(SECTIONS)
  const progress = useScrollProgress()
  const { lang, toggleLang, s } = useLang()
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

  return (
    <header className="nav">
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />
      <button className="nav-logo" onClick={() => scrollToSection('inicio')} aria-label={s.backToTop}>
        <span>{initials}</span>
        <i className="nav-dot" />
      </button>
      <nav className="nav-links" aria-label={s.sectionsNav}>
        {SECTIONS.slice(1).map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(id)
            }}
          >
            {s.sections[id]}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="kbd-btn" onClick={onOpenPalette} aria-label={s.openMenu}>
          <span className="kbd-label">{s.menu}</span>
          <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
          <kbd>K</kbd>
        </button>
        <button className="lang-btn" onClick={toggleLang} aria-label={s.switchLang} title={s.switchLang}>
          <span className={lang === 'pt' ? 'on' : ''}>PT</span>
          <span className={lang === 'en' ? 'on' : ''}>EN</span>
        </button>
        <button className="icon-btn" onClick={onToggleTheme} aria-label={s.toggleTheme}>
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" /></svg>
          )}
        </button>
      </div>
    </header>
  )
}
