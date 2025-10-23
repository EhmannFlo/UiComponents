# flxuicomponents

Vue 3 UI Component Library mit Tailwind CSS

## Installation in deinem Nuxt-Projekt

```bash
npm install flxuicomponents
```

## Verwendung in Nuxt

### Schritt 1: Tailwind CSS installieren (falls noch nicht vorhanden)

```bash
npm install -D @nuxtjs/tailwindcss
```

Füge in deiner `nuxt.config.ts` hinzu:
```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### Schritt 2: Komponenten verwenden

#### Methode A: Einzelne Komponenten importieren (empfohlen)

In deinen Vue-Komponenten oder Pages:

```vue
<script setup>
import { FButton } from 'flxuicomponents'
</script>

<template>
  <div>
    <FButton variant="default">Click me</FButton>
    <FButton variant="destructive" size="sm">Delete</FButton>
  </div>
</template>
```

#### Methode B: Als globales Plugin (alle Komponenten)

Erstelle eine Datei `plugins/ui-components.ts` in deinem Nuxt-Projekt:

```typescript
import UiComponents from 'flxuicomponents'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(UiComponents)
})
```

Dann kannst du direkt `<FButton>` ohne Import verwenden:

```vue
<template>
  <div>
    <FButton variant="default">Click me</FButton>
  </div>
</template>
```

## Verfügbare Komponenten

### FButton

```vue
<FButton variant="default" size="default">Default Button</FButton>
<FButton variant="destructive" size="sm">Small Destructive</FButton>
<FButton variant="outline" size="lg">Large Outline</FButton>
<FButton variant="ghost">Ghost Button</FButton>
<FButton variant="link">Link Button</FButton>
```

**Props:**
- `variant`: `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- `size`: `'default' | 'sm' | 'lg' | 'icon'`

## 🎨 Tailwind CSS Konfiguration

Die Komponenten nutzen folgende Tailwind-Farben:
- `slate` (für Standard-UI-Elemente)
- `red` (für destructive Aktionen)

Stelle sicher, dass diese in deiner Tailwind-Konfiguration verfügbar sind (Standard in Tailwind v3+).

## 📦 Quick Start Beispiel

```vue
<script setup>
import { FButton } from 'flxuicomponents'
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-2xl font-bold">Meine App</h1>
    
    <div class="flex gap-2">
      <FButton variant="default">Standard</FButton>
      <FButton variant="destructive">Löschen</FButton>
      <FButton variant="outline">Outline</FButton>
      <FButton variant="ghost">Ghost</FButton>
      <FButton variant="link">Link</FButton>
    </div>
    
    <div class="flex gap-2">
      <FButton size="sm">Klein</FButton>
      <FButton size="default">Normal</FButton>
      <FButton size="lg">Groß</FButton>
    </div>
  </div>
</template>
```

## 🚀 Development (für Contributors)

```bash
# Dependencies installieren
npm install

# Storybook starten (für Komponenten-Entwicklung)
npm run storybook

# Build erstellen
npm run build

# Package lokal testen
npm link
# In deinem Test-Projekt:
npm link flxuicomponents
```

## 📝 Publishing (automatisch via GitHub Actions)

Das Paket wird automatisch auf npm veröffentlicht, wenn auf den `main` Branch gepusht wird.

**Manuelle Veröffentlichung:**
```bash
# Version erhöhen
npm version patch  # 0.1.1 → 0.1.2 (Bugfixes)
npm version minor  # 0.1.1 → 0.2.0 (neue Features)
npm version major  # 0.1.1 → 1.0.0 (Breaking Changes)

# Automatisch veröffentlichen via GitHub Actions
git push --follow-tags
```

## 📄 License

MIT

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/flxuicomponents)
- [GitHub Repository](https://github.com/EhmannFlo/UiComponents)
- [Storybook Documentation](https://github.com/EhmannFlo/UiComponents)

