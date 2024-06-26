import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'New Ventures Group',
        short_name: 'NV Group',
        lang: 'en-US',
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        theme_color: '#00BCB4',
        background_color: '#FD6F63',
        icons: [
          {
            src: '/icons/nvg-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/nvg-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
