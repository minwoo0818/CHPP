import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "localhost",
  //   port: 80,
  //   strictPort: true,
  //   proxy: {
  //     '/api':{
  //       target: 'http://localhost:8080',
  //       rewrite: (path) => path.replace(/^\/api/,""),
  server: {
    host: "0.0.0.0",
    port: 80,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://172.20.20.10:8080',
        rewrite: (path) => path.replace(/^\/api/, ""),
        changeOrigin: true
      }
    }
  }
})
