import { profile, stack } from '../data/portfolio.js'
import { scrollToSection } from '../sections.js'
import { useLang } from '../i18n.jsx'

export default function Hero() {
  const { t, s } = useLang()
  const words = profile.name.split(' ')
  const marquee = stack.flatMap((g) => g.items.map(t))

  return (
    <section id="inicio" className="hero">
      <div className="hero-meta">
        <div className="meta-item load" style={{ '--d': '100ms' }}>
          <span className="meta-k">{s.basedIn}</span>
          <span className="meta-v">{t(profile.location)}</span>
        </div>
        <div className="meta-item load" style={{ '--d': '180ms' }}>
          <span className="meta-k">{s.status}</span>
          <span className="meta-v">
            <i className={`pulse ${profile.available ? '' : 'off'}`} />
            {t(profile.availabilityText)}
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
          <span className="mono accent">→</span> {t(profile.role)}
        </p>
        <p className="hero-tagline load" style={{ '--d': '750ms' }}>{t(profile.tagline)}</p>
        <div className="hero-cta load" style={{ '--d': '850ms' }}>
          <button className="link-arrow" onClick={() => scrollToSection('projetos')}>
            {s.viewProjects} <span>↓</span>
          </button>
          {profile.resumeUrl && (
            <a className="link-arrow muted" href={t(profile.resumeUrl)} target="_blank" rel="noreferrer">
              {s.resume} <span>↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="marquee load" style={{ '--d': '950ms' }} aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i}>
              {item} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
