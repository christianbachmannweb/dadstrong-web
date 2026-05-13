# Dad Strong – Projekt Kontext
_Last updated: Mai 2026_

---

## Was ist Dad Strong?

Dad Strong ist kein Fitness-Programm mit 50 Übungen und wöchentlichem Challenge-Druck.

Es ist ein fixer Trainingsplan – zwei Einheiten, klare Progression, ehrliche Dokumentation.
Gedacht für Väter, die echte Ergebnisse wollen: stark sein, nackt gut aussehen, keine Zeit verschwenden.

> „Zwei Einheiten. Echter Fortschritt."

**Nicht:** Influencer-Optimierung, Bro-Science, „maximale Intensität", 15-Minuten-Daily-Workouts
**Ja:** Wenige Übungen, linearer Fortschritt, reale Lebensrealität

---

## Zielgruppe

- Väter 30–45
- Beschäftigt. Arbeit, Familie, Verpflichtungen.
- Wollen stark sein und gut aussehen – kein kompliziertes System
- Suchen: Klarheit, Struktur, messbare Ergebnisse
- **Nicht** die Zielgruppe: Leute die 15 min täglich trainieren wollen oder jeden Tag müssen

---

## Das Trainingskonzept

### Training A (~60 Min)
Kniebeuge · Bankdrücken · Rudern · BSS (Bulgarian Split Squat, bilateral) · Farmer Walk (timed)

### Training B (~45 Min)
Kreuzheben · OHP (Overhead Press) · Klimmzüge · Frontkniebeuge

**Arbeitssätze:** 2 pro Übung
**Pausenzeiten:** 3 min zwischen Sätzen, ~3 min Übergang zwischen Übungen
**Progression:** Linear. App schlägt Gewichtserhöhung vor wenn Threshold (8 Wdh) erreicht.
**Frequenz:** Realistisch, keine fixen Tage – Konstanz > Perfektion.

---

## Die Trainingsphilosophie (Kern-Botschaft der Website)

Menschen scheitern nicht an mangelnder Motivation.
Sie scheitern an zu komplizierten Systemen.

Dad Strong basiert auf wenigen, gut gestützten Prinzipien:

1. **Progressive Belastungssteigerung** – Fortschritt durch klare Steigerung, nicht durch Chaos
2. **Grundübungen** – großer Reiz, viele Muskelgruppen, maximaler Nutzen pro Zeit
3. **Fokus auf Beine & hintere Kette** – Kraft, Stabilität, Muskelmasse, gesundes Altern
4. **Ausreichende Intensität** – wenige harte Arbeitssätze statt Volumen-Inflation
5. **Langfristige Konstanz** – ein Plan den du trotz echtem Leben durchziehst
6. **Planbarkeit** – fixe Pausen, standardisierter Ablauf → du weißt vorher wann du fertig bist

### Warum dieser Plan? (USP)

Nicht: der perfekte Trainingsplan.
Sondern: **Reduktion auf das, was langfristig wirklich zählt.**

> „Dad Strong reduziert Training auf das, was langfristig wirklich zählt."

---

## Website-Struktur (gebaut, Stand Mai 2026)

### 1. Hero
- Animierte Progressionsbalken im Hintergrund (wie App-Icon)
- Bebas Neue Headline "DAD STRONG"
- Tagline in #d4ff00
- CTA: App Store Download

### 2. Kennst du das? (Pain Points)
- 8 Karten mit typischen Problemen von Vätern
- Kein Streak-Druck, kein Gamification als Pain Point (da App selbst Streaks hat)
- Stattdessen: Gamification-Druck und künstliche Challenges

### 3. Philosophie
- 2×2 Karten links (Grundübungen, Beine & hintere Kette, Progression, Fürs echte Leben)
- CSS-only iPhone 17 Mockup rechts mit App-Screenshot

### 4. Die Geschichte
- Persönliche Story von Christian Bachmann
- Pull-Quote sticky links

### 5. Der Plan
- Training A + B mit Erklärung warum jede Übung
- "Warum nicht veränderbar" Callout
- Interaktive Progressionsbar-Demo

### 6. Die App (Features-Grid)
- Workout-Tracking mit Progressions-Mock
- Streaks (3 unabhängig: Kraft/Ausdauer/Sprint + Superstreak)
- Körper-Dokumentation mit Body-Silhouetten-Mock
- Zone 2 & Sprint
- Planbar wie ein Meeting (Trainingsdauer ~60/~45 Min)
- Home Screen Widget
- Papa-CTA (Energie, Stabilität, Gesundheit, Selbstrespekt)

### 7. FAQ
- `<details>/<summary>` Accordion (kein JS)

### 8. CTA
- App Store Download

### 9. Footer

---

## App-Features (für Website-Beschreibung)

- **Workout-Tracking:** Training A + B, Sets/Reps/Gewicht, automatische Progressionsvorschläge
- **Streak-System:** 3 unabhängige Wochenstreaks (Kraft 2×, Ausdauer 100min Zone 2, Sprint 1×) + Superstreak
- **Journey / Körper-Check-In:** Gewicht, Körpermaße, Fotos (Front/Back/Side)
- **Zone 2 Training:** Cardio-Sessions mit Herzfrequenz via HealthKit
- **Sprint Training:** Sprint-Sessions loggen
- **Widget:** Home Screen Widget (Small/Medium/Large) – Streaks + letzte Sessions
- **Keine Accounts, kein Backend** – alles lokal, iCloud Backup
- **Standardisierter Ablauf** – fixe Pausen → klare Vergleichbarkeit + planbare Dauer

---

## App Stand (Mai 2026)

### Fertig:
- Workout-Flow komplett (Training A + B mit State Machine)
- Lineare Progression mit Confirmation
- Journey: Check-In Fotos, Gewicht, Körpermaße
- Zone 2 + Sprint Sessions
- HealthKit Integration (Körpergewicht + Workouts schreiben)
- Home Screen Widget (Small/Medium/Large)
- UserNotifications (Sonntagserinnerung 6:30 Uhr)

### Noch offen (für App Store):
- Privacy Manifest (PrivacyInfo.xcprivacy)
- Privacy Policy Seite auf dadstrong.app → `/privacy`
- Bundle ID für public Version
- Widget-Bild ersetzen
- Screenshots (6.5" + 5.5" iPhone)
- Share-Karte (Progression teilbar)
- Onboarding (2–3 Screens)

---

## Webseite Stand (Mai 2026)

### Fertig:
- Layout.astro (Base Layout mit Google Fonts)
- global.css mit Design Tokens
- index.astro – vollständige One-Page-Website mit 9 Pain-Cards, 8 FAQ-Einträgen, vollständigem Features-Grid
- privacy.astro – Datenschutz + Impressum unter /privacy
- PrivacyInfo.xcprivacy – Privacy Manifest für iOS App Store (in iOS-App-Repo)
- Hero mit animierten Progressionsbalken
- Pain Points Sektion (9 Karten, 3×3 Grid)
- Philosophie mit CSS iPhone Mockup
- Die Geschichte
- Der Plan (Training A + B)
- Die App (4-reihiges Features-Grid mit Mocks)
- FAQ (9 Einträge inkl. Sixpack, Bulk, Ergebnisse der letzten Trainings)
- CTA + Footer (mit /privacy Link und info@dadstrong.app)

### Noch offen:
- App Store Link eintragen (steht überall noch auf `#`)
- E-Mail-Weiterleitung info@dadstrong.app einrichten
- Echte App Store Screenshots einbauen (aktuell CSS-Mocks)
- Deploy: Cloudflare Pages (bevorzugt) – noch nicht aufgesetzt
- Open Graph / Social Meta Tags

---

## Design-Tonalität

Wie ein Trainingsplan. Nicht wie eine Wellness-App.

- Schwarz, Gelbgrün (#d4ff00), starke Typografie (Bebas Neue)
- Wenig Text, klare Aussagen
- Keine Floskeln, keine Versprechungen
- Zahlen: "2 Sätze. 3 Min Pause. ~60 Min. Fertig."
- Kein KI-Schreib-Ton – klingt wie ein Vater schreibt, nicht wie Marketing

---

## Verwandte Projekte
- iOS App: `/Users/christianbachmann/Development/projects/dad-strong-swift`
- Übungen: `ExercisesData.swift`
- Pausenzeiten: `WorkoutSessionState.swift`
- Design Tokens: `dadstrong-web-tokens.md`
