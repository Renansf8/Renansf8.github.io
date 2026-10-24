import { profile, stack } from '../data/portfolio.js'
import { useClock } from '../hooks.js'
import { scrollToSection } from '../sections.js'

export default function Hero() {
  const time = useClock(profile.timezone)
  const words = profile.name.split(' ')
  const marquee = stack.flatMap((g) => g.items)

  return (
    <section id="inicio" className="hero">
      <div className="hero-meta">
        <div className="meta-item load" style={{ '--d': '100ms' }}>
          <span className="meta-k">Baseado em</span>
          <span className="meta-v">{profile.location}</span>
        </div>
        <div className="meta-item load" style={{ '--d': '180ms' }}>
          <span className="meta-k">Hora local</span>
          <span className="meta-v mono">{time}</span>
        </div>
        <div className="meta-item load" style={{ '--d': '260ms' }}>
          <span className="meta-k">Status</span>
          <span className="meta-v">
            <i className={`pulse ${profile.available ? '' : 'off'}`} />
            {profile.availabilityText}
          </span>
        </div>
      </div>

      <h1 className="hero-name" aria-label={profile.name}>
        {words.map((w, i) => (
          <span className="line" key={i}>
            <span className="line-inner" style={{ '--d': `${300 + i * 120}ms` }}>
              {i === words.length - 1 ? <em>{w}</em> : w}
              {i === words.length - 1 && <span className="hero-period">.</span>}
            </span>
          </span>
        ))}
      </h1>

      <div className="hero-bottom">
        <p className="hero-role load" style={{ '--d': '650ms' }}>
          <span className="mono accent">→</span> {profile.role}
        </p>
        <p className="hero-tagline load" style={{ '--d': '750ms' }}>{profile.tagline}</p>
        <div className="hero-cta load" style={{ '--d': '850ms' }}>
          <button className="link-arrow" onClick={() => scrollToSection('projetos')}>
            Ver projetos <span>↓</span>
          </button>
          {profile.resumeUrl && (
            <a className="link-arrow muted" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Currículo <span>↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="marquee load" style={{ '--d': '950ms' }} aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i}>
              {t} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
