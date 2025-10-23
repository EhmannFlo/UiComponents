// Exportiere alle Komponenten
export { default as Button } from './components/atom/Button.vue'

// Exportiere Utility-Funktionen
export { cn } from './utils'

// Optional: Plugin für Vue.use()
import type { App } from 'vue'
import Button from './components/atom/Button.vue'

export function install(app: App) {
  app.component('Button', Button)
  // Weitere Komponenten hier registrieren
}

// Default Export für Plugin
export default { install }

