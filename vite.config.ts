import path from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  server: {
    host: true
  },

  resolve: {
    alias: [
      { find: /^src/, replacement: path.resolve(__dirname, 'src') }
    ]
  }
})