import { useState } from 'react'
import { profile } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {}
  }

  return (
    <section id="contato" className="section contact">
      <Reveal className="contact-kicker mono">05 — Contato</Reveal>
      <Reveal as="h2" className="contact-title" delay={80}>
        Vamos construir <em>algo juntos</em>?
      </Reveal>
      <Reveal className="contact-actions" delay={160}>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <button className="chip" onClick={copy}>{copied ? 'Copiado ✓' : 'Copiar e-mail'}</button>
      </Reveal>
      <footer className="footer">
        <ul className="socials">
          {profile.socials.filter((s) => s.url).map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>
            </li>
          ))}
        </ul>
        <span className="mono muted">© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </section>
  )
}
