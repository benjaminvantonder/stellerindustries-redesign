import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [
    react(),
    sitemap({
      hostname: 'https://stellerindustries.co.za',
      outDir: 'dist',
      dynamicRoutes: ['/', '/about', '/services', '/work', '/testimonials', '/contact'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('react-router')) {
            return 'react'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'motion'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
        },
      },
    },
  },
})
