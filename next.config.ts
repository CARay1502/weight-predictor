// next.config.ts
import { defineConfig } from 'next'

export default defineConfig({
  reactStrictMode: true,
  experimental: {
    appDir: true, // This enables the app directory and the App Router
  },
})
