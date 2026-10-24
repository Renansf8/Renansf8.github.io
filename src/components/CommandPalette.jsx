import { useEffect, useMemo, useRef, useState } from 'react'
import { SECTIONS, scrollToSection } from '../sections.js'
import { profile, projects } from '../data/portfolio.js'

export default function CommandPalette({ open, onClose, onToggleTheme }) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const inputRef = useRef(null)

  const commands = useMemo(() => {
    const list = [
      ...SECTIONS.map((s) => ({ group: 'Navegar', label: s.label, run: () => scrollToSection(s.id) })),
      ...projects.filter((p) => p.live || p.repo).map((p) => ({
        group: 'Projetos',
        label: p.title,
        hint: p.tags.join(' · '),
        run: () => window.open(p.live || p.repo, '_blank', 'noreferrer'),
      })),
      { group: 'Ações', label: 'Copiar e-mail', hint: profile.email, run: () => navigator.clipboard?.writeText(profile.email) },
      { group: 'Ações', label: 'Alternar tema claro/escuro', run: onToggleTheme },
      ...(profile.resumeUrl ? [{ group: 'Ações', label: 'Abrir currículo', run: () => window.open(profile.resumeUrl, '_blank') }] : []),
      ...profile.socials.filter((s) => s.url).map((s) => ({
        group: 'Redes', label: s.label, hint: s.url.replace(/^https?:\/\//, ''), run: () => window.open(s.url, '_blank', 'noreferrer'),
      })),
    ]
    const q = query.trim().toLowerCase()
    return q ? list.filter((c) => `${c.label} ${c.hint || ''} ${c.group}`.toLowerCase().includes(q)) : list
  }, [query, onToggleTheme])

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
      <div className="palette" role="dialog" aria-modal="true" aria-label="Menu de comandos" onMouseDown={(e) => e.stopPropagation()}>
        <div className="palette-input">
          <span className="mono accent">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Para onde você quer ir?"
            aria-label="Buscar comando"
          />
          <kbd>esc</kbd>
        </div>
        <ul className="palette-list">
          {commands.length === 0 && <li className="palette-empty">Nada encontrado.</li>}
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
