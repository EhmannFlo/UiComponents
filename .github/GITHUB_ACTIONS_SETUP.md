# GitHub Actions Setup für automatisches npm Publishing

## 🔑 NPM Token einrichten

### Schritt 1: NPM Access Token erstellen

1. Gehe zu [npmjs.com](https://www.npmjs.com/) und logge dich ein
2. Klicke auf dein Profilbild → **Access Tokens**
3. Klicke auf **Generate New Token** → **Classic Token**
4. Wähle **Automation** (für CI/CD)
5. Kopiere den generierten Token (wird nur einmal angezeigt!)

### Schritt 2: Token als GitHub Secret hinzufügen

1. Gehe zu deinem GitHub Repository: `https://github.com/EhmannFlo/UiComponents`
2. Gehe zu **Settings** → **Secrets and variables** → **Actions**
3. Klicke auf **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Füge deinen npm Access Token ein
6. Klicke auf **Add secret**

## 📦 Verfügbare Workflows

### 1. Automatisches Publishing (publish.yml)

**Wann wird es ausgelöst?**
- Bei jedem Push auf den `main` Branch
- Ignoriert Änderungen an README, GitHub Actions und Storybook

**Was macht es?**
1. Erhöht automatisch die Version (patch: 0.1.0 → 0.1.1)
2. Baut das npm Paket
3. Veröffentlicht auf npm
4. Erstellt einen Git Tag (z.B. `v0.1.1`)
5. Pushed den Tag zurück zu GitHub

**Verwendung:**
```bash
git add .
git commit -m "feat: neue Button-Variante hinzugefügt"
git push
# → Automatisch wird Version erhöht und auf npm veröffentlicht
```

### 2. Manuelles Publishing (publish-manual.yml)

**Wann wird es ausgelöst?**
- Manuell über GitHub UI
- Beim Pushen von Version-Tags (z.B. `v1.0.0`)

**Verwendung über GitHub UI:**
1. Gehe zu **Actions** Tab in deinem Repository
2. Wähle "Publish to npm (Manual)"
3. Klicke auf **Run workflow**
4. Wähle den Version Bump Type:
   - **patch**: 0.1.0 → 0.1.1 (Bugfixes)
   - **minor**: 0.1.0 → 0.2.0 (neue Features)
   - **major**: 0.1.0 → 1.0.0 (Breaking Changes)
5. Klicke auf **Run workflow**

**Verwendung über Git Tags:**
```bash
# Version manuell erhöhen
npm version minor -m "feat: neue Komponente hinzugefügt"

# Tag pushen (löst automatisches Publishing aus)
git push --follow-tags
```

## 🎯 Empfehlung

Ich empfehle, **nur eine** der beiden Workflows zu verwenden:

### Option A: Automatisch bei jedem Commit (publish.yml)
✅ Gut für schnelle Iterationen  
✅ Keine manuellen Schritte nötig  
❌ Jeder Commit auf main erstellt eine neue Version  

### Option B: Manuell kontrolliert (publish-manual.yml)
✅ Volle Kontrolle über Veröffentlichungen  
✅ Kann Version-Typ wählen (patch/minor/major)  
❌ Erfordert manuelle Auslösung  

**Um einen Workflow zu deaktivieren:**
Lösche einfach die entsprechende Datei oder benenne sie um (z.B. `publish.yml.disabled`)

## 🚫 Commits ohne Publishing

Wenn du `publish.yml` verwendest, aber mal NICHT veröffentlichen möchtest:

```bash
git commit -m "docs: README aktualisiert"
# README-Änderungen lösen kein Publishing aus

# ODER füge [skip ci] hinzu:
git commit -m "test: Tests hinzugefügt [skip ci]"
```

## 🔍 Logs überprüfen

Nach einem Push:
1. Gehe zu **Actions** Tab in deinem Repository
2. Klicke auf den letzten Workflow-Run
3. Sieh dir die Logs an, um zu prüfen ob alles geklappt hat

## 🐛 Troubleshooting

### Error: "npm publish failed"
- Prüfe ob `NPM_TOKEN` korrekt als Secret gesetzt ist
- Prüfe ob der Token noch gültig ist (auf npmjs.com)
- Prüfe ob die Version schon auf npm existiert

### Error: "git push failed"
- Stelle sicher, dass du NICHT auf `main` Branch Protection Rules hast, die den Push blockieren
- Wenn doch, erstelle einen Personal Access Token mit repo-Rechten

### Version wird nicht erhöht
- Prüfe ob der Commit `[skip ci]` enthält
- Prüfe ob nur README/Docs geändert wurden (diese werden ignoriert)

