import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
   build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        settings: resolve(import.meta.dirname, 'src/pages/settings.html'),
        game: resolve(import.meta.dirname, 'src/pages/game.html'),
      },
    },
  },
  base: "/Memory/"
});