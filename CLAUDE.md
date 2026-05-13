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
- Deploy: geplant über Cloudflare Pages (noch nicht aufgesetzt)

---

## Ordnerstruktur (aktueller Stand)
```
dadstrong-web/
├── src/
│   ├── styles/
│   │   └── global.css          ← CSS Custom Properties + Tailwind @import
│   ├── layouts/
│   │   └── Layout.astro        ← Base Layout (lang="de", Google Fonts, meta)
│   └── pages/
│       ├── index.astro         ← GESAMTE Website: HTML + CSS + JS in einer Datei
│       └── privacy.astro       ← Datenschutz + Impressum (/privacy)
├── public/
│   ├── fonts/
│   │   └── BebasNeue-Regular.ttf   ← Self-hosted (Display-Font)
│   ├── screenshots/
│   │   └── dadstrong-app-home-screen.png
│   ├── favicon.ico
│   └── favicon.svg
├── CLAUDE.md
├── CONTEXT.md
├── STATUS.md
└── dadstrong-web-tokens.md     ← Design Tokens Referenz
```

**Wichtig:** Es gibt noch kein `src/components/` Verzeichnis. Alles steckt in `index.astro`.
Komponenten erst auslagern wenn die Seite inhaltlich fertig ist.

---

## Design Tokens (aktuelle Werte in global.css)

### Farben
```css
--color-bg:           #000000;
--color-surface:      #1a1a1a;
--color-surface-high: #262626;
--color-text:         #ffffff;
--color-muted:        #aaaaaa;   /* angehoben von #808080 */
--color-accent:       #d4ff00;   /* Gelbgrün – Kraft, Fortschritt */
--color-zone2:        #ff8c1a;   /* Orange – Zone 2 */
--color-sprint:       #f22626;   /* Rot – Sprint */
```

### Grautöne im CSS (index.astro)
Skala von hell → dunkel:
- `#bbb` – pain cards text (hellster Fließtext)
- `#aaaaaa` – Fließtext, section leads, feature bodies
- `#888` – sekundäre Labels, smaller text
- `#777` – eyebrows, kleinste Labels

### Typografie
- **Display:** `Bebas Neue` – self-hosted, `public/fonts/BebasNeue-Regular.ttf`
  → Hero-Headline, Sektionsüberschriften, Zahlen-Akzente
- **Body:** `Barlow` – Google Fonts (400/600/700)
  → Fließtext, Karten-Copy
- **Mono:** `DM Mono` – Google Fonts (400/500)
  → Gewichte, Wiederholungen, Zahlen in Mocks

### Primary Button
```
bg: #d4ff00 | color: #000 | font: 15px, 900, tracking 1.5px, UPPERCASE
border-radius: 14px | padding: 18px vertikal | full width
```

---

## Aktuelle Seitenstruktur (index.astro)

1. **Fixed Nav** – blur backdrop, `DAD STRONG` Logo, Download-CTA
2. **Hero** – animierte Progressionsbalken im Hintergrund (CSS @keyframes barRise), Bebas Neue Headline, #D4FF00 Tagline
3. **Kennst du das?** – 8 Pain-Point-Karten, 3-col Grid
4. **Philosophie** – 2×2 Karten links, CSS-only iPhone 17 Mockup rechts (mit echtem Screenshot)
5. **Die Geschichte** – persönliche Story von Christian, Pull-Quote
6. **Der Plan** – Training A + B mit Übungserklärungen, "Warum nicht veränderbar" Callout, interaktive Progressionsbar
7. **Die App** – Features-Grid (3 cols, siehe unten)
8. **FAQ** – `<details>/<summary>` Accordion, kein JavaScript
9. **CTA** – Zitat + App Store Button
10. **Footer** – Links zu Privacy, Impressum

### Features-Grid Layout (3-spaltig)
```
Row 1: [Workout-Tracking, 1col]  [Streaks, span 2]
Row 2: [Körper-Doku, span 2]     [Zone 2 & Sprint, 1col]
Row 3: [Planbar wie ein Meeting, span 2]  [Home Screen Widget, 1col]
Row 4: [Papa-CTA, span 3 – full width]
```
CSS-Klassen: `.feature--accent` (span 2), `.feature--body` (span 2), `.feature--structured` (span 2), `.feature--papa` (span 3)

---

## Trainingsplan-Details (aus iOS-App-Code)

### Übungen & Sets
**Training A** (5 Übungen, je 2 Arbeitssätze):
- Kniebeuge: 4 Warmup-Steps (Stange, 30%, 50%, 70%)
- Bankdrücken: 3 Warmup-Steps (Stange, 50%, 70%)
- Rudern: 2 Warmup-Steps (Stange, 50%)
- BSS: 1 Warmup-Step (Körpergewicht), bilateral, 60 sec Pause zwischen links/rechts
- Farmer Walk: kein Warmup, timed (60 sec/Satz), bilateral

**Training B** (4 Übungen, je 2 Arbeitssätze):
- Kreuzheben: 4 Warmup-Steps (Stange, 30%, 50%, 80%)
- OHP: 2 Warmup-Steps (Stange, 50%)
- Klimmzüge: 1 Warmup-Step (Hammer Curls 10 Wdh)
- Frontkniebeuge: 2 Warmup-Steps (50%, 70%)

### Pausenzeiten (aus WorkoutSessionState.swift)
- Zwischen Satz 1 → 2: **3 min** (180 sec)
- Nach letztem Satz einer Übung: **1 min** (60 sec) + **2 min** Übergang (120 sec)
- BSS bilateral (zwischen links/rechts): **1 min** (60 sec)

### Trainingsdauer (reale Erfahrung)
- Training A: **~60 Minuten**
- Training B: **~45 Minuten**

### Progression
- Threshold: 8 Wdh pro Satz (meiste Übungen); 8 Wdh BSS/Klimmzüge
- Rep-Range: 4–8 (meiste Übungen), 6–8 (BSS, Klimmzüge)
- Nach Erreichen des Threshold → App schlägt Gewichtserhöhung vor

### Streak-System
3 unabhängige Wochenstreaks:
1. **Kraft** – 2× Training A oder B pro Woche
2. **Ausdauer** – 100 Min Zone 2 pro Woche
3. **Sprint** – 1× Sprint-Session pro Woche

**Superstreak** = alle 3 in einer Woche erreicht.
**Wichtig:** Streaks sind unabhängig – einen zu verpassen löscht die anderen nicht.
Streaks sind Motivationsstütze, nicht Kernelement.

---

## Routing
- `/` → Hauptseite (index.astro)
- `/privacy` → Datenschutz + Impressum (privacy.astro) – ✅ gebaut

---

## Copy-Stil
- Kurz. Direkt. Kein Bullshit.
- UPPERCASE Labels für Kategorien
- Zahlen sprechen lassen: "2 Arbeitssätze. 3 Min Pause. Fertig."
- Keine Adjektiv-Inflation
- Zielgruppe: Väter 30–45, beschäftigt, wollen stark sein und gut aussehen
- Kein KI-Ton: Sätze wie "Genau das macht es glaubwürdig." vermeiden
- **Kein Streak-Druck als Pain Point** — App hat selbst Streaks, wäre widersprüchlich
- **Kein tägliches Training bewerben** — Dad Strong ist 2×/Woche, nicht für Daily-Workout-Sucher

---

## Design-Prinzip
Klar, dunkel, fokussiert – wie ein Trainingsplan, nicht wie eine Wellness-App.
Gleiche visuelle Sprache wie die iOS-App: schwarz, #d4ff00 Akzent, starke Typografie.

---

## Astro-Konventionen
- Layouts: immer `Layout.astro` als Wrapper verwenden
- Komponenten: `PascalCase.astro`
- Styles: CSS Custom Properties in `global.css`, Section-CSS in `<style>` in `index.astro`
- Keine neuen inline `<style>` Tags in separaten Pages – Komponenten-CSS in der jeweiligen `.astro`-Datei ok

---

## Arbeitsregeln
- Immer auf Deutsch kommunizieren
- Code-Kommentare auf Englisch
- Claude erklärt was er getan hat und warum
- Claude fragt bevor er neue Dateien erstellt
- Keine neuen Farben oder Fonts einführen ohne Rückfrage
- App-Daten (Sets, Pausenzeiten, Übungen) immer aus der iOS-App nachlesen: `/Users/christianbachmann/Development/projects/dad-strong-swift/DadStrong/Sources/Data/ExercisesData.swift` und `WorkoutSessionState.swift`
