import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export const ui = {
  pt: {
    sections: { inicio: 'Início', sobre: 'Sobre', experiencia: 'Experiência', projetos: 'Projetos', stack: 'Stack', contato: 'Contato' },
    menu: 'Menu',
    openMenu: 'Abrir menu de comandos',
    toggleTheme: 'Alternar tema',
    backToTop: 'Voltar ao início',
    sectionsNav: 'Seções',
    switchLang: 'Switch to English',
    basedIn: 'Baseado em',
    localTime: 'Hora local',
    status: 'Status',
    viewProjects: 'Ver projetos',
    resume: 'Currículo',
    positions: (n) => `${n} posições`,
    present: 'Atual',
    website: 'site',
    all: 'Todos',
    count: (a, b) => `${a} de ${b}`,
    filterBy: 'Filtrar por tecnologia',
    featured: 'Destaque',
    code: 'Código',
    live: 'Online',
    toolsIUse: 'ferramentas que uso',
    contactTitle: ['Vamos construir ', 'algo juntos', '?'],
    copyEmail: 'Copiar e-mail',
    copied: 'Copiado ✓',
    palette: {
      placeholder: 'Para onde você quer ir?',
      search: 'Buscar comando',
      empty: 'Nada encontrado.',
      navigate: 'Navegar',
      projects: 'Projetos',
      actions: 'Ações',
      social: 'Redes',
      themeToggle: 'Alternar tema claro/escuro',
      openResume: 'Abrir currículo',
      dialog: 'Menu de comandos',
    },
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    locale: 'pt-BR',
  },
  en: {
    sections: { inicio: 'Home', sobre: 'About', experiencia: 'Experience', projetos: 'Projects', stack: 'Stack', contato: 'Contact' },
    menu: 'Menu',
    openMenu: 'Open command menu',
    toggleTheme: 'Toggle theme',
    backToTop: 'Back to top',
    sectionsNav: 'Sections',
    switchLang: 'Mudar para português',
    basedIn: 'Based in',
    localTime: 'Local time',
    status: 'Status',
    viewProjects: 'View projects',
    resume: 'Résumé',
    positions: (n) => `${n} positions`,
    present: 'Present',
    website: 'website',
    all: 'All',
    count: (a, b) => `${a} of ${b}`,
    filterBy: 'Filter by technology',
    featured: 'Featured',
    code: 'Code',
    live: 'Live',
    toolsIUse: 'tools I use',
    contactTitle: ["Let's build ", 'something together', '?'],
    copyEmail: 'Copy email',
    copied: 'Copied ✓',
    palette: {
      placeholder: 'Where do you want to go?',
      search: 'Search command',
      empty: 'Nothing found.',
      navigate: 'Navigate',
      projects: 'Projects',
      actions: 'Actions',
      social: 'Social',
      themeToggle: 'Toggle light/dark theme',
      openResume: 'Open résumé',
      dialog: 'Command menu',
    },
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    locale: 'en-US',
  },
}

const LangContext = createContext(null)

function initialLang() {
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'pt' || stored === 'en') return stored
  } catch (e) {}
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem('lang', lang)
    } catch (e) {}
  }, [lang])

  const toggleLang = useCallback(() => setLang((l) => (l === 'pt' ? 'en' : 'pt')), [])
  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang, toggleLang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// t() resolve textos { pt, en }; strings simples passam direto
export function useLang() {
  const ctx = useContext(LangContext)
  const t = useCallback(
    (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[ctx.lang] ?? v.pt : v),
    [ctx.lang],
  )
  return { ...ctx, t, s: ui[ctx.lang] }
}

// '2024-10' -> 'Out 2024' / 'Oct 2024'
export function formatMonth(value, lang) {
  const [year, month] = String(value).split('-')
  if (!month) return year
  return `${ui[lang].months[Number(month) - 1]} ${year}`
}
