import { useState } from 'react'
import { profile } from '../data/portfolio.js'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const { s } = useLang()
  const [before, em, after] = s.contactTitle
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {}
  }

  return (
    <section id="contato" className="section contact">
      <Reveal className="contact-kicker mono">05 — {s.sections.contato}</Reveal>
      <Reveal as="h2" className="contact-title" delay={80}>
        {before}<em>{em}</em>{after}
      </Reveal>
      <Reveal className="contact-actions" delay={160}>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <button className="chip" onClick={copy}>{copied ? s.copied : s.copyEmail}</button>
      </Reveal>
      <footer className="footer">
        <ul className="socials">
          {profile.socials.filter((so) => so.url).map((so) => (
            <li key={so.label}>
              <a href={so.url} target="_blank" rel="noreferrer">{so.label} ↗</a>
            </li>
          ))}
        </ul>
        <span className="mono muted">© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </section>
  )
}
