import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    chunkSizeWarningLimit: 1000, // Prevent chunk warnings
  },
})
