import { profile } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function About() {
  return (
    <section id="sobre" className="section">
      <SectionHeader index={1} title="Sobre" />
      <div className="about-grid">
        {profile.photo && (
          <Reveal className="about-photo">
            <img src={profile.photo} alt={profile.name} />
          </Reveal>
        )}
        <div className="about-text">
          {profile.about.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80} className={i === 0 ? 'lead' : ''}>
              {p}
            </Reveal>
          ))}
        </div>
      </div>
      {profile.stats?.length > 0 && (
        <div className="stats">
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="stat">
              <span className="stat-v">{s.value}</span>
              <span className="stat-l">{s.label}</span>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
