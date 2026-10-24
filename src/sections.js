export const SECTIONS = ['inicio', 'sobre', 'experiencia', 'projetos', 'stack', 'contato']

export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
