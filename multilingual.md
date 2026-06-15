# Multilingual Playbook – Webseiten zweisprachig (mehrsprachig) ausliefern

Ein wiederverwendbares, fehlerarmes Vorgehen, um eine statische Webseite zweisprachig
zu machen — **automatische Sprachwahl über die Browsersprache**, sauberes SEO/AEO und ein
Self-Bugfixing-Prozess, der die typischen Fehler ausschließt.

> Referenz-Implementierung: dieses Projekt (Astro 6 + Tailwind, statisch). Die Prinzipien
> gelten genauso für Next.js, SvelteKit oder reines HTML — Stack-Hinweise stehen am Ende.

Sprache dieses Dokuments: Deutsch (Prosa), Englisch (Code/Commands) — wie im Projekt üblich.

---

## 0. Grundprinzipien (gelten immer)

1. **Eine Struktur, zwei Sprachen.** Texte in ein Übersetzungs-Dictionary auslagern, die
   Seitenstruktur bleibt EINE Vorlage. Niemals die ganze Seite duplizieren — sonst driften
   die Versionen auseinander und jede Änderung muss doppelt gemacht werden.
2. **Default-Sprache ohne URL-Präfix, Zweitsprache unter `/<lang>/`.** Bestehende URLs
   bleiben erhalten → kein SEO-Verlust, keine kaputten Links.
3. **Automatik nur einmal, Nutzer überstimmt immer.** Browsersprache-Redirect feuert nur
   beim ersten Besuch, die Wahl wird gemerkt, ein manueller Umschalter hat immer Vorrang.
4. **Browsersprache ≠ Standort.** `navigator.language` erkennt die Sprachpräferenz, nicht
   das Land. Das ist für „Sprache" das richtige Signal (Geo-IP nur bei echtem Bedarf, s.u.).
5. **Jede Sprache ist eine vollwertige, crawlbare Seite.** Verbunden über `hreflang`. Kein
   reines Client-Side-Austauschen von Text ohne eigene URL.

---

## 1. Vorab-Entscheidungen (vor der ersten Zeile Code)

Diese Punkte vorher klären — sie bestimmen die ganze Architektur:

| Frage | Optionen | Default-Empfehlung |
|---|---|---|
| Welche Sprachen? | z. B. de + en | so wenige wie nötig |
| Default-Sprache? | die mit dem meisten Traffic | bestehende Sprache |
| URL-Schema? | Präfix nur für Zweitsprache vs. für alle | Default ohne Präfix, Rest `/en/` |
| Erkennung? | **Browsersprache** / Geo-IP / beides | Browsersprache |
| Umfang? | alle Seiten / nur Marketing | alle inhaltlichen Seiten |
| Rechtstexte? | Impressum bleibt i. d. R. in Landessprache | Impressum DE, Datenschutz übersetzt |
| Architektur? | **Dictionary** / Dateiduplikat | Dictionary |
| Slugs lokalisieren? | `/preise` vs `/en/pricing` | ja, pro Sprache eigener Slug |

**Browsersprache vs. Geo-IP:**
- *Browsersprache* (`navigator.language`): funktioniert auf jedem Host, rein clientseitig,
  trifft die Sprachpräferenz. → Standardfall.
- *Geo-IP* (Land): braucht Edge-Logik (z. B. Cloudflare `CF-IPCountry` in einer Pages
  Function / Worker). Nur nötig, wenn Inhalte wirklich vom *Standort* abhängen
  (Währung, Recht, Verfügbarkeit). Für reine Sprachwahl ungenauer.

---

## 2. SEO & AEO – was zwingend rein muss

Pro Seite und Sprache:

- **`<html lang="…">`** dynamisch.
- **Canonical** je Sprache, selbst-referenzierend (`<link rel="canonical" href="…self…">`).
- **hreflang-Set** in jedem `<head>`, gegenseitig verlinkt + `x-default`:
  ```html
  <link rel="alternate" hreflang="de" href="https://example.com/preise/" />
  <link rel="alternate" hreflang="en" href="https://example.com/en/pricing/" />
  <link rel="alternate" hreflang="x-default" href="https://example.com/preise/" />
  ```
  Regeln: jede Seite listet **alle** Sprachversionen inkl. sich selbst; `x-default` zeigt
  auf die Default-Sprache; URLs absolut; Trailing-Slash konsistent (s. Punkt 6.7).
- **`og:locale`** dynamisch (`de_DE` / `en_US`) + `og:locale:alternate`.
- **Title/Description/OG** pro Sprache UND pro Seite aus dem Dictionary.
- **Sitemap mit hreflang-Alternates** (`xhtml:link`). Bei **unterschiedlichen Slugs** pro
  Sprache automatisch NICHT paarbar → Alternates manuell ergänzen (s. Punkt 6.6).
- **Structured Data lokalisiert:** JSON-LD `inLanguage` setzen; FAQ/Breadcrumb-Texte in der
  jeweiligen Sprache. FAQPage-Schema aus DERSELBEN Quelle generieren wie die sichtbare FAQ
  (Single Source) → kein Auseinanderdriften.

**Keyword-Strategie ist pro Sprache eigenständig** — nicht 1:1 übersetzen:
- Eigene Keyword-Recherche je Markt (Suchvolumen & Wettbewerb unterscheiden sich massiv).
- **„Suchen X — meinen Y":** Nutzer suchen oft den falschen Begriff. Den echten Such-Intent
  bedienen und abweichende Begriffe im Text/FAQ abgrenzen, statt falsch zu positionieren.
- **Slug pro Sprache mit lokalem Keyword** (`/kalorienrechner` ↔ `/en/calorie-calculator`).
- **AEO (KI-Suchen):** klare H1/H2-Struktur, echte Fragen als FAQ + FAQPage-Schema,
  E-E-A-T (echter Autor, transparente Methodik, Quellen). KI zitiert Seiten, die Fragen
  klar beantworten.
- **Wording-Prinzip:** Fachbegriffe als Erklärung einbetten, nicht als Hauptaussage
  („… dein Tagesbedarf (TDEE) …") — Google findet den Begriff, der Mensch versteht den Satz.

---

## 3. Dateistruktur (Referenz, Astro)

```
src/
  i18n/
    ui.ts            ← Locales, Route-Map, Per-Page-Meta, Helfer (alternatesFor, ogLocale)
    home.ts          ← Content-Dictionary Home (de/en), typisiert
    privacy.ts       ← Content-Dictionary Rechtstexte
    calculator.ts    ← Content + Client-Script-Strings + SEO-Seiteninhalt
  components/
    LangSwitcher.astro     ← DE|EN-Umschalter, merkt Wahl in localStorage
    <Page>Content.astro    ← gesamtes Markup, lang-aware (Texte via Dictionary)
    <Page>Head.astro       ← lokalisiertes JSON-LD (slot="head")
  layouts/
    Layout.astro     ← lang-aware: hreflang, canonical, og, Auto-Redirect-Script
  pages/
    index.astro            → <Layout lang="de" page="home"><HomeContent lang="de"/>
    en/index.astro         → lang="en"
    <slug>.astro / en/<slug>.astro …
```

**Prinzip:** Seiten-Dateien sind dünne Wrapper. Das Markup lebt **einmal** in einer
`*Content.astro`-Komponente mit `lang`-Prop. Folge­änderungen am Layout → nur 1×.

---

## 4. Kern-Bausteine (kopierbare Muster)

### 4.1 i18n-Config & Route-Map (`ui.ts`)

```ts
export const SITE = 'https://example.com';
export const locales = ['de', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'de';

// Default ohne Präfix, Zweitsprache unter /en/. Trailing-Slash konsistent halten!
export const routes = {
  home:    { de: '/',          en: '/en/' },
  pricing: { de: '/preise/',   en: '/en/pricing/' },
} as const;
export type PageKey = keyof typeof routes;

export function alternatesFor(page: PageKey) {
  return { de: SITE + routes[page].de, en: SITE + routes[page].en };
}
export const ogLocale: Record<Lang, string> = { de: 'de_DE', en: 'en_US' };
```

### 4.2 Astro i18n (`astro.config.mjs`)

```js
i18n: {
  locales: ['de', 'en'],
  defaultLocale: 'de',
  routing: { prefixDefaultLocale: false }   // Default ohne /de/
}
```

### 4.3 Content-Dictionary (typisiert, beide Sprachen erzwungen)

```ts
export interface HomeContent { hero: { title: string; body: string[] }; /* … */ }
const de: HomeContent = { /* … */ };
const en: HomeContent = { /* … */ };           // TS erzwingt: keine fehlenden Keys
export const home: Record<Lang, HomeContent> = { de, en };
```
- Mehrzeiligen Text als `string[]` ablegen und im Template mit `<br>` verbinden — kein
  HTML in den Daten (Auto-Escaping bleibt aktiv).
- Wiederholende Blöcke (FAQ, Listen, Cards) als Arrays → Template iteriert.
- **Auch übersetzen:** `alt`-Texte, `aria-label`, Button-Labels, Mock-/Demo-Texte,
  Zahlenformate (s. 6.4), Meta/OG.

### 4.4 Lang-aware Layout (Auszug)

```astro
---
import { meta, alternatesFor, ogLocale, type Lang, type PageKey } from '../i18n/ui';
const { lang = 'de', page = 'home', title, description } = Astro.props;
const m = meta[page][lang];
const alt = alternatesFor(page);
const altLang: Lang = lang === 'de' ? 'en' : 'de';
---
<html lang={lang}>
  <head>
    <!-- Auto-Redirect ganz oben, läuft vor dem Paint -->
    <script is:inline>{/* siehe 4.5 */}</script>
    <title>{title ?? m.title}</title>
    <meta name="description" content={description ?? m.description} />
    <link rel="canonical" href={alt[lang]} />
    <link rel="alternate" hreflang="de" href={alt.de} />
    <link rel="alternate" hreflang="en" href={alt.en} />
    <link rel="alternate" hreflang="x-default" href={alt.de} />
    <meta property="og:locale" content={ogLocale[lang]} />
    <meta property="og:locale:alternate" content={ogLocale[altLang]} />
    <slot name="head" />
  </head>
  <body><slot /></body>
</html>
```

### 4.5 Auto-Redirect (Browsersprache) — das Herzstück

```js
(function () {
  try {
    if (localStorage.getItem('ds_lang')) return;        // nur beim 1. Besuch
    var path = location.pathname;
    var onEn = path === '/en' || path.indexOf('/en/') === 0;
    var prefersEn = (navigator.language || '').toLowerCase().indexOf('en') === 0;
    var target = prefersEn ? 'en' : 'de';
    localStorage.setItem('ds_lang', target);            // merken → nie wieder automatisch
    if (target === 'en' && !onEn) {
      location.replace('/en' + path + location.search + location.hash);
    } else if (target === 'de' && onEn) {
      location.replace((path.replace(/^\/en/, '') || '/') + location.search + location.hash);
    }
  } catch (e) {}
})();
```
**Warum so:** synchron im `<head>` → kein Flackern; `location.replace` → kein History-Eintrag;
`localStorage`-Guard → keine Endlosschleife; Bots haben oft leeres `navigator.language` →
Default-Sprache, kein Redirect, sie crawlen beide via hreflang.

> **Wichtig bei lokalisierten Slugs:** Das obige Mapping `/preise` ↔ `/en/preise` stimmt nur
> bei gleichen Slugs. Bei unterschiedlichen Slugs (`/preise` ↔ `/en/pricing`) eine
> Slug-Map ins Script geben und gezielt mappen — nicht blind `/en` voranstellen.

### 4.6 LangSwitcher (Wahl respektieren)

```astro
<a href={routes[page].de} data-setlang="de" aria-current={lang === 'de' ? 'true' : undefined}>DE</a>
<a href={routes[page].en} data-setlang="en" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
<script>
  document.querySelectorAll('[data-setlang]').forEach((el) =>
    el.addEventListener('click', () => {
      try { localStorage.setItem('ds_lang', el.getAttribute('data-setlang')); } catch (e) {}
    }));
</script>
```
Der Klick setzt denselben `localStorage`-Key wie der Auto-Redirect → die Automatik
überstimmt die manuelle Wahl nie wieder. Jede Seite kennt ihre Gegenstück-URL über die
Route-Map (kein Raten clientseitig).

### 4.7 Lokalisierte Client-Skripte (interaktive Widgets)

Strings nicht im Script hartcodieren. In Astro per `define:vars` injizieren:
```astro
<script define:vars={{ strings }}>
  el.textContent = strings.note.replace('{x}', value);
</script>
```
Zahlen/Datum **immer** mit der passenden Locale formatieren:
```js
n.toLocaleString('de-DE')   // 2.500   vs   'en-US' → 2,500
```

---

## 5. Reihenfolge der Umsetzung

1. i18n-Config + Route-Map (`ui.ts`, `astro.config`).
2. Content-Dictionary pro Seite (erst Default-Sprache extrahieren, dann übersetzen).
3. Layout lang-aware (Meta, hreflang, og, Auto-Redirect).
4. LangSwitcher.
5. Markup in `*Content.astro`-Komponenten auslagern, Strings → `t()`/Dictionary.
6. Dünne Wrapper-Seiten je Sprache (`/`, `/en/`, …).
7. Lokalisiertes JSON-LD (`*Head.astro`).
8. Sitemap-Alternates (auto + manuell für abweichende Slugs).
9. **Build + Verifikation** (Abschnitt 7) — nach jeder größeren Sektion, nicht erst am Ende.

---

## 6. Häufige Fehler — und wie man sie ausschließt

1. **Flash of wrong language (FOUC):** Redirect-Script gehört synchron in den `<head>`,
   nicht ans Body-Ende, nicht `defer`/`async`.
2. **Redirect-Endlosschleife:** ohne `localStorage`-Guard pingpongt der Redirect. Immer
   merken + nur beim ersten Besuch ausführen.
3. **Nutzerwahl wird überschrieben:** Auto-Redirect und Switcher müssen denselben Key teilen.
4. **Bots/SEO kaputt-redirected:** niemals serverseitig hart nach Browsersprache 301en.
   Clientseitig + hreflang, dann crawlt Google beide Sprachen.
5. **Sprach-Leaks:** vergessene hartkodierte Strings, `alt`-Texte, Buttons, Mock-Daten.
   → Leak-Grep (Abschnitt 7) fängt das.
6. **Sitemap-Alternates bei abweichenden Slugs fehlen/falsch:** Auto-Pairing scheitert →
   per `serialize` manuell setzen:
   ```js
   serialize(item) {
     const de = SITE + '/preise/', en = SITE + '/en/pricing/';
     if (item.url === de || item.url === en) item.links = [{lang:'de',url:de},{lang:'en',url:en}];
     return item;
   }
   ```
7. **Trailing-Slash-Mismatch:** Canonical, hreflang, Sitemap und interne Links müssen
   **dieselbe** Slash-Form verwenden. Eine Form festlegen und überall durchziehen.
8. **`x-default` fehlt** oder zeigt auf die falsche Sprache.
9. **JSON-LD nicht lokalisiert:** `inLanguage` + Texte vergessen; FAQ-Schema weicht vom
   sichtbaren Text ab → aus einer Quelle generieren.
10. **Zahlen/Datum/Einheiten:** `1.500` vs `1,500`, Dezimal-Komma vs -Punkt → `toLocaleString`
    mit Locale; ggf. Einheiten (kg/lb, °C/°F) bedenken.
11. **Rechtstexte:** Impressum i. d. R. in Landessprache lassen (Rechtspflicht), Datenschutz
    übersetzen — und keine Aussagen übersetzen, die für die Website faktisch nicht (mehr)
    stimmen (z. B. „kein Analyse-Tool", wenn Analytics eingebunden ist).
12. **`lang`-Attribut vergessen** oder statisch → Screenreader & SEO leiden.
13. **Doppelter Content ohne hreflang:** zwei Sprachseiten ohne Verlinkung = Duplicate-Risk.
14. **RTL** (Arabisch/Hebräisch): `dir="rtl"` + Spiegelung nötig — früh entscheiden.

---

## 7. Self-Bugfixing: Verifikations-Workflow (nach jedem Build ausführen)

```bash
# 1) Build muss fehlerfrei alle Routen erzeugen
npm run build

# 2) Pro Seite: lang / canonical / hreflang prüfen
grep -oE '<html lang="[^"]*"|rel="canonical" href="[^"]*"|hreflang="[^"]*" href="[^"]*"' \
  dist/index.html dist/en/index.html

# 3) og:locale je Sprache
grep -oE 'og:locale[^>]*content="[^"]*"' dist/index.html dist/en/index.html

# 4) Sprach-Leak-Check: Default-Sprache-Marker dürfen auf der Zweitsprache 0× sein
grep -c "Häufige Fragen" dist/en/index.html          # erwartet: 0
grep -c "Beta testen"   dist/en/index.html           # erwartet: 0

# 5) Zielsprache vorhanden?
grep -c "Common questions" dist/en/index.html        # erwartet: >0

# 6) JSON-LD-Sprache korrekt
grep -oE '"inLanguage":"[^"]*"' dist/index.html dist/en/index.html

# 7) Sitemap: alle Routen + hreflang-Alternates
cat dist/sitemap-0.xml | sed 's/></>\n</g' | grep -iE 'loc|xhtml:link'

# 8) Auto-Redirect-Script eingebettet?
grep -c "localStorage" dist/index.html               # erwartet: >0
```

**Browser-Checks (manuell, einmalig):**
- `localStorage` leeren, Browsersprache auf Englisch → `/` muss nach `/en/` umleiten,
  **ohne** Flackern, **ohne** Schleife.
- Manuell auf DE schalten, neu laden → bleibt DE (Wahl respektiert).
- Auf jeder Seite den Switcher testen → führt zur korrekten Gegenstück-URL.
- Konsole: keine Fehler. Interaktive Widgets in beiden Sprachen testen (Formate!).
- Validieren: Rich-Results-Test (Schema), hreflang-Validator.

**Definition of Done:**
- [ ] Build grün, alle Sprach-Routen erzeugt
- [ ] Pro Seite/Sprache: `lang`, Canonical (self), hreflang-Set + `x-default`, og:locale
- [ ] Sitemap listet alle Routen inkl. korrekter hreflang-Alternates
- [ ] 0 Sprach-Leaks (Leak-Grep), 0 Konsolenfehler
- [ ] Auto-Redirect: kein Flash, keine Schleife, Bots unbehelligt
- [ ] Manueller Switcher überstimmt Automatik dauerhaft
- [ ] JSON-LD lokalisiert (`inLanguage` + Texte), FAQ-Schema = sichtbarer Text
- [ ] Trailing-Slash überall konsistent
- [ ] Zahlen/Datum/Einheiten korrekt lokalisiert
- [ ] Rechtstexte korrekt (Impressum-Sprache, keine falschen Aussagen)

---

## 8. Andere Stacks (Kurzhinweise)

- **Next.js (App Router):** `app/[lang]/…` oder Middleware für Locale-Detection
  (`Accept-Language`), `generateMetadata` für hreflang/canonical, `next-intl`/`next-i18next`
  als Dictionary-Layer. Default-Locale ohne Präfix via Middleware-Rewrite.
- **SvelteKit:** `@inlang/paraglide-js` oder eigenes Dictionary; `hooks.server` für
  Locale, `<svelte:head>` für hreflang.
- **Reines HTML:** pro Sprache eine Datei/Ordner, hreflang händisch in jeden `<head>`,
  ein kleines Inline-Script (4.5) für den Redirect, Dictionary entfällt — dafür Disziplin
  beim Synchronhalten.
- **Geo-IP (falls nötig):** Cloudflare Pages Function / Worker liest `request.cf.country`
  bzw. Header `CF-IPCountry`, setzt eine Weiche an der Edge — als Ergänzung zur
  Browsersprache, nicht als Ersatz.

---

## 9. Reihenfolge in einem Satz

Entscheidungen treffen → i18n-Config & Routen → Dictionary (Default extrahieren, dann
übersetzen) → Layout/Redirect/Switcher → Markup in lang-aware Komponenten → dünne
Wrapper-Seiten → lokalisiertes Schema → Sitemap-Alternates → Build + Verifikations-Grep →
Browser-Check → Definition of Done abhaken.
