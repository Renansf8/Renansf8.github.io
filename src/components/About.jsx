import { profile } from '../data/portfolio.js'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function About() {
  const { t, s } = useLang()
  return (
    <section id="sobre" className="section">
      <SectionHeader index={1} title={s.sections.sobre} />
      <div className="about-grid">
        {profile.photo && (
          <Reveal className="about-photo">
            <img src={profile.photo} alt={profile.name} />
          </Reveal>
        )}
        <div className="about-text">
          {profile.about.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80} className={i === 0 ? 'lead' : ''}>
              {t(p)}
            </Reveal>
          ))}
        </div>
      </div>
      {profile.stats?.length > 0 && (
        <div className="stats">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 90} className="stat">
              <span className="stat-v">{stat.value}</span>
              <span className="stat-l">{t(stat.label)}</span>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
