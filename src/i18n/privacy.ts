// ─────────────────────────────────────────────────────────────
// Content for the privacy / imprint page.
// The privacy policy is translated; the imprint stays German (legally required
// under § 5 TMG) with a short English note on the EN page.
// Inline markup (links, <strong>, <br>) is stored as html strings and rendered
// with set:html — content is fully author-controlled (no user input).
// ─────────────────────────────────────────────────────────────

import type { Lang } from './ui';

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; html: string }
  | { type: 'ul'; items: string[] }
  | { type: 'box'; html: string };

export interface PrivacyContent {
  navBack: string;
  dsLabel: string;
  dsTitle: string; // may contain &shy;
  dsBlocks: Block[];
  imLabel: string;
  imTitle: string;
  imNote?: string; // EN-only note that the imprint follows in German
  imBlocks: Block[];
}

const ADDRESS = 'Christian Bachmann<br>Lachgasse 4<br>73110 Hattenhofen';
const EMAIL_LINK = '<a href="mailto:info@dadstrong.app">info@dadstrong.app</a>';

// German imprint — identical text on both language versions (legal requirement).
const imBlocks: Block[] = [
  { type: 'h2', text: 'Angaben gemäß § 5 TMG' },
  { type: 'p', html: ADDRESS },
  { type: 'h2', text: 'Kontakt' },
  { type: 'p', html: `E-Mail: ${EMAIL_LINK}` },
  { type: 'h2', text: 'Hinweis' },
  { type: 'p', html: 'Dad Strong ist ein privates Freizeitprojekt und wird nicht gewerblich betrieben.' },
  { type: 'h2', text: 'Haftung für Inhalte' },
  {
    type: 'p',
    html: 'Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Als Privatperson übernehme ich keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte. Die auf dieser Website enthaltenen Trainings- und Ernährungshinweise ersetzen keine medizinische Beratung.',
  },
  { type: 'h2', text: 'Haftung für Links' },
  {
    type: 'p',
    html: 'Diese Website enthält Links zu externen Websites Dritter (App Store). Auf deren Inhalte haben wir keinen Einfluss und übernehmen daher keine Gewähr.',
  },
];

const de: PrivacyContent = {
  navBack: '← Zurück',
  dsLabel: 'Rechtliches',
  dsTitle: 'Datenschutz&shy;erklärung',
  dsBlocks: [
    {
      type: 'box',
      html: '<strong>Kurzfassung:</strong> Die App Dad Strong sammelt keine persönlichen Daten, sendet nichts an Server und enthält keine Tracking- oder Analyse-Tools. Alle App-Daten bleiben auf deinem Gerät. Diese Website misst die Reichweite anonym mit Plausible (ohne Cookies) — Details unten.',
    },
    { type: 'h2', text: 'Verantwortlicher' },
    { type: 'p', html: `${ADDRESS}<br>${EMAIL_LINK}` },
    { type: 'h2', text: 'Grundsatz' },
    {
      type: 'p',
      html: 'Die App Dad Strong verarbeitet ausschließlich Daten, die für die Kernfunktionen der App notwendig sind. Es werden keine Daten an Dritte weitergegeben, kein Nutzerverhalten analysiert und keine Werbung geschaltet.',
    },
    { type: 'h2', text: 'Datenspeicherung' },
    { type: 'p', html: 'Alle Daten werden <strong>lokal auf deinem Gerät</strong> gespeichert:' },
    {
      type: 'ul',
      items: [
        'Trainingsdaten (Training A &amp; B, Sätze, Gewichte, Wiederholungen)',
        'Körperdaten (Gewicht, Körpermaße)',
        'Fortschrittsfotos',
      ],
    },
    {
      type: 'p',
      html: 'Es gibt keinen Server, kein Backend, keine Cloud-Synchronisation durch Dad Strong. iOS kann die App-Daten im Rahmen des normalen iCloud-Backups sichern — das liegt vollständig in Apples Verantwortung und deiner Kontrolle.',
    },
    { type: 'h2', text: 'Berechtigungen' },
    { type: 'h3', text: 'Kamera' },
    {
      type: 'p',
      html: 'Dad Strong nutzt die Kamera ausschließlich für Fortschrittsfotos im Körper-Dokumentations-Bereich. Fotos werden lokal gespeichert und nicht übertragen.',
    },
    { type: 'h3', text: 'Fotobibliothek' },
    {
      type: 'p',
      html: 'Zugriff auf die Fotobibliothek wird benötigt um Fortschrittsfotos zu lesen und anzuzeigen. Kein Zugriff auf andere Fotos.',
    },
    { type: 'h3', text: 'Apple Health (HealthKit)' },
    { type: 'p', html: 'Dad Strong liest und schreibt folgende Gesundheitsdaten:' },
    {
      type: 'ul',
      items: [
        '<strong>Lesen:</strong> Körpergewicht (zur Anzeige im Körper-Check-In)',
        '<strong>Schreiben:</strong> Absolvierte Workouts (Krafttraining, Zone 2, Sprint) inkl. Herzfrequenz-Verlauf',
      ],
    },
    {
      type: 'p',
      html: 'Alle HealthKit-Daten verbleiben in deiner Apple Health App. Dad Strong sendet diese Daten nicht an Server.',
    },
    { type: 'h3', text: 'Bluetooth' },
    {
      type: 'p',
      html: 'Bluetooth wird zur Verbindung mit einem externen Herzfrequenzsensor genutzt (z.&thinsp;B. Brustgurt). Die Verbindung ist temporär während einer Trainingseinheit.',
    },
    { type: 'h3', text: 'Benachrichtigungen' },
    {
      type: 'p',
      html: 'Dad Strong sendet lokale Benachrichtigungen als Trainings-Erinnerung (standardmäßig: Sonntags 6:30 Uhr). Es werden keine Remote-Push-Benachrichtigungen über externe Server versendet.',
    },
    { type: 'h2', text: 'Drittanbieter' },
    {
      type: 'p',
      html: 'Die App Dad Strong enthält keine Drittanbieter-SDKs, keine Analyse-Tools (z.&thinsp;B. Firebase, Crashlytics), keine Werbenetze und kein Tracking.',
    },
    { type: 'h2', text: 'Webanalyse (diese Website)' },
    {
      type: 'p',
      html: 'Diese Website verwendet Plausible Analytics zur anonymen Reichweitenmessung. Plausible setzt <strong>keine Cookies</strong> und speichert <strong>keine personenbezogenen Daten</strong>. Erfasst werden ausschließlich aggregierte Statistiken (z.&thinsp;B. Seitenaufrufe, Verweisquelle, Land, Geräte- und Browsertyp). IP-Adressen werden nicht gespeichert, eine Wiedererkennung einzelner Personen ist nicht möglich. Die Auswertung läuft über eine selbst gehostete Plausible-Instanz. Mehr dazu: <a href="https://plausible.io/data-policy" target="_blank" rel="noopener">plausible.io/data-policy</a>.',
    },
    { type: 'h2', text: 'Deine Rechte' },
    {
      type: 'p',
      html: 'Da Dad Strong keine personenbezogenen Daten auf Servern speichert, entfallen die meisten DSGVO-Auskunftspflichten. Alle deine Daten liegen auf deinem Gerät und können dort jederzeit gelöscht werden — durch Löschen der App oder einzelner Einträge in der App selbst.',
    },
    { type: 'p', html: `Bei Fragen erreichst du mich unter: ${EMAIL_LINK}` },
    { type: 'h2', text: 'Änderungen' },
    {
      type: 'p',
      html: 'Diese Datenschutzerklärung gilt für die App Dad Strong und diese Website. Bei wesentlichen Änderungen wird die App-Version aktualisiert.',
    },
    { type: 'p', html: 'Stand: Mai 2026' },
  ],
  imLabel: 'Impressum',
  imTitle: 'Impressum',
  imBlocks,
};

const en: PrivacyContent = {
  navBack: '← Back',
  dsLabel: 'Legal',
  dsTitle: 'Privacy Policy',
  dsBlocks: [
    {
      type: 'box',
      html: '<strong>In short:</strong> The Dad Strong app collects no personal data, sends nothing to servers and contains no tracking or analytics tools. All app data stays on your device. This website measures traffic anonymously with Plausible (no cookies) — details below.',
    },
    { type: 'h2', text: 'Controller' },
    { type: 'p', html: `${ADDRESS}<br>${EMAIL_LINK}` },
    { type: 'h2', text: 'Principle' },
    {
      type: 'p',
      html: 'The Dad Strong app only processes data needed for the app\'s core functions. No data is shared with third parties, no user behavior is analyzed, and no ads are shown.',
    },
    { type: 'h2', text: 'Data storage' },
    { type: 'p', html: 'All data is stored <strong>locally on your device</strong>:' },
    {
      type: 'ul',
      items: [
        'Training data (Workout A &amp; B, sets, weights, reps)',
        'Body data (weight, measurements)',
        'Progress photos',
      ],
    },
    {
      type: 'p',
      html: 'There is no server, no backend, no cloud sync by Dad Strong. iOS may include the app\'s data in the normal iCloud backup — that is entirely Apple\'s responsibility and under your control.',
    },
    { type: 'h2', text: 'Permissions' },
    { type: 'h3', text: 'Camera' },
    {
      type: 'p',
      html: 'Dad Strong uses the camera solely for progress photos in the body-tracking area. Photos are stored locally and not transmitted.',
    },
    { type: 'h3', text: 'Photo library' },
    {
      type: 'p',
      html: 'Access to the photo library is needed to read and display progress photos. No access to other photos.',
    },
    { type: 'h3', text: 'Apple Health (HealthKit)' },
    { type: 'p', html: 'Dad Strong reads and writes the following health data:' },
    {
      type: 'ul',
      items: [
        '<strong>Read:</strong> body weight (to display in the body check-in)',
        '<strong>Write:</strong> completed workouts (strength training, Zone 2, sprint) including heart-rate data',
      ],
    },
    {
      type: 'p',
      html: 'All HealthKit data stays in your Apple Health app. Dad Strong does not send this data to any server.',
    },
    { type: 'h3', text: 'Bluetooth' },
    {
      type: 'p',
      html: 'Bluetooth is used to connect to an external heart-rate sensor (e.g. a chest strap). The connection is temporary, during a workout.',
    },
    { type: 'h3', text: 'Notifications' },
    {
      type: 'p',
      html: 'Dad Strong sends local notifications as a training reminder (default: Sundays at 6:30 a.m.). No remote push notifications are sent via external servers.',
    },
    { type: 'h2', text: 'Third parties' },
    {
      type: 'p',
      html: 'The Dad Strong app contains no third-party SDKs, no analytics tools (e.g. Firebase, Crashlytics), no ad networks and no tracking.',
    },
    { type: 'h2', text: 'Web analytics (this website)' },
    {
      type: 'p',
      html: 'This website uses Plausible Analytics for anonymous traffic measurement. Plausible sets <strong>no cookies</strong> and stores <strong>no personal data</strong>. Only aggregated statistics are recorded (e.g. page views, referrer, country, device and browser type). IP addresses are not stored and individual visitors cannot be identified. Analytics run on a self-hosted Plausible instance. More: <a href="https://plausible.io/data-policy" target="_blank" rel="noopener">plausible.io/data-policy</a>.',
    },
    { type: 'h2', text: 'Your rights' },
    {
      type: 'p',
      html: 'Because Dad Strong stores no personal data on servers, most GDPR disclosure obligations do not apply. All your data is on your device and can be deleted there at any time — by deleting the app or individual entries in the app itself.',
    },
    { type: 'p', html: `If you have questions, reach me at: ${EMAIL_LINK}` },
    { type: 'h2', text: 'Changes' },
    {
      type: 'p',
      html: 'This privacy policy applies to the Dad Strong app and this website. In case of significant changes, the app version will be updated.',
    },
    { type: 'p', html: 'Last updated: May 2026' },
  ],
  imLabel: 'Imprint',
  imTitle: 'Imprint',
  imNote: 'The following imprint is provided in German, as required by § 5 TMG (German law).',
  imBlocks,
};

export const privacy: Record<Lang, PrivacyContent> = { de, en };
