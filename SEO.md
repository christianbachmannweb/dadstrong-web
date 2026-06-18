# SEO Playbook – der operative Ranking-Loop

Wie wir gezielt neue, rankende Seiten bauen, intern verlinken und indexieren lassen.
Wiederverwendbar für beliebige Projekte, geerdet am Beispiel dadstrong-web.

> **Wo dieses Dokument hingehört:**
> - `seo-strategie` (Skill) = **Planung**: Keywords clustern, Seitenstruktur, „suchen X meinen Y", AEO. Vor dem Bauen.
> - **`SEO.md` (dieses Dokument)** = **operativer Loop**: aus einer Idee eine live indexierte Seite machen + topische Autorität aufbauen.
> - `seo-check` (Skill) = **Audit** der fertigen Seite (Meta, Headings, Schema, Alt-Texte, Sitemap).
> - `multilingual.md` = i18n-Mechanik (jede neue Seite zweisprachig, hreflang, Sitemap-Alternates).

Sprache: Deutsch (Prosa), Englisch (Code). Stil wie im Projekt.

---

## 0. Grundprinzipien (für Produkt-Sites wie Dad Strong)

1. **Eine Seite = ein Keyword-Cluster** mit klarem Such-Intent. Niemals zwei Themen auf eine Seite.
2. **Qualität vor Masse.** Wir sind **kein** programmatic-SEO-Massenbetrieb. Lieber 5 starke Seiten als 50 dünne. Dünne/duplizierte Landingpages = Google-Risiko (Thin Content, Doorway Pages, „scaled content abuse").
3. **Intent zuerst, Keyword zweitens.** Was will die Person, die das sucht — und kann unsere Seite/App das ehrlich liefern? Wenn nicht: nicht targeten (oder klar abgrenzen, siehe „suchen X meinen Y" in `seo-strategie`).
4. **Interne Verlinkung ist Pflicht**, nicht optional (siehe §4). Jede neue Seite bekommt kontextuelle Links von bestehenden, starken Seiten.
5. **E-E-A-T:** echter Autor (Christian), transparente Methodik, ehrliche Aussagen. Kein KI-Ton, kein Bullshit (CLAUDE.md-Copy-Stil).
6. **Zweisprachig by default** (DE + EN) gemäß `multilingual.md` — eigener Slug & Keyword pro Sprache.

---

## 1. Der Loop (wiederholbar, Schritt für Schritt)

```
Branch → Read-only-Analyse → Cluster wählen → planen (seo-strategie)
   → bauen (DE+EN, Schema) → intern verlinken → Audit (seo-check) + Build
   → PR → merge main → Coolify deploy → GSC (Sitemap + Indexierung)
   → Supporting-Content (optional) → Monitoring → wiederholen
```

**Schritt 0 — Branch von `main`.** Pro neuer Seite ein eigener Branch (`feat/seo-<thema>`).
Saubere Diffs, einfacher PR, `main` bleibt deploybar.

**Schritt 1 — Read-only-Analyse (Logik, kostenlos).** Bestehenden Code lesen:
- Wofür targeten wir aktuell (H1/H2, Title, Slugs, Content)?
- Welche Cluster fehlen, würden aber zur App/Zielgruppe passen?
- Keine kostenpflichtigen Tools nötig — erst denken, dann ggf. validieren.

**Schritt 2 — Keyword-Cluster wählen** (kostenlose Quellen, siehe §3). Optional mit Zahlen
validieren (SEMrush-MCP *falls vorhanden*). Auswahlkriterium: realistischer Wettbewerb
(Long-Tail!) **und** ehrliche Passung zum Produkt.

**Schritt 3 — Seite planen mit dem `seo-strategie`-Skill.** Liefert: primäres Keyword,
sekundäre/Long-Tail, „suchen X meinen Y"-Abgrenzungen, Seitenaufbau (H1/H2/FAQ), AEO-Fragen.

**Schritt 4 — Seite bauen.**
- Slug mit Keyword, lokalisiert (`/<de-slug>` ↔ `/en/<en-slug>`), in `routes` (`src/i18n/ui.ts`) eintragen.
- Content ins Dictionary (`src/i18n/<page>.ts`), DE + EN. Struktur in `*Content.astro`.
- H1 keyword-reich, H2-Struktur, echte FAQ + **FAQPage-Schema** (AEO), CTA zur App.
- Meta/OG/hreflang/canonical kommen automatisch über `Layout.astro` (page-Key + lang).
- Wording-Prinzip: Fachbegriff als Erklärung einbetten, nicht als Hauptaussage.

**Schritt 5 — Intern verlinken (§4).** Von bestehenden, indexierten/starken Seiten
kontextuelle Links auf die neue Seite setzen. Footer-Link allein reicht nicht.

**Schritt 6 — Audit + Build.** `seo-check`-Skill laufen lassen; dann
`npm run build` + Verifikations-Greps (siehe `multilingual.md` §7: lang/canonical/hreflang/
Schema/Leak-Check). Erst grün, dann PR.

**Schritt 7 — PR → merge `main`.** PR mit kurzer Beschreibung; nach Review in `main` mergen.

**Schritt 8 — Deploy (Coolify).** Push auf `main` → Coolify baut & deployed automatisch
(Webhook). Danach live prüfen: HTTP 200 auf neuer Route, Content/hreflang vorhanden.

**Schritt 9 — Google Search Console.**
- Sitemap ist automatisch aktuell (`sitemap-index.xml`); einmal in GSC eingereicht reicht.
- Neue URL: **URL-Prüfung → „Indexierung beantragen"** (auch für DE *und* EN).
- Erwartung: neue Domain/Seite braucht **Tage bis Wochen** bis zum Index. „Beantragen"
  beschleunigt, garantiert nicht.

**Schritt 10 — Supporting-Content (optional, nur bei echtem Mehrwert).** Pillar-Seite +
1–3 unterstützende Artikel/FAQ rund um den Cluster → topische Autorität. **Kein** dünner
KI-Massentext — echter Nutzen, Christians Stimme, sonst lassen.

**Schritt 11 — Monitoring.** Nach 1–4 Wochen GSC → Leistung: Impressions/Klicks/Position je
Query. Daraus die nächste Seite/den nächsten Long-Tail ableiten → Loop von vorn.

---

## 2. Was wir aus dem Referenz-Video übernehmen — und was nicht

| Übernehmen | Weglassen / Vorsicht |
|---|---|
| Eine Seite pro Cluster, Branch+PR-Workflow | Affiliate-/Tool-Werbung (Harbor, SEMrush-Links) |
| Logik-first-Analyse ohne Paid-Tools | SEMrush-MCP als „Pflicht" — bei uns optional |
| **Interne Verlinkung von starken Seiten** | **Massen-Generierung** dünner Landingpages |
| Topische Cluster (Pillar + Blogs) | KI-Massencontent ohne Review (Policy-Risiko) |
| GSC: einreichen + Indexierung beantragen | Seine Beispiel-Themen (B2B-SaaS) — Verfahren ja, Themen nein |

---

## 3. Kostenlose Keyword-Methoden (ohne Paid-Tools)

- **GSC → Leistung → Suchanfragen:** wofür wir bereits Impressions bekommen (Gold für
  „fast-rankende" Long-Tails, die mit etwas Content auf Seite 1 kämen). Das ist die beste,
  ehrlichste Quelle — eigene reale Daten.
- **Google-Autocomplete** + **„Ähnliche Fragen" (People Also Ask)** + **„Ähnliche Suchanfragen"** unten.
- **Google Trends** für Saisonalität/Vergleich von Begriffen.
- **Autocomplete-Tricks:** „kalorienrechner * mann", „wie viele kalorien *".
- Optional (Paid): SEMrush-MCP zur Zahlen-Validierung — nice-to-have, nicht nötig.

---

## 4. Interne Verlinkung — die unterschätzte Stellschraube

Die wirkungsvollste Taktik aus dem Video. Konkret:
1. **Bestehende, indexierte Seiten finden** (GSC zeigt, welche ranken).
2. Von dort **kontextuelle In-Text-Links** auf die neue Seite setzen (nicht nur Footer).
   Beispiel: in einem Ernährungs-/Abnehm-Abschnitt der Startseite auf `/kalorienrechner/` verlinken.
3. **Beschreibender Ankertext** mit dem Ziel-Keyword (nicht „hier klicken").
4. Neue Seite verlinkt zurück auf relevante starke Seiten (App-CTA, verwandte Themen).
5. Sprache sauber halten: DE-Links → DE-Ziele, EN-Links → EN-Ziele.

> Status dadstrong: Footer-Link Start → `/kalorienrechner/` existiert. **To do:** kontextueller
> In-Text-Link aus einem passenden Startseiten-/FAQ-Abschnitt auf den Rechner.

---

## 5. Fehler vermeiden (Checkliste der Risiken)

- **Thin/Doorway Content:** jede Seite muss eigenständig nützlich sein. Im Zweifel: nicht bauen.
- **Keyword-Kannibalisierung:** nicht zwei Seiten auf dasselbe Keyword. Ein Cluster = eine Seite.
- **Scaled Content Abuse:** keine KI-Massenartikel ohne echten Mehrwert/Review.
- **Falscher Intent:** Begriffe, die etwas anderes meinen (z. B. „Kalorienzähler" = Food-Tracker),
  nicht hart targeten — abgrenzen (siehe `seo-strategie`).
- **Fehlende interne Links:** neue Seite verkümmert ohne Links von starken Seiten.
- **Sprach-/hreflang-Fehler:** siehe Verifikations-Greps in `multilingual.md` §7.

---

## 6. Dad-Strong Seiten-Backlog (Ideen, priorisiert)

Nur bauen, was echten Nutzen bringt und ehrlich zur App passt. Vor dem Bau jeweils
`seo-strategie` laufen lassen.

| Idee (Cluster) | Intent | Passung zur App | Prio |
|---|---|---|---|
| Kalorienrechner für Männer ✅ live | Tool/Info | hoch | erledigt |
| „Krafttraining für Väter / mit wenig Zeit" | Info | Kern der App | hoch |
| „Ganzkörper-Trainingsplan 2× pro Woche" | Info | Kern (Plan A/B) | hoch |
| „Wie viel Eiweiß zum Muskelaufbau (Mann)" | Info | ergänzt Rechner-Cluster | mittel |
| „Zone 2 Training – Herzfrequenz & Nutzen" | Info | optionaler App-Teil | mittel |
| „Abnehmen ab 40 als Mann" | Info | Recomp-Cluster | mittel |

Jede dieser Seiten würde intern mit Rechner + Startseite + App-CTA verlinkt.

---

## 7. Definition of Done (pro neue SEO-Seite)

- [ ] Eigener Branch, PR, in `main` gemerged
- [ ] Ein klarer Keyword-Cluster, Slug lokalisiert (DE+EN), in `routes` eingetragen
- [ ] H1 keyword-reich, saubere H2-Struktur, echte FAQ + FAQPage-Schema
- [ ] DE + EN vollständig (Dictionary), hreflang/canonical/og automatisch korrekt
- [ ] **Kontextuelle interne Links** von ≥1 starken Bestandsseite gesetzt
- [ ] `seo-check`-Audit bestanden, Build grün, Verifikations-Greps ok (`multilingual.md` §7)
- [ ] Live (200) nach Coolify-Deploy, Content/Schema live geprüft
- [ ] GSC: in Sitemap enthalten, „Indexierung beantragt" (DE + EN)
- [ ] Nach 1–4 Wochen GSC-Leistung gecheckt, nächsten Schritt abgeleitet
