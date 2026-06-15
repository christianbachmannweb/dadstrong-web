# Design: Zweisprachigkeit (DE/EN) + SEO-Kalorienrechner-Seite

**Datum:** 2026-06-15
**Projekt:** dadstrong-web (Astro 6, statisch, Tailwind 4)
**Status:** Freigegeben zur Umsetzung ("leg los")

---

## Ziel

1. Die gesamte Marketing-Website zweisprachig machen (Deutsch + Englisch).
2. Englische Besucher automatisch auf die englische Version leiten – gesteuert über die **Browsersprache** (nicht Geo-IP).
3. Eine neue, SEO-optimierte Unterseite zum **Kalorienrechner** bauen, die in der Google-Suche (und bei KI-Suchen / AEO) gefunden werden kann. Zweisprachig.

## Bestätigte Entscheidungen (aus Brainstorming)

- **App-Sprache:** Die iOS-App ist bereits lokalisiert (EN integriert) → englische Website-Besucher landen auf einer englischen App. Vorhaben lohnt sich.
- **Erkennung:** Browsersprache (`navigator.language`), nicht Geo-IP. SEO-sauber, host-unabhängig.
- **Umfang:** Hauptseite + Datenschutz + Kalorienrechner zweisprachig. **Impressum bleibt deutsch** (Rechtspflicht). Verwaiste `CalorieCalculator.astro` bekommt mit der Rechner-Seite endlich einen Zweck.
- **Architektur:** Übersetzungs-Dictionary + **eine** Struktur (kein Datei-Duplikat).
- **Rechner-Seite:** zweisprachig (DE + EN).
- **Google-Verifizierung:** DNS-TXT (`google-site-verification=H7ASNPIrLPIeixsCUFzu0-Q6e2unSzAk56VR9rjvlQw`) ist gesetzt und verifiziert die ganze Domain → **kein** HTML-Meta-Tag nötig.

---

## 1. Routing & URL-Struktur

Astro i18n, Deutsch als Default **ohne Präfix**, Englisch unter `/en/`.

| Deutsch | Englisch |
|---|---|
| `/` | `/en/` |
| `/privacy` | `/en/privacy` |
| `/kalorienrechner` | `/en/calorie-calculator` |

```js
// astro.config.mjs
i18n: {
  locales: ['de', 'en'],
  defaultLocale: 'de',
  routing: { prefixDefaultLocale: false }
}
```

**Warum:** bestehende deutsche URLs bleiben exakt erhalten (kein `/de/`), keine kaputten Links/SEO-Verluste.

## 2. Übersetzungs-Dictionary

Neue Datei `src/i18n/ui.ts`:

- `locales`, `defaultLang = 'de'`, `languages = { de, en }`
- `ui = { de: {...}, en: {...} }` – enthält **kurze Labels UND strukturierte Inhaltsblöcke** (FAQ-Arrays, Pain-Points-Arrays, Übungslisten, Feature-Texte).
- `useTranslations(lang)` → `t(key)` mit Fallback auf Deutsch.
- Meta-Texte (title/description/OG) pro Sprache und pro Seite.

## 3. Eine Struktur, zwei Sprachen

Der HTML-Körper wandert aus den Seiten in lang-bewusste Komponenten:

- `HomeContent.astro` – gesamter Body der bisherigen `index.astro`, Texte über `t()`. CSS bleibt in der Komponente.
- `PrivacyContent.astro` – Datenschutz lang-aware; Impressum-Block nur DE (bzw. mit kurzem EN-Hinweis "Impressum (German law)").
- `CaloriePageContent.astro` – SEO-Inhalt der Rechner-Seite.
- `CalorieCalculator.astro` – bestehend; alle UI-Strings + JS-Texte (Modi, Hinweise, Warnungen, Ergebnis-Note) ins Dictionary, `lang`-Prop.

Seiten-Dateien werden schlanke Wrapper:

```
src/pages/index.astro               → <Layout lang="de" page="home"><HomeContent lang="de"/></Layout>
src/pages/en/index.astro            → lang="en"
src/pages/privacy.astro             → de
src/pages/en/privacy.astro          → en
src/pages/kalorienrechner.astro     → de
src/pages/en/calorie-calculator.astro → en
```

→ Layout-/Struktur-Änderungen künftig nur **einmal**.

## 4. Automatische Spracherkennung (Browsersprache)

Inline-Script ganz oben im `<head>` (synchron, kein Flackern):

```js
(function(){
  try {
    if (localStorage.getItem('ds_lang')) return; // Wahl/Besuch bereits aufgelöst
    var onEn = location.pathname === '/en' || location.pathname.indexOf('/en/') === 0;
    var prefersEn = (navigator.language || '').toLowerCase().indexOf('en') === 0;
    var target = prefersEn ? 'en' : 'de';
    localStorage.setItem('ds_lang', target);   // nur einmal automatisch
    if (target === 'en' && !onEn) {
      location.replace('/en' + location.pathname + location.search + location.hash);
    } else if (target === 'de' && onEn) {
      location.replace((location.pathname.replace(/^\/en/, '') || '/') + location.search + location.hash);
    }
  } catch(e){}
})();
```

- Nur beim **ersten Besuch** (kein `ds_lang`). Danach nie wieder automatisch → keine Loops.
- **Manueller `DE | EN`-Schalter** in der Nav setzt `ds_lang` und überstimmt die Automatik dauerhaft.
- Bots: `navigator.language` oft leer → Default DE, kein Redirect; sie crawlen beide Sprachen über hreflang.
- Pfad-Mapping: DE-Pfad `X` ↔ `/en` + `X`. Da DE unpräfixiert und EN exakt gespiegelt unter `/en/`, ist das Mapping verlustfrei.

## 5. SEO

- `<html lang>` dynamisch (`de`/`en`).
- `hreflang`-Tags je Seite: `de`, `en`, `x-default` → Deutsch; gegenseitig verlinkt.
- Canonical pro Sprache (selbst-referenzierend).
- `og:locale` dynamisch (`de_DE` / `en_US`) + `og:locale:alternate`.
- Title/Description/OG je Sprache + je Seite aus Dictionary.
- Sitemap (`@astrojs/sitemap`) nimmt `/en/`-Seiten automatisch mit; optional i18n-Config für hreflang in der Sitemap.

## 6. Kalorienrechner-Seite (SEO/AEO)

**Was der Rechner ist:** Kalorienbedarf- & Defizit-Rechner für Männer (Mifflin-St-Jeor, fester PAL 1,55 = Bürojob + 2× Kraft + 1× Cardio). BMR → Tagesbedarf → Zielkalorien mit Defizit, 12-Wochen-Prognose, Sicherheits-Warnungen. **Kein** Food-Tracking.

### Keyword-Strategie (DE)

| Kategorie | Keywords |
|---|---|
| Primär | Kalorienrechner Mann, Kalorienbedarf berechnen Mann, Kaloriendefizit berechnen |
| Sekundär | Kalorienrechner Muskelaufbau, Kalorienbedarf Krafttraining, Grundumsatz/TDEE berechnen Mann |
| Long Tail (Hebel!) | wie viele kalorien zum abnehmen mann, fett verlieren muskeln aufbauen gleichzeitig, kaloriendefizit muskeln halten, abnehmen ab 40 mann kalorien, kalorienbedarf bürojob wenig sport |

**Realismus:** Generisches "Kalorienrechner" ist von YAZIO/Chefkoch/AOK dominiert. Hebel = Long-Tail (Mann + Krafttraining + "Fett weg, Muskeln halten").

### "Suchen X – meinen Y"

- **"Kalorienzähler"** → meint meist eine Food-Tracking-App. Dad Strong ist das **nicht** → nicht als Haupt-Keyword. Stattdessen im Text/FAQ abgrenzen ("Du willst Essen tracken? Das macht Dad Strong nicht – es zeigt dir, *wie viele* Kalorien du brauchst.").
- "Kalorienrechner" generisch → Differenzierung: Mann, Krafttraining, Recomposition.
- "Abnehmrechner" → über H2/FAQ abfangen.

### Seitenaufbau

H1 (keyword-reich) → Intro → **Rechner** (bestehende Komponente) → H2 Methodik (BMR/TDEE/Mifflin-St-Jeor, Fachbegriffe erklärt, E-E-A-T) → H2 "Wie viele Kalorien zum Abnehmen als Mann?" → H2 "Fett verlieren UND Muskeln halten" → **FAQ + FAQPage-Schema** → CTA zur App → interne Links Startseite ↔ Rechner.

### EN-Keywords (Rechner)

Primär: calorie calculator for men, calorie deficit calculator, TDEE calculator men. Long Tail: how many calories to lose fat and keep muscle, calorie deficit to maintain muscle, calories to lose weight man over 40.

### AEO-FAQ (DE)

- Wie viele Kalorien sollte ein Mann essen, um abzunehmen?
- Wie berechne ich mein Kaloriendefizit?
- Kann man gleichzeitig Fett verlieren und Muskeln aufbauen?
- Wie viel Defizit pro Tag ist gesund?
- Was ist der Unterschied zwischen Grundumsatz und Tagesbedarf?
- Brauche ich eine App zum Kalorienzählen? (ehrliche Abgrenzung)

### Wording-Prinzip

Fachbegriffe als Erklärung, nicht als Hauptaussage. Copy-Stil der Seite beibehalten: kurz, direkt, kein KI-Ton, UPPERCASE-Labels.

## 7. Implementierungs-Phasen

1. `astro.config.mjs`: i18n-Config.
2. `src/i18n/ui.ts`: Locale-Config + `useTranslations` + Gerüst.
3. `Layout.astro`: lang-Prop, dynamische Meta/OG, hreflang, og:locale, Auto-Redirect-Script.
4. `LangSwitcher.astro`.
5. `HomeContent.astro`: Body aus `index.astro` extrahieren, Strings → Dictionary (DE), EN übersetzen.
6. DE/EN Home-Wrapper-Seiten.
7. `PrivacyContent.astro` + DE/EN-Seiten.
8. `CalorieCalculator.astro` lang-aware; `CaloriePageContent.astro`; DE/EN Rechner-Seiten + FAQPage-Schema.
9. Build + Verifikation.

## 8. Verifikation

- `npm run build` erzeugt alle 6 Routen ohne Fehler.
- Dev: Umschalter funktioniert, Wahl bleibt nach Reload; englischer Browser + leerer localStorage → Auto-Redirect nach `/en/`; keine Loops; kein Flackern.
- Gebautes HTML: korrekte `lang`, hreflang, canonical, og:locale je Seite; FAQPage-Schema valide.
- Keine Konsolenfehler.

## 9. Risiken & offene Punkte

- **Großer einmaliger Refactor** einer 2331-Zeilen-Datei → Sektion für Sektion, nach jedem Schritt Build/Optik prüfen.
- **Englische Marketing-Copy** wird von Claude entworfen → **User reviewt vor Livegang** (Tonalität, "kein Bullshit").
- **EN-Keyword-Markt** (calorie calculator) stark umkämpft → niedrigere Ranking-Erwartung als DE-Long-Tail.
- Verwaiste `CalorieCalculator.astro` wird wiederverwendet statt gelöscht.
