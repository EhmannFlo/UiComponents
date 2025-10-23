import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
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

