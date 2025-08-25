import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Kuber-Web/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // 👈 allow connections from LAN (your phone)
    port: 5173,      // you can change this if needed
    allowedHosts: [
      'dell.loca.lt',
      '192.168.137.1', // your laptop IP
    ],
  },
})
