import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import { normalizePath } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('sl-') || tag.startsWith('swiper-')
        }
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(
            path.resolve(__dirname, './node_modules/@shoelace-style/shoelace/dist/assets')
          ),
          dest: ''
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
