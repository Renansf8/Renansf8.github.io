// ─────────────────────────────────────────────────────────────
//  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.
//  Troque os dados de exemplo pelos seus. Todo o site se adapta.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Renan Ferreira',
  role: 'Engenheiro de Software Sênior · Full-Stack & Mobile',
  // Frase curta de impacto exibida no topo
  tagline: 'Escalo plataformas web e mobile de alto tráfego — da arquitetura à produção, com foco em performance, SEO, testes e IA.',
  location: 'Belém, Pará — Brasil',
  timezone: 'America/Belem', // usado no relógio ao vivo
  available: true,
  availabilityText: 'Aberto a novas oportunidades',
  email: 'renansferreira8@gmail.com',
  resumeUrl: '', // ex: './curriculo.pdf' (coloque o arquivo na pasta /public)
  photo: '', // ex: './foto.jpg' (coloque na pasta /public). Vazio = sem foto
  about: [
    'Engenheiro de Software Sênior com mais de 5 anos escalando plataformas web e mobile de alto tráfego nos setores de e-commerce, logística e varejo. Atuo em toda a stack — frontend, backend e dados — liderando entregas de ponta a ponta.',
    'Já trabalhei em um e-commerce com mais de 1 milhão de downloads, onde melhorei a performance web e mobile, otimizei o SEO com SSR e Core Web Vitals e levei a cobertura de testes mobile de 0% para 90% com arquitetura MVVM. No varejo farmacêutico, desenvolvi o fluxo nacional de cancelamento de pedidos (+40% em CSAT) e dashboards de rastreamento em tempo real.',
    'A IA é uma parte crescente do meu trabalho: entreguei em produção recursos baseados em LLMs, combinando pipelines de RAG com Generative UI (Server-Driven UI) para renderizar interfaces e dashboards a partir de linguagem natural. No dia a dia, trabalho de forma AI-native com Cursor e Claude Code — sempre com foco em consistência arquitetural, testes e diffs limpos e revisáveis.',
    'Consigo me comunicar em inglês técnico e estou confortável com trabalho remoto, comunicação assíncrona, code reviews e times distribuídos.',
  ],
  // Números rápidos exibidos na seção "Sobre" (pode deixar vazio: [])
  stats: [
    { value: '5+', label: 'anos de experiência' },
    { value: '1M+', label: 'downloads no app de e-commerce' },
    { value: '90%', label: 'de cobertura de testes no mobile' },
    { value: '+40%', label: 'de CSAT no fluxo de cancelamento' },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/Renansf8' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/renanferreira8' },
  ],
}

export const experiences = [
  {
    company: 'Ferreira Costa',
    role: 'Engenheiro de Software · Full-Stack',
    start: 'Out 2024',
    end: '', // vazio = "Atual"
    location: 'Recife, PE',
    url: 'https://www.ferreiracosta.com',
    summary: 'Uma das maiores redes de Home Center do Brasil. Atuo no ecossistema digital, desenvolvendo o e-commerce web e o aplicativo mobile.',
    highlights: [
      'Desenvolvo e mantenho o app em React Native e o e-commerce em React e Next.js, com TypeScript, Redux e Styled-components.',
      'Estratégias de SSR e otimização de Core Web Vitals (LCP, CLS), com impacto direto no SEO (Lighthouse) e na experiência do usuário.',
      'Pipeline de Generative UI alimentado por LLMs com validação via schemas: componentes e dashboards gerados sob demanda, com renderização progressiva e zero quebras de layout.',
      'Integração com Topsort para leilão de produtos patrocinados em slots de PDP e busca, controlados via Firebase Remote Config, com rastreamento de impressões e cliques no Firebase Analytics e AppsFlyer.',
      'Checkout em React Native com sincronização em tempo real via WebSocket, antifraude (ClearSale), PIX, cartão, crédito interno, gift card e frete multi-seller.',
      'Pipeline GitLab CI + Fastlane para iOS e Android com múltiplos ambientes, distribuição via Firebase App Distribution e semantic release automatizado.',
    ],
    stack: ['React Native', 'React', 'Next.js', 'TypeScript', 'Redux', 'Styled-components', 'Jest', 'Testing Library', 'MVVM', 'LLMs'],
  },
  {
    company: 'Accenture Brasil',
    role: 'Desenvolvedor Front-end',
    start: 'Jan 2023',
    end: 'Set 2024',
    location: 'Belém, PA',
    url: 'https://www.accenture.com/br-pt',
    summary: 'Líder global em consultoria de tecnologia. Atuei no desenvolvimento de produtos digitais escaláveis para um ecossistema de varejo farmacêutico.',
    highlights: [
      'Desenvolvi do zero e lancei uma plataforma web responsiva em React e Next.js, além de evoluir o app React Native.',
      'Funcionalidade nacional de cancelamento de pedidos via web e app, com arquitetura sólida e testes rigorosos — resultado: +40% na satisfação dos clientes.',
      'Dashboard corporativo de ciclo de pedidos, processando centenas de requisições diárias com atualização de estado eficiente.',
      'Cobertura de testes elevada para 90% com a refatoração da arquitetura mobile para MVVM e testes unitários com Jest.',
      'Integração de Firebase Analytics e tracking de eventos para decisões de produto guiadas por dados.',
    ],
    stack: ['React', 'Next.js', 'React Native', 'TypeScript', 'Redux', 'Jest', 'Firebase', 'Azure DevOps'],
  },
  {
    company: 'Alfred Delivery',
    role: 'Desenvolvedor Front-end React',
    start: 'Mai 2021',
    end: 'Dez 2022',
    location: 'Belém, PA',
    url: '',
    summary: 'Plataforma de delivery e logística urbana. Atuei no desenvolvimento da plataforma core de entregas.',
    highlights: [
      'Desenvolvi e mantive a plataforma web de logística com React, TypeScript, Redux e Ant Design.',
      'Módulo de geolocalização e rastreamento de entregadores em tempo real com a API do Google Maps.',
      'Padronizei a documentação técnica, facilitando o onboarding de novos devs e o alinhamento com produto.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Ant Design', 'Google Maps API'],
  },
]

export const projects = [
  {
    title: 'PkTracker Web',
    year: '2025',
    description: 'Plataforma completa para jogadores de poker acompanharem bankroll, torneios, agenda e performance, com dashboards e gráficos. Arquitetura MVVM no App Router e autenticação via cookie httpOnly com proxy server-side — o token nunca chega ao navegador.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    repo: 'https://github.com/Renansf8/pktracker-front',
    live: '',
    image: './projetos/pktracker-web.png',
    featured: true,
  },
  {
    title: 'PkTracker Mobile',
    year: '2026',
    description: 'Versão mobile do PkTracker com os mesmos dados da web: torneios, resumo mensal, banca e estatísticas. Navegação file-based com Expo Router e JWT guardado no SecureStore.',
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
    description: 'API REST que alimenta o ecossistema PkTracker: autenticação JWT, bankroll com transações atômicas, registro de torneios em lote, agendas e estatísticas agregadas. Documentada com Swagger.',
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
    description: 'Encurtador de URLs full-stack: crie links personalizados, acompanhe a contagem de acessos e exporte relatórios em CSV armazenados no Cloudflare R2.',
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
  { group: 'Back-end & Dados', items: ['Node.js', 'NestJS', 'APIs RESTful', 'MySQL', 'Prisma'] },
  { group: 'IA', items: ['OpenAI', 'RAG', 'Generative UI', 'Cursor', 'Claude Code'] },
  { group: 'Qualidade & Arquitetura', items: ['Jest', 'Testing Library', 'Clean Architecture', 'SOLID', 'A/B Testing'] },
  { group: 'Ferramentas', items: ['Git', 'GitLab CI', 'Azure DevOps', 'Jira', 'Figma'] },
]
