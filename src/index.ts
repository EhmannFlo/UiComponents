// Exportiere alle Komponenten
export { default as FButton } from './components/atom/FButton.vue'
export { default as FInput } from './components/molecules/FInput.vue'
export { default as FTextarea } from './components/molecules/FTextarea.vue'

// Exportiere Utility-Funktionen
export { cn } from './utils'

// Optional: Plugin für Vue.use()
import type { App } from 'vue'
import FButton from './components/atom/FButton.vue'
import FInput from './components/molecules/FInput.vue'
import FTextarea from './components/molecules/FTextarea.vue'

export function install(app: App) {
  app.component('FButton', FButton)
  app.component('FInput', FInput)
  app.component('FTextarea', FTextarea)
  // Weitere Komponenten hier registrieren
}

// Default Export für Plugin
export default { install }

