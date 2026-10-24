import { useEffect, useMemo, useRef, useState } from 'react'
import { SECTIONS, scrollToSection } from '../sections.js'
import { profile, projects } from '../data/portfolio.js'
import { useLang } from '../i18n.jsx'

export default function CommandPalette({ open, onClose, onToggleTheme }) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const inputRef = useRef(null)
  const { t, s, toggleLang } = useLang()
  const p = s.palette

  const commands = useMemo(() => {
    const list = [
      ...SECTIONS.map((id) => ({ group: p.navigate, label: s.sections[id], run: () => scrollToSection(id) })),
      ...projects.filter((pr) => pr.live || pr.repo).map((pr) => ({
        group: p.projects,
        label: pr.title,
        hint: pr.tags.join(' · '),
        run: () => window.open(pr.live || pr.repo, '_blank', 'noreferrer'),
      })),
      { group: p.actions, label: s.switchLang, hint: 'PT / EN', run: toggleLang },
      { group: p.actions, label: s.copyEmail, hint: profile.email, run: () => navigator.clipboard?.writeText(profile.email) },
      { group: p.actions, label: p.themeToggle, run: onToggleTheme },
      ...(profile.resumeUrl ? [{ group: p.actions, label: p.openResume, run: () => window.open(t(profile.resumeUrl), '_blank') }] : []),
      ...profile.socials.filter((so) => so.url).map((so) => ({
        group: p.social, label: so.label, hint: so.url.replace(/^https?:\/\//, ''), run: () => window.open(so.url, '_blank', 'noreferrer'),
      })),
    ]
    const q = query.trim().toLowerCase()
    return q ? list.filter((c) => `${c.label} ${c.hint || ''} ${c.group}`.toLowerCase().includes(q)) : list
  }, [query, onToggleTheme, toggleLang, s, p, t])

  useEffect(() => {
    if (open) {
      setQuery('')
      setIndex(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => setIndex(0), [query])

  if (!open) return null

  const execute = (c) => {
    onClose()
    setTimeout(c.run, 50)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIndex((i) => Math.min(i + 1, commands.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && commands[index]) {
      execute(commands[index])
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  let lastGroup = null
  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div className="palette" role="dialog" aria-modal="true" aria-label={p.dialog} onMouseDown={(e) => e.stopPropagation()}>
        <div className="palette-input">
          <span className="mono accent">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={p.placeholder}
            aria-label={p.search}
          />
          <kbd>esc</kbd>
        </div>
        <ul className="palette-list">
          {commands.length === 0 && <li className="palette-empty">{p.empty}</li>}
          {commands.map((c, i) => {
            const header = c.group !== lastGroup ? c.group : null
            lastGroup = c.group
            return (
              <li key={c.group + c.label}>
                {header && <div className="palette-group mono">{header}</div>}
                <button
                  className={`palette-item ${i === index ? 'active' : ''}`}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => execute(c)}
                >
                  <span>{c.label}</span>
                  {c.hint && <span className="palette-hint mono">{c.hint}</span>}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
