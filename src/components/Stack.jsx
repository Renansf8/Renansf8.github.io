import { stack } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Stack() {
  return (
    <section id="stack" className="section">
      <SectionHeader index={4} title="Stack" aside="ferramentas que uso" />
      <div className="stack-grid">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={i * 70} className="stack-group">
            <h3 className="mono">{g.group}</h3>
            <ul>
              {g.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
