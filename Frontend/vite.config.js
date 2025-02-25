import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,  // Reduce memory usage by disabling minification
    chunkSizeWarningLimit: 1000,  // Prevent warnings from large chunks
    rollupOptions: {
      output: {
        manualChunks: undefined, // Let Vite handle chunk splitting
      },
    },
  },
})
