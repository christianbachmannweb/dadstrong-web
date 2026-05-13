# Dad Strong Web – Status
_Zuletzt aktualisiert: 11. Mai 2026_

---

## Aktueller Stand

Die One-Page-Website ist vollständig gebaut und inhaltlich weitgehend fertig.
`/privacy` (Datenschutz + Impressum) existiert ebenfalls.
Was noch fehlt: App Store Link, echte Screenshots, Deploy.

---

## Vollständige Seitenstruktur (index.astro)

| Sektion | Status | Anmerkungen |
|---|---|---|
| Fixed Nav | ✅ | blur backdrop, DAD STRONG, Download-CTA |
| Hero | ✅ | animierte Progressionsbalken, Bebas Neue, #d4ff00 Tagline |
| Kennst du das? | ✅ | 9 Pain-Cards (3×3 Grid, komplett) |
| Philosophie | ✅ | 4 Karten + CSS iPhone 17 Mockup |
| Die Geschichte | ✅ | persönliche Story, Pull-Quote |
| Der Plan | ✅ | Training A + B, Progression-Demo |
| Die App | ✅ | 4-zeiliges Features-Grid |
| FAQ | ✅ | 8 Einträge, details/summary |
| CTA | ✅ | App Store Button (Link noch `#`) |
| Footer | ✅ | Datenschutz-Link, info@dadstrong.app |

### Features-Grid (Die App)
```
Row 1: [Workout-Tracking, 1col]           [Streaks, span 2]
Row 2: [Körper-Dokumentation, span 2]     [Zone 2 & Sprint, 1col]
Row 3: [Planbar wie ein Meeting, span 2]  [Home Screen Widget, 1col]
Row 4: [Papa-CTA, span 3 – full width]
```

### FAQ-Einträge (8 Stück)
1. Kostet die App Geld?
2. Gibt es ein Abo oder versteckte Kosten?
3. Kann ich meinen Trainingsplan anpassen?
4. Ist das wissenschaftlich fundiert?
5. Brauche ich ein Gym oder bestimmte Geräte?
6. Was wenn ich mal ein Training verpasse?
7. Warum sehe ich nicht meine Ergebnisse der letzten Trainings?
8. Bekomme ich mit Dad Strong einen Sixpack?
9. Funktioniert der Plan auch in einer Aufbauphase (Bulk)?

*(Einträge 7–9 neu hinzugefügt)*

### Pain-Cards (9 Stück, 3×3 Grid)
1. Zu viele Übungen zur Auswahl
2. Startest motiviert → hörst nach 2 Wochen auf
3. Trainierst, siehst keine echten Ergebnisse
4. Alltag lässt keinen komplexen Plan zu (Arbeit, Kinder)
5. Influencer-Vergleich: kein Vollzeitjob, keine Kinder, Anfang 20, täglich 2h Zeit → das ist nicht dein Leben
6. Du sabotierst dich selbst — immer wieder, unbewusst
7. Kopf woanders, zu müde nach der Arbeit
8. Denkst du müsstest täglich trainieren → schaffst es nicht → also gar nichts
9. Weißt was du tun müsstest → suchst trotzdem den perfekten Plan → fängst nie an

---

## Weiteres

### /privacy (Datenschutz & Impressum)
✅ Erstellt unter `src/pages/privacy.astro`
- Datenschutzerklärung mit allen App-Berechtigungen (Kamera, Foto, HealthKit, Bluetooth, Notifications)
- Impressum für Privatperson (§5 TMG): Christian Bachmann, Lachgasse 4, 73110 Hattenhofen
- Kontakt: info@dadstrong.app (Weiterleitung auf echten Posteingang noch einrichten)
- Footer-Link auf "Datenschutz & Impressum" zeigt korrekt auf /privacy

### PrivacyInfo.xcprivacy (iOS App)
✅ Erstellt unter `DadStrong/Resources/PrivacyInfo.xcprivacy`
- NSPrivacyTracking: false
- NSPrivacyCollectedDataTypes: leer (keine Daten an Server)
- NSPrivacyAccessedAPITypes: UserDefaults (CA92.1)
- FileTimestamp wurde vom Linter entfernt — aktuelle Version enthält nur UserDefaults

---

## Offen / Nächste Schritte

### Dringend (für App Store Launch)
- [ ] App Store Link eintragen — aktuell überall `href="#"` (Nav, Hero, CTA, Footer)
- [x] E-Mail-Weiterleitung info@dadstrong.app → echter Posteingang einrichten

### Inhalt
- [ ] Echte App Store Screenshots einbauen (aktuell CSS-Mocks in "Die App")
- [ ] Echter iPhone Screenshot in Philosophie-Mockup (CSS-Rahmen vorhanden, Screenshot-Datei: `public/screenshots/dadstrong-app-home-screen.png` — muss in Mockup eingesetzt werden)

### Technisch
- [ ] Deploy aufsetzen: Cloudflare Pages (bevorzugt) oder Hetzner
- [ ] Domain dadstrong.app verknüpfen
- [ ] Open Graph / Social Meta Tags in Layout.astro ergänzen (og:image, og:title etc.)

### Optional / Später
- [ ] Komponenten auslagern nach `src/components/` wenn Inhalte stabil
- [ ] Performance-Audit (Google Fonts preload, Image-Optimierung)

---

## Bekannte Entscheidungen

| Entscheidung | Grund |
|---|---|
| Alles in `index.astro` | Seite ist eine Single-Page, keine Notwendigkeit für Komponenten jetzt |
| Kein React/Vue | Reines Astro + HTML; JS nur für IntersectionObserver (Scroll-Reveal) und Progressionsbar |
| Bebas Neue self-hosted | `public/fonts/BebasNeue-Regular.ttf` — nicht über Google Fonts |
| Barlow + DM Mono via Google Fonts | In Layout.astro eingebunden |
| CSS-only iPhone Mockup | Kein externes Asset nötig, dynamisch via CSS |
| Grautöne angehoben | #808080→#aaa, #555→#888, #444→#777 (besser lesbar auf schwarz) |
| info@dadstrong.app | Für Impressum/Kontakt — Weiterleitung noch einzurichten |
| Keine täglichen Trainings als Zielgruppe | App ist für 2×/Woche, nicht für Daily-Workout-Sucher |
| Kein Streak-Druck als Pain Point | App hat selbst Streaks → wäre widersprüchlich |
