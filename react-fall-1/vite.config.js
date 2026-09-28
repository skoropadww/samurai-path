import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // API samuraijs разрешает CORS для :3000 и :4200 (не для :5173).
    // :4200 — чтобы cookies логина с сайта работали с withCredentials.
    port: 4200,
  },
})
