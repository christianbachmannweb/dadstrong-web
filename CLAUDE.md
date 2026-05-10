# Dad Strong Web – Workspace Map

## Über das Projekt
dadstrong.app ist die Marketing- und Informationswebseite für die Dad Strong iOS-App.
Ziel: Väter 30–45 überzeugen, dass weniger mehr ist. Einfache, ehrliche Kraft-Dokumentation statt Influencer-Chaos.
Kein Backend, kein Login – statische Seite mit klarer Conversion-Struktur.

**Entwickler:** Christian Bachmann
**Domain:** dadstrong.app
**iOS-App:** /Users/christianbachmann/Development/projects/dad-strong-swift
**Sprache:** Deutsch (Kommunikation), Englisch (Code & Kommentare)

---

## Session-Ende Befehl
Wenn der User "Ende für heute", "Wir machen Schluss" oder ähnliches sagt →
`STATUS.md` im Projektstamm aktualisieren: was heute gemacht wurde, was offen ist, nächste Schritte.

---

## Tech Stack
- Astro 6 – Static Site Generator
- Tailwind CSS 4 (via @tailwindcss/vite) – Styling
- TypeScript – Type-Safety
- Keine Frameworks (kein React/Vue) – reines Astro + HTML
- Deploy: geplant über Hetzner / Cloudflare Pages (noch offen)

---

## Ordnerstruktur
```
dadstrong-web/
├── src/
│   ├── styles/
│   │   └── global.css          ← CSS Custom Properties + Tailwind @import
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── FeatureCard.astro
│   │   ├── TrainingSection.astro
│   │   ├── PhilosophySection.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro        ← Base Layout mit global.css import
│   └── pages/
│       └── index.astro
├── public/
│   ├── screenshots/            ← App Screenshots
│   └── favicon.ico
├── dadstrong-web-tokens.md     ← Design Tokens Referenz (kommt aus iOS-App)
├── CLAUDE.md
├── CONTEXT.md
└── STATUS.md
```

---

## Design Tokens (aus iOS-App übernommen)

### Farben
```css
--color-bg:           #000000;
--color-surface:      #1A1A1A;
--color-surface-high: #262626;
--color-text:         #FFFFFF;
--color-text-muted:   #808080;
--color-accent:       #D4FF00;   /* Gelbgrün – Kraft, Fortschritt */
--color-zone2:        #FF8C1A;   /* Orange – Zone 2 */
--color-sprint:       #F22626;   /* Rot – Sprint */
```

### Typografie
- Body: `Inter`, system-ui, sans-serif
- Display: `Inter` (oder `Bebas Neue` für Hero-Elemente)
- Label/Kategorie: 11px, bold, letter-spacing 0.15em, UPPERCASE
- Überschrift: 28–36px, weight 900
- Hero: 56px, weight 900

### Spacing & Radius
```
Spacing: 8 / 12 / 16 / 20 / 24 / 32 / 48px
Radius:  10px (Inputs) / 12px (Karten klein) / 14px (Karten normal) / 16px (Karten groß)
```

### Primary Button
```
bg: #D4FF00 | color: #000 | font: 15px, 900, tracking 1.5px, UPPERCASE
border-radius: 14px | padding: 18px vertikal | full width
```

---

## Routing
- `/` → Hauptseite (index.astro) – einzige Seite vorerst
- `/privacy` → Datenschutz (für App Store Pflicht)

---

## Copy-Stil
- Kurz. Direkt. Kein Bullshit.
- UPPERCASE Labels für Kategorien
- Zahlen sprechen lassen ("95 kg · 8 Wdh")
- Keine Adjektiv-Inflation
- Zielgruppe: Väter 30–45, beschäftigt, wollen Ergebnisse sehen

---

## Design-Prinzip
Klar, dunkel, fokussiert – wie ein Trainingsplan, nicht wie eine Wellness-App.
Gleiche visuelle Sprache wie die iOS-App: schwarz, #D4FF00 Akzent, starke Typografie.

---

## Astro-Konventionen
- Layouts: immer `Layout.astro` als Wrapper verwenden
- Komponenten: `PascalCase.astro`
- Styles: CSS Custom Properties in `global.css`, Tailwind-Klassen im Markup
- Keine inline `<style>` Tags in Pages – Komponenten-CSS in der jeweiligen `.astro`-Datei ok

---

## Arbeitsregeln
- Immer auf Deutsch kommunizieren
- Code-Kommentare auf Englisch
- Claude erklärt was er getan hat und warum
- Claude fragt bevor er neue Dateien erstellt
- Design Tokens aus `dadstrong-web-tokens.md` verwenden – nicht erfinden
- Keine neuen Farben oder Fonts einführen ohne Rückfrage
