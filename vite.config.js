import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/app-store-template/',
  plugins: [
    tailwindcss(),
  ],
})