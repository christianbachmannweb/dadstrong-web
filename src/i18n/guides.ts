import type { Lang } from './ui';

interface GuideStep {
  title: string;
  body: string;
}

interface GuideSection {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  steps: GuideStep[];
  note?: string;
}

interface LevelRow {
  level: string;
  strength: string;
  pullups: string;
  run: string;
  carry: string;
}

export interface GuidesContent {
  nav: { back: string; beta: string };
  hero: { label: string; title: string[]; lead: string; status: string };
  jumpLabel: string;
  sections: GuideSection[];
  levels: {
    title: string;
    intro: string;
    columns: string[];
    rows: LevelRow[];
    renewal: string;
  };
  video: { label: string; title: string; body: string };
  cta: { title: string; body: string; button: string };
  footer: { privacy: string; calculator: string; contact: string };
}

const de: GuidesContent = {
  nav: { back: 'Zur Startseite', beta: 'Beta testen' },
  hero: {
    label: 'DAD STRONG GUIDES',
    title: ['Weniger suchen.', 'Einfach trainieren.'],
    lead: 'Kurze, konkrete Anleitungen für den Trainingsplan und die wichtigsten Funktionen der App.',
    status: 'Die Video-Guides entstehen gerade. Die wichtigsten Antworten findest du hier schon vollständig.',
  },
  jumpLabel: 'Direkt zum Thema',
  sections: [
    {
      id: 'erstes-training',
      number: '01',
      eyebrow: 'DER EINSTIEG',
      title: 'Dein erster 12-Wochen-Block',
      intro: 'Dad Strong führt dich abwechselnd durch Training A und B. Zwei Einheiten pro Woche sind der Kern; die App protokolliert deine Leistung und schlägt die nächste Steigerung vor.',
      steps: [
        { title: 'Plan festlegen', body: 'Wähle vor dem Block die Varianten, die zu deinem Gym, deiner Anatomie und deinen Einschränkungen passen.' },
        { title: 'Geführt trainieren', body: 'Warm-up, Arbeitssätze und Pausen laufen in einer festen Reihenfolge. Gewichte und Wiederholungen werden direkt am Satz gespeichert.' },
        { title: 'Progression übernehmen', body: 'Nach dem Trainingsblock zeigt dir die App einen klaren Vorschlag für die nächste Einheit.' },
      ],
      note: 'Die gewählten Übungen bleiben während des 12-Wochen-Blocks bestehen. So bleibt deine Entwicklung wirklich vergleichbar.',
    },
    {
      id: 'uebungen-tauschen',
      number: '02',
      eyebrow: 'KONTROLLIERTE AUSWAHL',
      title: 'Übungen tauschen, ohne den Plan zu verwässern',
      intro: 'Du baust keinen beliebigen Trainingsplan. Du wählst eine freigegebene Variante desselben Bewegungsmusters.',
      steps: [
        { title: 'Bewegungsmuster bleibt', body: 'Kniebeuge bleibt Kniebeuge, horizontales Ziehen bleibt horizontales Ziehen und Heben bleibt Heben.' },
        { title: 'Zwei bis drei Alternativen', body: 'Freie Gewichte haben Vorrang. Sinnvolle Beispiele sind Safety-Bar- oder Box-Squat, Kurzhantel-Bankdrücken, T-Bar- oder Landmine-Row und Trap-Bar- oder Sumo-Kreuzheben.' },
        { title: 'Danach fest', body: 'Die Entscheidung gilt für den gesamten Block. Kein spontanes Wechseln nach Tagesform und kein Verlust der Vergleichbarkeit.' },
      ],
    },
    {
      id: 'carry-mission',
      number: '03',
      eyebrow: 'GRIP · RUMPF · AUSDAUER',
      title: 'So funktioniert die Carry Mission',
      intro: 'Die Carry Mission ist eine Stoppuhr unter Last. Du legst Zielzeit, Gesamtgewicht und Tool fest und trägst so lange du kannst.',
      steps: [
        { title: 'Mission einstellen', body: 'Wähle 10, 15, 20 oder 30 Minuten, gib das gesamte Gewicht ein und entscheide dich für Kettlebell, Weste, Kurzhantel oder Langhantel.' },
        { title: 'Pause oder beenden', body: 'Beim Pausieren stoppt die aktive Tragezeit. Wenn du nicht weiterkannst, beendest du die Mission direkt aus der Pause.' },
        { title: 'Automatisch dokumentiert', body: 'Zeit, Gesamtgewicht, Tool und Ergebnis werden in deiner Progression gespeichert. Signale markieren 10, 20 und 30 Minuten sowie einen neuen persönlichen Rekord.' },
      ],
      note: 'Für das Badge zählt die tatsächlich gesammelte Tragezeit mit mindestens dem geforderten Gesamtgewicht.',
    },
    {
      id: 'fortschrittsfotos',
      number: '04',
      eyebrow: 'MEINE REISE',
      title: 'Vergleichbare Fortschrittsfotos',
      intro: 'Gewicht allein zeigt nicht die ganze Veränderung. Dad Strong hält deshalb Maße und Fotos an einem Ort zusammen.',
      steps: [
        { title: 'Smartphone aufstellen', body: 'Nutze nach Möglichkeit denselben Ort, dieselbe Entfernung und ähnliche Lichtverhältnisse.' },
        { title: 'Kamera wählen', body: 'Wechsle direkt in der Aufnahme zwischen Front- und Rückkamera.' },
        { title: 'Fünf Sekunden vorbereiten', body: 'Der sichtbare Selbstauslöser gibt dir genug Zeit für Front-, Rücken- und Seitenansicht.' },
      ],
    },
  ],
  levels: {
    title: 'Dad-Strong-Level: Alle sechs Anforderungen zählen',
    intro: 'Kniebeuge, Bankdrücken und Kreuzheben zählen jeweils mit mindestens fünf Wiederholungen. Dazu kommen Klimmzüge, ein Lauftest und die Carry Mission. Ein Level wird erst aktiv, wenn alle sechs Ziele erfüllt sind.',
    columns: ['Level', 'Kraft × 5', 'Klimmzüge', 'Lauf', 'Carry'],
    rows: [
      { level: 'Active Dad', strength: '60 / 45 / 80 kg', pullups: '2', run: '2 km abschließen', carry: '15 min · 16 kg' },
      { level: 'DadStrong', strength: '100 / 75 / 130 kg', pullups: '8', run: '3 km < 16:30', carry: '30 min · 24 kg' },
      { level: 'DadStrong Elite', strength: '130 / 100 / 170 kg', pullups: '12', run: '5 km < 24:00', carry: '30 min · 32 kg' },
      { level: 'Dad Legend', strength: '160 / 120 / 210 kg', pullups: '18', run: '5 km < 21:00', carry: '30 min · 48 kg' },
    ],
    renewal: 'Der passende Lauftest ist 183 Tage gültig. Danach muss er erneut bestanden werden, damit das Badge aktiv bleibt. Die Kraft-, Klimmzug- und Carry-Werte werden weiterhin automatisch aus deiner Progression gelesen.',
  },
  video: {
    label: 'VIDEO-GUIDES',
    title: 'In Vorbereitung',
    body: 'Als Nächstes ergänzen kurze Hochformat-Videos die einzelnen Anleitungen. Sie werden mit Untertiteln, klaren Kapiteln und denselben Schritten wie hier eingebunden.',
  },
  cta: {
    title: 'Bereit für dein nächstes Training?',
    body: 'Dad Strong ist aktuell kostenlos über TestFlight verfügbar.',
    button: 'In TestFlight testen',
  },
  footer: { privacy: 'Datenschutz & Impressum', calculator: 'Kalorienrechner', contact: 'Kontakt' },
};

const en: GuidesContent = {
  nav: { back: 'Back to home', beta: 'Try the beta' },
  hero: {
    label: 'DAD STRONG GUIDES',
    title: ['Less searching.', 'Just train.'],
    lead: 'Short, practical guides to the training plan and the app’s most important features.',
    status: 'Video guides are in production. The essential answers are already available here in full.',
  },
  jumpLabel: 'Jump to a topic',
  sections: [
    {
      id: 'first-workout',
      number: '01',
      eyebrow: 'GETTING STARTED',
      title: 'Your first 12-week block',
      intro: 'Dad Strong alternates between Workout A and B. Two sessions per week are the core; the app logs your performance and suggests the next increase.',
      steps: [
        { title: 'Set your plan', body: 'Before the block, choose the variants that fit your gym, anatomy and limitations.' },
        { title: 'Follow the session', body: 'Warm-up, work sets and rest periods follow a fixed order. Weight and reps are saved at the set.' },
        { title: 'Apply progression', body: 'After the training block, the app gives you a clear suggestion for the next session.' },
      ],
      note: 'Your chosen exercises stay fixed throughout the 12-week block, keeping your progress genuinely comparable.',
    },
    {
      id: 'exercise-swaps',
      number: '02',
      eyebrow: 'CONTROLLED CHOICE',
      title: 'Swap exercises without diluting the plan',
      intro: 'You are not building an arbitrary program. You choose an approved variant of the same movement pattern.',
      steps: [
        { title: 'The movement stays', body: 'A squat stays a squat, a horizontal pull stays a horizontal pull and a hinge stays a hinge.' },
        { title: 'Two or three alternatives', body: 'Free weights take priority. Useful examples include safety-bar or box squats, dumbbell bench press, T-bar or landmine rows and trap-bar or sumo deadlifts.' },
        { title: 'Then it stays fixed', body: 'The choice applies to the whole block. No spontaneous daily swaps and no loss of comparability.' },
      ],
    },
    {
      id: 'carry-mission',
      number: '03',
      eyebrow: 'GRIP · CORE · ENDURANCE',
      title: 'How the Carry Mission works',
      intro: 'Carry Mission is a stopwatch under load. Set a target time, total weight and tool, then carry for as long as you can.',
      steps: [
        { title: 'Set the mission', body: 'Choose 10, 15, 20 or 30 minutes, enter the total weight and select kettlebell, vest, dumbbell or barbell.' },
        { title: 'Pause or finish', body: 'Pausing stops active carry time. If you cannot continue, finish the mission directly from the paused state.' },
        { title: 'Logged automatically', body: 'Time, total weight, tool and result are saved in Progression. Signals mark 10, 20 and 30 minutes and a new personal record.' },
      ],
      note: 'For badges, the app counts actual accumulated carry time at or above the required total weight.',
    },
    {
      id: 'progress-photos',
      number: '04',
      eyebrow: 'MY JOURNEY',
      title: 'Comparable progress photos',
      intro: 'Body weight alone does not show the full change. Dad Strong keeps measurements and photos together in one place.',
      steps: [
        { title: 'Position your phone', body: 'Use the same location, distance and similar lighting whenever possible.' },
        { title: 'Choose the camera', body: 'Switch between the front and rear camera directly in the capture screen.' },
        { title: 'Take five seconds', body: 'The visible self-timer gives you time to prepare for front, back and side views.' },
      ],
    },
  ],
  levels: {
    title: 'Dad Strong levels: all six requirements count',
    intro: 'Squat, bench press and deadlift each count for at least five reps. Pull-ups, a run test and Carry Mission complete the set. A level only activates once all six targets are met.',
    columns: ['Level', 'Strength × 5', 'Pull-ups', 'Run', 'Carry'],
    rows: [
      { level: 'Active Dad', strength: '60 / 45 / 80 kg', pullups: '2', run: 'Complete 2 km', carry: '15 min · 16 kg' },
      { level: 'DadStrong', strength: '100 / 75 / 130 kg', pullups: '8', run: '3 km < 16:30', carry: '30 min · 24 kg' },
      { level: 'DadStrong Elite', strength: '130 / 100 / 170 kg', pullups: '12', run: '5 km < 24:00', carry: '30 min · 32 kg' },
      { level: 'Dad Legend', strength: '160 / 120 / 210 kg', pullups: '18', run: '5 km < 21:00', carry: '30 min · 48 kg' },
    ],
    renewal: 'The qualifying run test remains valid for 183 days. After that, it must be passed again to keep the badge active. Strength, pull-up and carry results continue to come automatically from your progression.',
  },
  video: {
    label: 'VIDEO GUIDES',
    title: 'In production',
    body: 'Short vertical videos will be added to each guide next. They will use captions, clear chapters and the same steps documented here.',
  },
  cta: {
    title: 'Ready for your next workout?',
    body: 'Dad Strong is currently free through TestFlight.',
    button: 'Try on TestFlight',
  },
  footer: { privacy: 'Privacy & Imprint', calculator: 'Calorie calculator', contact: 'Contact' },
};

export const guides: Record<Lang, GuidesContent> = { de, en };
