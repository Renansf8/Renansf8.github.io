# Portfólio

Portfólio pessoal em React + Vite, com deploy automático no GitHub Pages.

## Editar o conteúdo

Todo o conteúdo fica em **`src/data/portfolio.js`**: perfil, experiências, projetos e stack.
O site é bilíngue (PT/EN): textos traduzíveis usam `{ pt: '...', en: '...' }`, e textos iguais nos dois idiomas podem ser uma string simples. Os textos da interface (botões, títulos) ficam em `src/i18n.jsx`.

Fotos, imagens de projetos e currículo (PDF) vão na pasta `public/` e são referenciados como `./arquivo.ext`.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub:
   - `seu-usuario.github.io` → o site fica em `https://seu-usuario.github.io`
   - qualquer outro nome (ex.: `portfolio`) → fica em `https://seu-usuario.github.io/portfolio/`
2. Envie o código:
   ```bash
   git init -b main
   git add .
   git commit -m "Primeira versão do portfólio"
   git remote add origin https://github.com/seu-usuario/NOME-DO-REPO.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Source: GitHub Actions**.

A cada `push` na `main`, o workflow em `.github/workflows/deploy.yml` faz o build e publica. O caminho base é ajustado automaticamente conforme o nome do repositório.

## Recursos

- Paleta de comandos (`⌘K` / `Ctrl+K`) para navegar, abrir projetos e copiar o e-mail
- Português e inglês (detecta o idioma do navegador e lembra a escolha)
- Tema claro/escuro (lembra a escolha do visitante)
- Filtro de projetos por tecnologia
- Experiências em acordeão
- Capas geradas automaticamente para projetos sem imagem
- Relógio local e status de disponibilidade
- Responsivo e respeita `prefers-reduced-motion`
