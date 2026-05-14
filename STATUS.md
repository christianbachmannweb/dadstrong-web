# Dad Strong Web – Status
_Zuletzt aktualisiert: 13. Mai 2026_

---

## Aktueller Stand

Die One-Page-Website ist vollständig gebaut und produktionsbereit.
SEO, OG-Tags, Structured Data und alle Inhalte sind fertig.
**Einzig offener Blocker für Launch: App Store Link (wartet auf Apple Developer Freigabe).**

---

## Vollständige Seitenstruktur (index.astro)

| Sektion | Status | Anmerkungen |
|---|---|---|
| Fixed Nav | ✅ | blur backdrop, DAD STRONG, Download-CTA |
| Hero | ✅ | animierte Progressionsbalken, Bebas Neue, #d4ff00 Tagline |
| Kennst du das? | ✅ | 9 Pain-Cards (3×3 Grid) |
| Die Realität | ✅ | Bridge-Sektion zwischen Pain und Philosophie |
| Philosophie | ✅ | 4 Karten + CSS iPhone Mockup mit echtem Screenshot |
| Die Geschichte | ✅ | persönliche Story von Christian, Pull-Quote |
| Der Plan | ✅ | Training A + B, Progression-Demo |
| Mid-Page CTA | ✅ | „Du weißt genug." — Outline-Button, flankiert von Fade-Linien |
| Zone 2 | ✅ | eigene Sektion, orangener Puls-Hintergrund, echtes Mockup |
| Sprint | ✅ | eigene Sektion, rote Hero-Balken (Section-Ebene), echtes Mockup |
| Die App | ✅ | Features-Grid mit Widget-Redesign |
| FAQ | ✅ | 9 Einträge, details/summary |
| CTA | ✅ | App Store Button (Link noch `#` — wartet auf Apple) |
| Footer | ✅ | Datenschutz-Link, info@dadstrong.app |

### Features-Grid (Die App)
```
Row 1: [Workout-Tracking, 1col]        [Streaks, span 2]
Row 2: [Körper-Dokumentation, span 2]  [Zone 2 & Sprint, 1col]
Row 3: [Widget, span 2 horizontal]     [Planbar wie Meeting, 1col]
Row 4: [Papa-CTA, span 3 – full width]
```

### Zone 2 Sektion
- Persönlicher Text: Netflix, Yesoul Bike, kein Druck
- Hintergrund: dezente Puls-Linie (orange, fade-out)
- Rechts: iPhone-16-Pro-Max-zone-2.png Mockup (400px, AVIF)
- „Das Beste daran: Es ist optional." Box

### Sprint Sektion
- Persönlicher Text mit exakter App-Struktur (6 Sprints, 50→100%, Pausen 1:00/1:00/1:00/1:15/1:30)
- Balken: horizontal, Hero-Stil (4 Blöcke), rot, scroll-getriggert via IntersectionObserver
- Balken sitzen auf Section-Ebene und laufen in die Textspalte rein (Peak bei 91%)
- Links: iphone-16-sprint.png Mockup (400px, AVIF)

### FAQ-Einträge (9 Stück)
1. Kostet die App Geld?
2. Gibt es ein Abo oder versteckte Kosten?
3. Kann ich meinen Trainingsplan anpassen?
4. Ist das wissenschaftlich fundiert?
5. Brauche ich ein Gym oder bestimmte Geräte?
6. Was wenn ich mal ein Training verpasse?
7. Warum sehe ich nicht meine Ergebnisse der letzten Trainings?
8. Bekomme ich mit Dad Strong einen Sixpack?
9. Funktioniert der Plan auch in einer Aufbauphase (Bulk)?

### Pain-Cards (9 Stück, 3×3 Grid)
1. Zu viele Übungen zur Auswahl
2. Startest motiviert → hörst nach 2 Wochen auf
3. Trainierst, siehst keine echten Ergebnisse
4. Alltag lässt keinen komplexen Plan zu (Arbeit, Kinder)
5. Influencer-Vergleich: kein Vollzeitjob, keine Kinder, Anfang 20, täglich 2h Zeit
6. Du sabotierst dich selbst — immer wieder, unbewusst
7. Kopf woanders, zu müde nach der Arbeit
8. Denkst du müsstest täglich trainieren → schaffst es nicht → also gar nichts
9. Weißt was du tun müsstest → suchst den perfekten Plan → fängst nie an

---

## Bilder (src/assets/images/)

Alle Bilder werden von Astro automatisch zu AVIF konvertiert.

| Datei | Verwendung | AVIF-Größe |
|---|---|---|
| dadstrong-app-home-screen.png | Philosophie-Mockup (CSS iPhone) | ~16kB |
| app-mockup-warmup.png | Phones Showcase | ~14kB |
| app-mockup-pause.png | Phones Showcase | ~16kB |
| app-mockup-journey.png | Phones Showcase | ~41kB |
| app-mockup-widget.png | Widget Feature-Card | ~41kB |
| iPhone-16-Pro-Max-zone-2.png | Zone 2 Sektion | ~17kB |
| iphone-16-sprint.png | Sprint Sektion | ~14kB |

---

## SEO / Meta (Layout.astro)

✅ Alles erledigt:
- `<title>` mit Keywords: „Dad Strong – Krafttraining App für Väter"
- `<meta name="description">` mit Zielgruppe + USP
- `<link rel="canonical" href="https://dadstrong.app/">`
- Open Graph: og:title, og:description, og:type, og:url, og:image, og:locale, og:site_name
- Twitter Card: summary_large_image
- JSON-LD Structured Data: SoftwareApplication (Schema.org)
- Bebas Neue font preload
- `theme-color: #000000`

**OG Image:** Aktuell `/screenshots/dadstrong-app-home-screen.png` — später durch eigenes 1200×630px Bild ersetzen.

---

## Weiteres

### /privacy (Datenschutz & Impressum)
✅ Erstellt unter `src/pages/privacy.astro`
- Datenschutzerklärung mit allen App-Berechtigungen
- Impressum: Christian Bachmann, Lachgasse 4, 73110 Hattenhofen
- Kontakt: info@dadstrong.app ✅ Weiterleitung eingerichtet

### PrivacyInfo.xcprivacy (iOS App)
✅ Erstellt unter `DadStrong/Resources/PrivacyInfo.xcprivacy`
- NSPrivacyTracking: false
- NSPrivacyAccessedAPITypes: UserDefaults (CA92.1)

---

## Offen / Nächste Schritte

### Blocker für Launch
- [ ] **App Store Link eintragen** — 4 Stellen: Nav, Hero, Mid-CTA, Footer-CTA (alle `href="#"`)
  → wartet auf Apple Developer Freigabe

### Nach App Store Link
- [ ] Deploy: Cloudflare Pages aufsetzen
- [ ] Domain dadstrong.app verknüpfen
- [ ] OG Image: eigenes 1200×630px Bild erstellen (aktuell App Screenshot)

### Optional / Später
- [ ] Komponenten auslagern nach `src/components/` wenn Inhalte stabil
- [ ] Performance-Audit (Google Fonts preload bereits erledigt, Image-Optimierung via AVIF bereits erledigt)

---

## Bekannte Entscheidungen

| Entscheidung | Grund |
|---|---|
| Alles in `index.astro` | Single-Page, keine Notwendigkeit für Komponenten jetzt |
| Kein React/Vue | Reines Astro + HTML; JS nur für IntersectionObserver + Progressionsbar |
| Bebas Neue self-hosted | `public/fonts/BebasNeue-Regular.ttf` — nicht über Google Fonts |
| Barlow + DM Mono via Google Fonts | In Layout.astro eingebunden |
| CSS-only iPhone Mockup in Philosophie | Kein externes Asset nötig |
| Sprint-Balken auf Section-Ebene | Balken müssen über Grid-Spalten hinaus in Textspalte laufen — geht nur außerhalb der Grid-Zelle |
| Zone2/Sprint als eigene Sektionen | Genug inhaltliche Tiefe für je eine eigene Sektion; Mid-Page CTA überbrückt die Länge |
| Mid-Page CTA nach „Der Plan" | Wer nach dem Plan überzeugt ist soll nicht bis ans Ende scrollen müssen |
| AVIF für alle Bilder | Astro `<Image format="avif">` — 10–40× kleiner als PNG |
| info@dadstrong.app | Weiterleitung auf echten Posteingang ✅ eingerichtet |
