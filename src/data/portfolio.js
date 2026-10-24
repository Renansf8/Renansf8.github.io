// ─────────────────────────────────────────────────────────────
//  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.
//  Textos traduzíveis usam { pt: '...', en: '...' }.
//  Textos iguais nos dois idiomas podem ser uma string simples.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Renan Ferreira',
  role: {
    pt: 'Engenheiro de Software Sênior · Full-Stack & Mobile',
    en: 'Senior Software Engineer · Full-Stack & Mobile',
  },
  // Frase curta de impacto exibida no topo
  tagline: {
    pt: 'Escalo plataformas web e mobile de alto tráfego — da arquitetura à produção, com foco em performance, SEO, testes e IA.',
    en: 'I scale high-traffic web and mobile platforms — from architecture to production, with a focus on performance, SEO, testing and AI.',
  },
  location: { pt: 'Belém, Pará — Brasil', en: 'Belém, Pará — Brazil' },
  available: true,
  availabilityText: { pt: 'Aberto a novas oportunidades', en: 'Open to new opportunities' },
  email: 'renansferreira8@gmail.com',
  resumeUrl: '', // ex: './curriculo.pdf' (coloque o arquivo na pasta /public)
  photo: '', // ex: './foto.jpg' (coloque na pasta /public). Vazio = sem foto
  about: [
    {
      pt: 'Engenheiro de Software Sênior com mais de 5 anos escalando plataformas web e mobile de alto tráfego nos setores de e-commerce, logística e varejo. Atuo em toda a stack — frontend, backend e dados — liderando entregas de ponta a ponta.',
      en: 'Senior Software Engineer with 5+ years of experience scaling high-traffic web and mobile platforms across e-commerce, logistics and retail. I work across the full stack — frontend, backend and data — owning delivery end-to-end.',
    },
    {
      pt: 'Já trabalhei em um e-commerce com mais de 1 milhão de downloads, onde melhorei a performance web e mobile, otimizei o SEO com SSR e Core Web Vitals e levei a cobertura de testes mobile de 0% para 90% com arquitetura MVVM. No varejo farmacêutico, desenvolvi o fluxo nacional de cancelamento de pedidos (+40% em CSAT) e dashboards de rastreamento em tempo real.',
      en: 'I worked on a large-scale retail e-commerce platform with 1M+ downloads, where I drove web and mobile performance, boosted Lighthouse SEO through SSR and Core Web Vitals, and scaled mobile test coverage from 0% to 90% with an MVVM architecture. In healthcare retail, I engineered a nationwide order cancellation flow (+40% CSAT) and real-time order-tracking dashboards.',
    },
    {
      pt: 'A IA é uma parte crescente do meu trabalho: entreguei em produção recursos baseados em LLMs, combinando pipelines de RAG com Generative UI (Server-Driven UI) para renderizar interfaces e dashboards a partir de linguagem natural. No dia a dia, trabalho de forma AI-native com Cursor e Claude Code — sempre com foco em consistência arquitetural, testes e diffs limpos e revisáveis.',
      en: "AI is a growing part of my work: I've shipped LLM features to production, combining RAG pipelines with a Generative UI (Server-Driven UI) architecture to render dynamic interfaces and dashboards from natural language. Day to day, I work AI-native, directing agents like Cursor and Claude Code — always grounded in architectural correctness, test-driven validation and clean, reviewable diffs.",
    },
    {
      pt: 'Consigo me comunicar em inglês técnico e estou confortável com trabalho remoto, comunicação assíncrona, code reviews e times distribuídos.',
      en: "I work daily in English and I'm comfortable in remote, asynchronous setups, code reviews, system design discussions and distributed teams. Portuguese is my native language.",
    },
  ],
  // Números rápidos exibidos na seção "Sobre" (pode deixar vazio: [])
  stats: [
    { value: '5+', label: { pt: 'anos de experiência', en: 'years of experience' } },
    { value: '1M+', label: { pt: 'downloads no app de e-commerce', en: 'downloads on the e-commerce app' } },
    { value: '90%', label: { pt: 'de cobertura de testes no mobile', en: 'mobile test coverage' } },
    { value: '+40%', label: { pt: 'de CSAT no fluxo de cancelamento', en: 'CSAT on the cancellation flow' } },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/Renansf8' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/renanferreira8' },
  ],
}

// Datas no formato 'AAAA-MM'. end vazio = "Atual" / "Present"
export const experiences = [
  {
    company: 'Ferreira Costa',
    role: { pt: 'Engenheiro de Software · Full-Stack', en: 'Software Engineer · Full-Stack' },
    start: '2024-10',
    end: '',
    location: 'Recife, PE',
    url: 'https://www.ferreiracosta.com',
    summary: {
      pt: 'Uma das maiores redes de Home Center do Brasil. Atuo no ecossistema digital, desenvolvendo o e-commerce web e o aplicativo mobile.',
      en: "One of Brazil's largest Home Center retail chains. I work on the core digital team across the mobile app and the main e-commerce platform.",
    },
    highlights: [
      {
        pt: 'Desenvolvo e mantenho o app em React Native e o e-commerce em React e Next.js, com TypeScript, Redux e Styled-components.',
        en: 'Build and maintain the React Native app and the React/Next.js e-commerce platform with TypeScript, Redux and Styled-components.',
      },
      {
        pt: 'Estratégias de SSR e otimização de Core Web Vitals (LCP, CLS), com impacto direto no SEO (Lighthouse) e na experiência do usuário.',
        en: 'Spearheaded SSR and Core Web Vitals (LCP, CLS) optimizations, driving higher Lighthouse SEO scores and a better user experience.',
      },
      {
        pt: 'Pipeline de Generative UI alimentado por LLMs com validação via schemas: componentes e dashboards gerados sob demanda, com renderização progressiva e zero quebras de layout.',
        en: 'Built an LLM-powered Generative UI pipeline that renders dynamic interfaces and dashboards from natural language, with strict schema validation for full type safety and zero layout crashes.',
      },
      {
        pt: 'Integração com Topsort para leilão de produtos patrocinados em slots de PDP e busca, controlados via Firebase Remote Config, com rastreamento de impressões e cliques no Firebase Analytics e AppsFlyer.',
        en: 'Integrated Topsort for sponsored-product auctions across PDP and search slots, gated via Firebase Remote Config, with impression and click tracking unified across Firebase Analytics and AppsFlyer.',
      },
      {
        pt: 'Checkout em React Native com sincronização em tempo real via WebSocket, antifraude (ClearSale), PIX, cartão, crédito interno, gift card e frete multi-seller.',
        en: 'Built a React Native checkout with real-time WebSocket sync, anti-fraud (ClearSale), PIX, credit cards, store credit, gift cards and multi-seller shipping.',
      },
      {
        pt: 'Pipeline GitLab CI + Fastlane para iOS e Android com múltiplos ambientes, distribuição via Firebase App Distribution e semantic release automatizado.',
        en: 'Automated GitLab CI + Fastlane pipeline for iOS and Android across multiple environments, with Firebase App Distribution and automated semantic releases.',
      },
    ],
    stack: ['React Native', 'React', 'Next.js', 'TypeScript', 'Redux', 'Styled-components', 'Jest', 'Testing Library', 'MVVM', 'LLMs'],
  },
  {
    company: { pt: 'Accenture Brasil', en: 'Accenture Brazil' },
    role: { pt: 'Desenvolvedor Front-end', en: 'Front-end Developer' },
    start: '2023-01',
    end: '2024-09',
    location: 'Belém, PA',
    url: 'https://www.accenture.com/br-pt',
    summary: {
      pt: 'Líder global em consultoria de tecnologia. Atuei no desenvolvimento de produtos digitais escaláveis para um ecossistema de varejo farmacêutico.',
      en: 'A global leader in technology consulting. I built scalable digital platforms for an enterprise healthcare retail client.',
    },
    highlights: [
      {
        pt: 'Desenvolvi do zero e lancei uma plataforma web responsiva em React e Next.js, além de evoluir o app React Native.',
        en: 'Launched a responsive web platform from scratch with React and Next.js, alongside continuous improvements to the React Native app.',
      },
      {
        pt: 'Funcionalidade nacional de cancelamento de pedidos via web e app, com arquitetura sólida e testes rigorosos — resultado: +40% na satisfação dos clientes.',
        en: 'Key contributor to the nationwide order cancellation flow across web and mobile, backed by thorough testing of critical paths — driving a 40% increase in customer satisfaction.',
      },
      {
        pt: 'Dashboard corporativo de ciclo de pedidos, processando centenas de requisições diárias com atualização de estado eficiente.',
        en: 'Designed and built an internal order-tracking dashboard handling hundreds of real-time requests daily.',
      },
      {
        pt: 'Cobertura de testes elevada para 90% com a refatoração da arquitetura mobile para MVVM e testes unitários com Jest.',
        en: 'Scaled unit test coverage to 90% by leading the mobile refactor to MVVM and writing comprehensive Jest tests.',
      },
      {
        pt: 'Integração de Firebase Analytics e tracking de eventos para decisões de produto guiadas por dados.',
        en: 'Integrated Firebase Analytics to track conversion funnels, enabling data-driven product decisions.',
      },
    ],
    stack: ['React', 'Next.js', 'React Native', 'TypeScript', 'Redux', 'Jest', 'Firebase', 'Azure DevOps'],
  },
  {
    company: 'Alfred Delivery',
    role: { pt: 'Desenvolvedor Front-end React', en: 'React Developer' },
    start: '2021-05',
    end: '2022-12',
    location: 'Belém, PA',
    url: '',
    summary: {
      pt: 'Plataforma de delivery e logística urbana. Atuei no desenvolvimento da plataforma core de entregas.',
      en: 'An on-demand delivery and urban logistics platform. I worked on the core dispatch and monitoring web platform.',
    },
    highlights: [
      {
        pt: 'Desenvolvi e mantive a plataforma web de logística com React, TypeScript, Redux e Ant Design.',
        en: 'Built and maintained core features of the logistics web platform with React, TypeScript, Redux and Ant Design.',
      },
      {
        pt: 'Módulo de geolocalização e rastreamento de entregadores em tempo real com a API do Google Maps.',
        en: 'Implemented real-time driver tracking and interactive routing with the Google Maps API.',
      },
      {
        pt: 'Padronizei a documentação técnica, facilitando o onboarding de novos devs e o alinhamento com produto.',
        en: 'Authored clear technical documentation to streamline developer onboarding and align scope with product goals.',
      },
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Ant Design', 'Google Maps API'],
  },
]

export const projects = [
  {
    title: 'PkTracker Web',
    year: '2025',
    description: {
      pt: 'Plataforma completa para jogadores de poker acompanharem bankroll, torneios, agenda e performance, com dashboards e gráficos. Arquitetura MVVM no App Router e autenticação via cookie httpOnly com proxy server-side — o token nunca chega ao navegador.',
      en: 'A complete platform for poker players to track bankroll, tournaments, schedule and performance, with dashboards and charts. MVVM architecture on the App Router and httpOnly-cookie auth through a server-side proxy — the token never reaches the browser.',
    },
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    repo: 'https://github.com/Renansf8/pktracker-front',
    live: '',
    image: './projetos/pktracker-web.png',
    featured: true,
  },
  {
    title: 'PkTracker Mobile',
    year: '2026',
    description: {
      pt: 'Versão mobile do PkTracker com os mesmos dados da web: torneios, resumo mensal, banca e estatísticas. Navegação file-based com Expo Router e JWT guardado no SecureStore.',
      en: 'The mobile version of PkTracker, sharing data with the web app: tournaments, monthly summary, bankroll and stats. File-based navigation with Expo Router and JWT stored in SecureStore.',
    },
    tags: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
    repo: 'https://github.com/Renansf8/pktracker-mobile',
    live: '',
    image: '',
    // Prints verticais do app (até 3), exibidos em molduras de celular
    screens: [
      './projetos/pktracker-mobile-banca.webp',
      './projetos/pktracker-mobile-home.webp',
      './projetos/pktracker-mobile-torneios.webp',
    ],
    featured: false,
  },
  {
    title: 'PkTracker API',
    year: '2025',
    description: {
      pt: 'API REST que alimenta o ecossistema PkTracker: autenticação JWT, bankroll com transações atômicas, registro de torneios em lote, agendas e estatísticas agregadas. Documentada com Swagger.',
      en: 'The REST API powering the PkTracker ecosystem: JWT auth, bankroll with atomic transactions, bulk tournament logging, schedules and aggregated stats. Documented with Swagger.',
    },
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'TypeScript'],
    repo: 'https://github.com/Renansf8/pktracker-api',
    live: '',
    image: '',
    // Capa em estilo terminal (usada quando não há imagem)
    command: 'yarn start:dev',
    boot: 'Nest application started on :3000',
    endpoints: [
      ['POST', '/auth/signin'],
      ['GET', '/banks/me'],
      ['POST', '/banks/deposits'],
      ['GET', '/tournaments'],
      ['POST', '/tournaments/bulk'],
      ['POST', '/tournaments/apply-schedule'],
      ['PATCH', '/tournaments/:id'],
      ['DELETE', '/tournaments/:id'],
    ],
    featured: false,
  },
  {
    title: 'Brev.ly',
    year: '2026',
    description: {
      pt: 'Encurtador de URLs full-stack: crie links personalizados, acompanhe a contagem de acessos e exporte relatórios em CSV armazenados no Cloudflare R2.',
      en: 'A full-stack URL shortener: create custom links, track visit counts and export CSV reports stored on Cloudflare R2.',
    },
    tags: ['React', 'Fastify', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/Renansf8/brev-ly',
    live: '',
    image: './projetos/brev-ly.png',
    featured: false,
  },
]

export const stack = [
  { group: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Context API', 'Tailwind CSS', 'Styled-components'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'MVVM', 'Fastlane', 'Firebase'] },
  { group: { pt: 'Back-end & Dados', en: 'Back-end & Data' }, items: ['Node.js', 'NestJS', { pt: 'APIs RESTful', en: 'RESTful APIs' }, 'MySQL', 'Prisma'] },
  { group: { pt: 'IA', en: 'AI' }, items: ['OpenAI', 'RAG', 'Generative UI', 'Cursor', 'Claude Code'] },
  { group: { pt: 'Qualidade & Arquitetura', en: 'Quality & Architecture' }, items: ['Jest', 'Testing Library', 'Clean Architecture', 'SOLID', 'A/B Testing'] },
  { group: { pt: 'Ferramentas', en: 'Tools' }, items: ['Git', 'GitLab CI', 'Azure DevOps', 'Jira', 'Figma'] },
]
