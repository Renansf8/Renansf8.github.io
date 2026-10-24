import { stack } from '../data/portfolio.js'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Stack() {
  const { t, s } = useLang()
  return (
    <section id="stack" className="section">
      <SectionHeader index={4} title={s.sections.stack} aside={s.toolsIUse} />
      <div className="stack-grid">
        {stack.map((g, i) => (
          <Reveal key={i} delay={i * 70} className="stack-group">
            <h3 className="mono">{t(g.group)}</h3>
            <ul>
              {g.items.map((it) => <li key={t(it)}>{t(it)}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
