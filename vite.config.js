import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH é definido automaticamente pelo workflow do GitHub Pages.
// Repositório "usuario.github.io" -> "/" ; qualquer outro -> "/nome-do-repo/"
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
