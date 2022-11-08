import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// конфиг для cypress
export default defineConfig({
  plugins: [react()]
})
