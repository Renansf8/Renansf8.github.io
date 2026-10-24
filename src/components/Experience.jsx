import { useState } from 'react'
import { experiences } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experiencia" className="section">
      <SectionHeader index={2} title="Experiência" aside={`${experiences.length} posições`} />
      <ol className="xp-list">
        {experiences.map((xp, i) => {
          const isOpen = open === i
          return (
            <Reveal as="li" key={xp.company + xp.start} delay={i * 60} className={`xp ${isOpen ? 'open' : ''}`}>
              <button
                className="xp-head"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="xp-period mono">
                  {xp.start} — {xp.end || <span className="accent">Atual</span>}
                </span>
                <span className="xp-main">
                  <span className="xp-company">{xp.company}</span>
                  <span className="xp-role">{xp.role}</span>
                </span>
                <span className="xp-toggle" aria-hidden="true" />
              </button>
              <div className="xp-body">
                <div className="xp-body-inner">
                  <div className="xp-content">
                    <p className="xp-summary">{xp.summary}</p>
                    {xp.highlights?.length > 0 && (
                      <ul className="xp-highlights">
                        {xp.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    )}
                    <div className="xp-footer">
                      <div className="tags">
                        {xp.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                      </div>
                      <span className="xp-extra mono">
                        {xp.location}
                        {xp.url && (
                          <>
                            {' · '}
                            <a href={xp.url} target="_blank" rel="noreferrer">site ↗</a>
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
