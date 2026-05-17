# Dad Strong Web – Status
_Zuletzt aktualisiert: 14. Mai 2026_

---

## Aktueller Stand

Die One-Page-Website ist vollständig gebaut, SEO-optimiert und bereit für Cloudflare-Deploy.
**Einzig offener Blocker für Live-Schaltung: App Store Link (wartet auf Apple Developer Freigabe).**

---

## Vollständige Seitenstruktur (index.astro)

| Sektion | Status | Anmerkungen |
|---|---|---|
| Fixed Nav | ✅ | blur backdrop, App-Icon + DAD STRONG, „Bald verfügbar" Badge |
| Hero | ✅ | animierte Progressionsbalken, Bebas Neue, #d4ff00 Tagline, Zielgruppen-Subtext |
| Kennst du das? | ✅ | 9 Pain-Cards (3×3 Grid) |
| Die Realität | ✅ | Bridge-Sektion zwischen Pain und Philosophie |
| Philosophie | ✅ | 4 Karten + CSS iPhone Mockup mit echtem Screenshot |
| Die Geschichte | ✅ | persönliche Story von Christian, Pull-Quote |
| Der Plan | ✅ | Training A + B, Progression-Demo |
| Mid-Page CTA | ✅ | „Du weißt genug." — muted, flankiert von Fade-Linien |
| Zone 2 | ✅ | eigene Sektion, orangener Puls-Hintergrund, echtes Mockup |
| Sprint | ✅ | eigene Sektion, rote Hero-Balken (Section-Ebene), echtes Mockup |
| Die App | ✅ | Features-Grid mit Widget-Redesign, mobile 1-col |
| FAQ | ✅ | 13 Einträge, details/summary, FAQPage JSON-LD Schema |
| Challenge | ✅ | 12-Wochen-Challenge, Mockup, Kalorienrechner-Komponente |
| CTA | ✅ | „Bald im App Store verfügbar" — wartet auf Apple |
| Footer | ✅ | Datenschutz-Link, info@dadstrong.app |

### Challenge-Sektion
- Text: „Woche erfüllt wenn 2× Kraft + 1× Sprint/Cardio"
- Regelbox mit grünen Checkmarks
- Rechts: iphone-16-challenge.png Mockup (27kB AVIF)
- Darunter: CalorieCalculator.astro Komponente

### CalorieCalculator.astro (`src/components/`)
- Formel: Mifflin-St Jeor (2005), PAL 1.55 (Büro + 2× Kraft + 1× Zone2/Sprint)
- 3 Stufen: Sanft −200 kcal | Moderat −400 kcal | Aggressiv −600 kcal
- Warnung bei Defizit > 800 kcal oder Ziel < 1.500 kcal
- Live-Berechnung beim Tippen, BMR + TDEE + Ziel-Ausgabe

### FAQ-Einträge (13 Stück)
1. Kostet die App Geld?
2. Gibt es ein Abo oder versteckte Kosten?
3. Kann ich meinen Trainingsplan anpassen?
4. Ist das wissenschaftlich fundiert?
5. Brauche ich ein Gym oder bestimmte Geräte?
6. Was wenn ich mal ein Training verpasse?
7. Warum sehe ich nicht meine Ergebnisse der letzten Trainings?
8. Bekomme ich mit Dad Strong einen Sixpack?
9. Funktioniert der Plan auch in einer Aufbauphase (Bulk)?
10. Kann ich Übungen ergänzen?
11. Wie machst du das mit dem Kaloriendefizit?
12. Ich trainiere und esse im Defizit — warum bewegt sich die Waage nicht?
13. Wie messe ich meinen Bauchumfang richtig? (Affiliate-Link: amzn.to/3RFxrva)

---

## Bilder (src/assets/images/)

Alle Bilder werden von Astro automatisch zu AVIF konvertiert.

| Datei | Verwendung | AVIF-Größe |
|---|---|---|
| dadstrong-app-home-screen.png | Philosophie-Mockup (CSS iPhone) | ~24kB |
| app-mockup-warmup.png | Phones Showcase | ~14kB |
| app-mockup-pause.png | Phones Showcase | ~16kB |
| app-mockup-journey.png | Phones Showcase | ~41kB |
| app-mockup-widget.png | Widget Feature-Card | ~41kB |
| iPhone-16-Pro-Max-zone-2.png | Zone 2 Sektion | ~17kB |
| iphone-16-sprint.png | Sprint Sektion | ~14kB |
| iphone-16-challenge.png | Challenge Sektion | ~27kB |

### Favicons / App-Icon (public/)
| Datei | Verwendung |
|---|---|
| app-icon-64.png | Nav-Logo (32px display, 4.3kB) |
| favicon-32.png | Browser-Tab (1.9kB) |
| apple-touch-icon.png | iOS Homescreen (180×180, 27kB) |
| icon-192.png | Android/PWA (192×192, 31kB) |

---

## SEO / AEO (Layout.astro)

✅ Vollständig optimiert:
- `<title>` mit Long-Tail-Keyword: „Dad Strong – Krafttraining App für Väter mit wenig Zeit"
- `<meta name="description">` zielgruppenscharf: Vollzeitjob, Kinder, stark sein, gut aussehen
- `<link rel="canonical" href="https://dadstrong.app/">`
- Open Graph: og:title, og:description, og:type, og:url, og:image, og:locale, og:site_name
- Twitter Card: summary_large_image
- JSON-LD: **SoftwareApplication** (url, keywords, inLanguage, publisher)
- JSON-LD: **FAQPage** (alle 13 FAQs → Google Rich Results)
- JSON-LD: **WebSite** (Sitelinks Search Box)
- `<main>` Wrapper für semantisches HTML
- `robots.txt` mit Sitemap-Verweis
- `sitemap.xml` automatisch via @astrojs/sitemap (beide URLs)
- Bebas Neue + Barlow + DM Mono self-hosted (kein Google CDN → DSGVO-konform)
- Font preloads für LCP-Fonts

**OG Image:** Aktuell `/screenshots/dadstrong-app-home-screen.png` — später durch eigenes 1200×630px Bild ersetzen.

---

## Weiteres

### /privacy (Datenschutz & Impressum)
✅ Erstellt unter `src/pages/privacy.astro`
- Datenschutzerklärung mit allen App-Berechtigungen
- Impressum: Christian Bachmann, Lachgasse 4, 73110 Hattenhofen
- Kontakt: info@dadstrong.app ✅ Weiterleitung eingerichtet
- ⚠️ Noch nachtragen: Affiliate-Link-Hinweis (Amazon)

### PrivacyInfo.xcprivacy (iOS App)
✅ Erstellt unter `DadStrong/Resources/PrivacyInfo.xcprivacy`

---

## Offen / Nächste Schritte

### Blocker für Live-Schaltung
- [ ] **App Store Link eintragen** — Nav Badge, Hero, Mid-CTA, Footer-CTA (alle zeigen „Bald verfügbar")
  → wartet auf Apple Developer Freigabe

### Nach App Store Link
- [ ] Deploy: Cloudflare Pages aufsetzen
- [ ] Domain dadstrong.app verknüpfen
- [ ] OG Image: eigenes 1200×630px Bild erstellen
- [ ] Privacy-Seite: Affiliate-Link-Hinweis ergänzen (Amazon-Partner)

### Optional / Später
- [ ] Instagram Community-Konzept umsetzen (12-Wochen-Challenge Hashtag)
- [ ] Performance-Audit nach Deploy (Lighthouse, Core Web Vitals)

---

## Bekannte Entscheidungen

| Entscheidung | Grund |
|---|---|
| `CalorieCalculator` als eigene Komponente | Erste Komponente in `src/components/` — Inhalt stabil genug |
| App-Buttons → „Bald verfügbar" | App Store Link fehlt noch; kein `href="#"` für User sichtbar |
| Fonts self-hosted (Barlow, DM Mono, Bebas Neue) | DSGVO: Google CDN überträgt IP an US-Server → LG München 2022 |
| Nav-Icon: app-icon-64.png statt app-icon.png | 788kB vs 4.3kB für 32px Darstellung |
| PAL 1.55 als Default im Kalorienrechner | Deckt Bürojob + 2× Kraft + 1× Zone2/Sprint ab |
| Mifflin-St Jeor als BMR-Formel | Beste validierte Formel für Übergewichtige (bis BMI ~40), Zielgruppe |
| Affiliate-Label „Affiliate" statt „Anzeige" | Klarer für Nutzer; rechtlich gleichwertig nach UWG |
| `faq__steps` für nummerierte Liste | `faq__list` war bereits Klassenname des FAQ-Wrappers — Kollision vermieden |
| CSS-only iPhone Mockup in Philosophie | Kein externes Asset nötig |
| Sprint-Balken auf Section-Ebene | Balken müssen über Grid-Spalten hinaus laufen |
| AVIF für alle Bilder | Astro `<Image format="avif">` — 10–40× kleiner als PNG |
