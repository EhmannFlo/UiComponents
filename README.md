# UI Components

Vue 3 UI Component Library mit Tailwind CSS

## Installation

### Lokale Installation (während der Entwicklung)

```bash
# Im UiComponents-Projekt
npm run build

# Im Nuxt-Projekt
npm install /pfad/zu/UiComponents
```

### npm Registry Installation

Wenn du das Paket auf npm veröffentlicht hast:

```bash
npm install uicomponents-fe
```

## Verwendung in Nuxt

### 1. Als Plugin registrieren

Erstelle eine Datei `plugins/ui-components.js` in deinem Nuxt-Projekt:

```javascript
import UiComponents from 'uicomponents-fe'
import 'uicomponents-fe/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(UiComponents)
})
```

### 2. Einzelne Komponenten importieren

```vue
<script setup>
import { Button } from 'uicomponents-fe'
import 'uicomponents-fe/style.css'
</script>

<template>
  <Button variant="default">Click me</Button>
</template>
```

## Verfügbare Komponenten

### Button

```vue
<Button variant="default" size="default">Default Button</Button>
<Button variant="destructive" size="sm">Small Destructive</Button>
<Button variant="outline" size="lg">Large Outline</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="link">Link Button</Button>
```

**Props:**
- `variant`: `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- `size`: `'default' | 'sm' | 'lg' | 'icon'`

## Tailwind CSS Konfiguration

Da diese Komponenten Tailwind CSS verwenden, musst du sicherstellen, dass dein Nuxt-Projekt ebenfalls Tailwind CSS installiert hat. Die Komponenten nutzen folgende Tailwind-Farben:
- slate
- red

## Development

```bash
# Storybook starten
npm run storybook

# Build erstellen
npm run build
```

## Publishing auf npm

1. Bei npm anmelden:
```bash
npm login
```

2. Paket veröffentlichen:
```bash
npm publish --access public
```

3. Updates veröffentlichen:
```bash
# Version erhöhen
npm version patch  # oder minor/major
npm publish
```

