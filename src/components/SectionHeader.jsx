import Reveal from './Reveal.jsx'

export default function SectionHeader({ index, title, aside }) {
  return (
    <Reveal className="section-header">
      <span className="section-index">{String(index).padStart(2, '0')}</span>
      <h2 className="section-title">{title}</h2>
      {aside && <span className="section-aside">{aside}</span>}
    </Reveal>
  )
}
