# Dad Strong – Projekt Kontext
_Last updated: Mai 2026_

---

## Was ist Dad Strong?

Dad Strong ist kein Fitness-Programm mit 50 Übungen und wöchentlichem Challenge-Druck.

Es ist ein fixer Trainingsplan – zwei Einheiten, klare Progression, ehrliche Dokumentation.
Gedacht für Väter, die echte Ergebnisse wollen, aber kein System brauchen das sie zwingt, jeden Tag drüber nachzudenken.

> „Zwei Einheiten. Echter Fortschritt."

**Nicht:** Influencer-Optimierung, Bro-Science, „maximale Intensität"
**Ja:** Wenige Übungen, linearer Fortschritt, reale Lebensrealität

---

## Zielgruppe

- Väter 30–45
- Beschäftigt. Arbeit, Familie, Verpflichtungen.
- Wollen trainieren – brauchen kein kompliziertes System
- Suchen: Klarheit, Struktur, messbare Ergebnisse

---

## Das Trainingskonzept

### Training A
Kniebeuge · Bankdrücken · Rudern · BSS (Bulgarian Split Squat, bilateral) · Farmer Walk (timed)

### Training B
Kreuzheben · OHP (Overhead Press) · Klimmzüge · Frontkniebeuge

**Progression:** Linear. Nach jedem Trainingsblock Gewicht erhöhen wenn alle Sätze ≥ Threshold.
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

### Warum dieser Plan? (USP)

Nicht: der perfekte Trainingsplan.
Sondern: **Reduktion auf das, was langfristig wirklich zählt.**

> „Dad Strong reduziert Training auf das, was langfristig wirklich zählt."

---

## Website-Struktur (geplant)

### 1. Hero
- Headline + kurze Aussage
- CTA: App Store Download

### 2. Das Problem
- Warum die meisten scheitern (zu komplex, zu viel, zu unruhig)
- Kurz, direkt, ohne Besserwisserei

### 3. Warum genau dieser Trainingsplan?
- Die Philosophie in Karten: Wenige Übungen / Fokus Beine & hintere Kette / Progression statt Zerstörung / Für echtes Leben entwickelt
- Ziel: Leser denkt "Ah. Das ergibt endlich Sinn." – nicht "Ich brauche noch 40 Optimierungen"

### 4. Der Trainingsplan
- Training A mit Erklärung warum jede Übung
- Training B mit Erklärung warum jede Übung
- Ton: ruhig, verständlich, pragmatisch – kein Sportwissenschafts-Jargon

### 5. Die App
- Screenshots
- Was die App kann: Progression tracken, Körper dokumentieren, Zone 2 + Sprint loggen
- Widget für Home Screen

### 6. App Store Download
- CTA

---

## App-Features (für Website-Beschreibung)

- **Workout-Tracking:** Training A + B, Sets/Reps/Gewicht, automatische Progression
- **Journey / Körper-Check-In:** Gewicht, Körpermaße, Fotos (Front/Back/Side), Fortschrittsgrafik
- **Zone 2 Training:** Cardio-Sessions mit Herzfrequenz über HealthKit
- **Sprint Training:** Sprint-Sessions loggen
- **Widget:** Home Screen Widget (Small/Medium/Large) – letzte Sessions + Streak
- **Keine Accounts, kein Backend** – alles lokal, iCloud Backup

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
- Privacy Policy Seite auf dadstrong.app
- Bundle ID für public Version
- Widget-Bild ersetzen
- Screenshots (6.5" + 5.5" iPhone)
- Share-Karte (Progression teilbar)
- Onboarding (2–3 Screens)

---

## Webseite Stand (Mai 2026)

Frisch aufgesetzt. Astro + Tailwind installiert.

### Offen:
- Layout.astro (Base Layout)
- global.css mit Design Tokens
- Hero-Sektion
- Philosophie-Sektion
- Trainingsplan-Sektion
- App-Screenshots Sektion
- App Store CTA
- Privacy Policy Seite

---

## Design-Tonalität

Wie ein Trainingsplan. Nicht wie eine Wellness-App.

- Schwarz, Gelbgrün (#D4FF00), starke Typografie
- Wenig Text, klare Aussagen
- Keine Floskeln, keine Versprechungen
- Zahlen wenn möglich: "Training A: 5 Übungen. 45 Minuten. Fertig."

---

## Verwandte Projekte
- iOS App: `/Users/christianbachmann/Development/projects/dad-strong-swift`
- Design Tokens: `dadstrong-web-tokens.md` (im iOS-App-Ordner und Webprojekt)
