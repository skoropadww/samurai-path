import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/samurai-api': {
        target: 'https://social-network.samuraijs.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/samurai-api/, ''),
      },
    },
  },
})
