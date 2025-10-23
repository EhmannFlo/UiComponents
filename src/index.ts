// Exportiere alle Komponenten
export { default as FButton } from './components/atom/FButton.vue'

// Exportiere Utility-Funktionen
export { cn } from './utils'

// Optional: Plugin für Vue.use()
import type { App } from 'vue'
import FButton from './components/atom/FButton.vue'

export function install(app: App) {
  app.component('FButton', FButton)
  // Weitere Komponenten hier registrieren
}

// Default Export für Plugin
export default { install }

