import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import eslint from "@rollup/plugin-eslint"
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import svg from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{
      ...eslint({
        exclude: [/virtual:/]
      }),
      enforce: 'pre',
    },
    svg(),
    vue(),
    VueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
