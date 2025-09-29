import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/static',
  plugins: [react()],
  build: {
    sourcemap: true, // 소스맵 생성 활성화
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost', // 백엔드 도커 서버
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
