import { useState } from 'react'
import { experiences } from '../data/portfolio.js'
import { formatMonth, useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Experience() {
  const [open, setOpen] = useState(0)
  const { lang, t, s } = useLang()

  return (
    <section id="experiencia" className="section">
      <SectionHeader index={2} title={s.sections.experiencia} aside={s.positions(experiences.length)} />
      <ol className="xp-list">
        {experiences.map((xp, i) => {
          const isOpen = open === i
          return (
            <Reveal as="li" key={xp.start} delay={i * 60} className={`xp ${isOpen ? 'open' : ''}`}>
              <button
                className="xp-head"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="xp-period mono">
                  {formatMonth(xp.start, lang)} — {xp.end ? formatMonth(xp.end, lang) : <span className="accent">{s.present}</span>}
                </span>
                <span className="xp-main">
                  <span className="xp-company">{t(xp.company)}</span>
                  <span className="xp-role">{t(xp.role)}</span>
                </span>
                <span className="xp-toggle" aria-hidden="true" />
              </button>
              <div className="xp-body">
                <div className="xp-body-inner">
                  <div className="xp-content">
                    <p className="xp-summary">{t(xp.summary)}</p>
                    {xp.highlights?.length > 0 && (
                      <ul className="xp-highlights">
                        {xp.highlights.map((h, j) => <li key={j}>{t(h)}</li>)}
                      </ul>
                    )}
                    <div className="xp-footer">
                      <div className="tags">
                        {xp.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                      </div>
                      <span className="xp-extra mono">
                        {t(xp.location)}
                        {xp.url && (
                          <>
                            {' · '}
                            <a href={xp.url} target="_blank" rel="noreferrer">{s.website} ↗</a>
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
