import { useMemo, useState } from 'react'
import { projects } from '../data/portfolio.js'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

function hash(str) {
  let h = 0
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) | 0
  return Math.abs(h)
}

// Capa gerada automaticamente quando o projeto não tem imagem
function Cover({ title }) {
  const h = hash(title)
  const angle = h % 180
  const shape = h % 3
  return (
    <div className="cover-gen" style={{ '--a': `${angle}deg` }}>
      <div className={`cover-shape s${shape}`} />
      <span className="cover-initial">{title.split(' ').at(-1)[0]}</span>
    </div>
  )
}

// Capa em estilo terminal para projetos sem interface (APIs, CLIs...)
function TerminalCover({ project }) {
  const name = project.repo ? project.repo.split('/').at(-1) : project.title.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="cover-term" aria-hidden="true">
      <div className="term-bar">
        <i /><i /><i />
        <span>~/{name}</span>
      </div>
      <div className="term-body">
        <p className="term-line" style={{ '--i': 0 }}>
          <span className="accent">›</span> {project.command || 'npm run dev'}
        </p>
        {project.boot && (
          <p className="term-line term-ok" style={{ '--i': 1 }}>✓ {project.boot}</p>
        )}
        {project.endpoints.map(([method, path], i) => (
          <p className="term-line" key={method + path} style={{ '--i': i + 2 }}>
            <span className={`term-method m-${method.toLowerCase()}`}>{method}</span>
            <span>{path}</span>
          </p>
        ))}
        <p className="term-line" style={{ '--i': project.endpoints.length + 2 }}>
          <span className="term-cursor" />
        </p>
      </div>
    </div>
  )
}

// Capa com prints verticais (apps mobile) em molduras de celular
function PhonesCover({ screens }) {
  return (
    <div className="cover-phones" aria-hidden="true">
      {screens.slice(0, 3).map((src) => (
        <div className="phone" key={src}>
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  )
}

function ProjectCover({ project }) {
  if (project.image) return <img src={project.image} alt="" loading="lazy" />
  if (project.screens?.length) return <PhonesCover screens={project.screens} />
  if (project.endpoints?.length) return <TerminalCover project={project} />
  return <Cover title={project.title} />
}

const ALL = '*'

export default function Projects() {
  const { t, s } = useLang()
  const tags = useMemo(() => [ALL, ...new Set(projects.flatMap((p) => p.tags))], [])
  const [filter, setFilter] = useState(ALL)
  const list = filter === ALL ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projetos" className="section">
      <SectionHeader index={3} title={s.sections.projetos} aside={s.count(list.length, projects.length)} />
      <Reveal className="filters" role="tablist" aria-label={s.filterBy}>
        {tags.map((tag) => (
          <button
            key={tag}
            role="tab"
            aria-selected={filter === tag}
            className={`chip ${filter === tag ? 'active' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag === ALL ? s.all : tag}
          </button>
        ))}
      </Reveal>
      <div className="projects-grid">
        {list.map((p, i) => {
          const href = p.live || p.repo
          return (
            <Reveal
              as="article"
              key={p.title}
              delay={(i % 2) * 90}
              className={`project ${p.featured && filter === ALL ? 'featured' : ''}`}
            >
              <a className="project-cover" href={href || undefined} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
                <ProjectCover project={p} />
                {p.featured && <span className="badge mono">{s.featured}</span>}
              </a>
              <div className="project-info">
                <div className="project-top">
                  <h3>
                    {href ? <a href={href} target="_blank" rel="noreferrer">{p.title}</a> : p.title}
                  </h3>
                  <span className="mono muted">{p.year}</span>
                </div>
                <p>{t(p.description)}</p>
                <div className="project-bottom">
                  <div className="tags">
                    {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links mono">
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">{s.code} ↗</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer">{s.live} ↗</a>}
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
