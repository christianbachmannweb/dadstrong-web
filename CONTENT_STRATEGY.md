# DadStrong.app – Struktur- und Content-Empfehlung

Stand: 12. Juli 2026

## Ziel der Website

DadStrong.app soll nicht nur eine lange Verkaufsseite sein. Die Website hat drei Aufgaben:

1. Das Problem und den Nutzen von Dad Strong in wenigen Sekunden verständlich machen.
2. Interessenten mit konkreten Produktbeweisen zur TestFlight-Beta führen.
3. Bestehenden Nutzern kurze, verlinkbare Anleitungen geben, die auch über Google und Instagram gefunden werden.

Die inhaltliche Klammer lautet **Dad Strong Guides**. Ein allgemeiner Fitness-Blog würde zu viel austauschbaren Inhalt erzeugen. Jeder Guide sollte eine konkrete Frage zur App oder zum Dad-Strong-System beantworten.

## Empfohlene Seitenstruktur

```text
/
├── Startseite
├── /guides/
│   ├── Erstes Training und 12-Wochen-Block
│   ├── Übungen kontrolliert tauschen
│   ├── Carry Mission
│   ├── Badge-Level und Erneuerung
│   └── Fortschrittsfotos
├── /kalorienrechner/
└── /privacy/

/en/ … identische englische Struktur
```

Der erste Ausbauschritt ist ein zweisprachiger Guide-Hub. Sobald Videos vorhanden sind, kann jeder Themenblock eine eigene URL erhalten. Leere Artikelseiten oder Platzhalter ohne echten Nutzen werden nicht veröffentlicht.

## Priorisierte Guides

1. **Dein erstes Training:** Ablauf, Warm-up, Arbeitssätze, Pausentimer und Progressionsvorschlag.
2. **Übungen tauschen:** Bewegungsmuster bleiben gleich; je Übung stehen zwei bis drei freigegebene Alternativen zur Wahl. Die Auswahl gilt für den folgenden 12-Wochen-Block.
3. **Carry Mission:** Zielzeit, Gesamtgewicht, Tool-Auswahl, Pause/Beenden und Speicherung in der Progression.
4. **Dad-Strong-Badges:** Alle sechs Anforderungen müssen gleichzeitig erfüllt sein. Die Laufleistung ist sechs Monate gültig und erneuert das Badge-Fenster.
5. **Fortschrittsfotos:** Front-, Rücken- und Seitenansicht, Kamerawechsel und Fünf-Sekunden-Selbstauslöser.
6. **Herzfrequenz und Cardio:** Apple Health, Zone 2, Sprints und später Apple Watch.
7. **Wenn eine Woche ausfällt:** ohne Schuldgefühl sinnvoll in den A/B-Rhythmus zurückkehren.

## Seitenaufbau für jeden späteren Einzel-Guide

- Klare Frage als H1
- Antwort in zwei bis drei Sätzen direkt am Anfang
- Kurzes Hochformat-Video mit Untertiteln
- Schritt-für-Schritt-Anleitung
- Häufigster Fehler und dessen Lösung
- Passender App-Screenshot
- Eine klare Aktion: App testen oder nächstes Training starten
- Aktualisierungsdatum und DE/EN-Sprachalternative

Videos erhalten eine aussagekräftige Vorschau, sichtbaren Begleittext und Untertitel. So bleibt der Inhalt auch ohne Ton verständlich und für Suchmaschinen erfassbar.

## Content-System für Website und Instagram

Eine Aufnahme wird mehrfach genutzt:

```text
1 How-to-Aufnahme
→ 1 vollständiger Website-Guide
→ 3 Reels: Problem, Anleitung, Ergebnis
→ 3–5 Story-Sequenzen
→ 1 Werbeanzeigen-Variante mit klarem TestFlight-CTA
```

Empfohlener Takt zum Start:

- 1 neuer oder substanziell aktualisierter Guide alle zwei Wochen
- 3 Reels pro Woche
- Stories an Trainingstagen und bei Produktänderungen
- Anzeigen zunächst mit kleinen Budgets und mehreren Hooks testen

Nicht Reichweite allein optimieren. Entscheidende Messpunkte sind Klicks zu TestFlight, Installationen, erstes abgeschlossenes Training und die Rückkehr zum zweiten Training.

## Redaktionsprinzipien

- Aus eigener Erfahrung als Vater sprechen, nicht wie ein allgemeines Fitness-Magazin.
- Produktfunktionen konkret zeigen statt abstrakt versprechen.
- Keine Ergebnisse garantieren.
- Den festen Plan korrekt erklären: kontrollierte Auswahl vor dem Block, keine beliebigen Wechsel währenddessen.
- Badge-Anforderungen immer vollständig und mit dem Hinweis auf die sechsmonatige Laufgültigkeit darstellen.
- Deutsch und Englisch im selben Arbeitsschritt aktualisieren.
- Produkttexte vor Veröffentlichung gegen die aktuelle iOS-App prüfen.

## Technische Leitplanken

- Statische Astro-Seiten beibehalten; für die erste Ausbaustufe ist kein CMS nötig.
- Videos nicht über PocketBase ausliefern. PocketBase ist für App-Daten geeignet, aber kein spezialisiertes Video-CDN.
- Kurze UI-Loops können komprimiert in der Website liegen. Längere How-to-Videos besser über einen Video-Dienst/CDN mit adaptivem Streaming ausliefern.
- Posterbild, Untertitel, feste Abmessungen und Lazy Loading vorsehen.
- Erst bei regelmäßigem Redaktionsbetrieb ein Headless-CMS ergänzen. Bis dahin bleiben Inhalte versioniert im Repository.

## Umsetzung in diesem Stand

- Zweisprachiger Guide-Hub unter `/guides/` und `/en/guides/`
- Guides in Navigation und Footer verlinkt
- Veraltete Aussage zur fehlenden Plananpassung korrigiert
- Carry Mission, Badge-System und Foto-Selbstauslöser in die Produktkommunikation aufgenommen
- Struktur für spätere Einzel-Guides vorbereitet
