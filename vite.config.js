import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UiComponents',
      fileName: (format) => `ui-components.${format}.js`
    },
    rollupOptions: {
      // Externalisiere Vue und andere Dependencies
      external: ['vue', 'clsx', 'tailwind-merge'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          clsx: 'clsx',
          'tailwind-merge': 'twMerge'
        }
      }
    }
  }
})

