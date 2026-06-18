// ─────────────────────────────────────────────────────────────
// Content dictionary for the home page (index). German + English.
// Strings only — structure and styling live in HomeContent.astro.
// Multi-line text is stored as string arrays and joined with <br> in the template.
// ─────────────────────────────────────────────────────────────

import type { Lang } from './ui';

export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/7MQz3GNG';

interface Exercise {
  name: string;
  why: string;
}
interface Card {
  title: string;
  body: string;
}
interface Faq {
  q: string;
  a: string[];
}

export interface HomeContent {
  announcement: { pre: string; link: string };
  nav: { cta: string };
  hero: { label: string; tagline: string[]; body: string[]; tf: string };
  problem: {
    label: string;
    title: string;
    pains: string[];
    answerTitle: string;
    answerSub: string;
  };
  philosophy: {
    label: string;
    title: string[];
    lead: string;
    cards: Card[];
    mockLabel: string;
    mockCaption: string;
    mockAlt: string;
  };
  story: {
    label: string;
    pull: string;
    byline: string;
    paragraphs: string[];
  };
  plan: {
    label: string;
    title: string;
    lead: string;
    aTag: string;
    bTag: string;
    exercisesA: Exercise[];
    exercisesB: Exercise[];
    whyTitle: string;
    whyBody: string;
    progLabel: string;
    weeks: string[];
    progNote: string;
  };
  midcta: { heading: string; tf: string };
  app: {
    label: string;
    title: string[];
    lead: string;
    phoneWarmup: { label: string; alt: string };
    phoneTraining: { label: string; alt: string };
    phoneJourney: { label: string; alt: string };
    fTracking: Card;
    progMockHeader: string[];
    progMockRows: { name: string; before: string; now: string }[];
    fStreaks: Card;
    streakTypes: { icon: string; name: string; rule: string }[];
    superLabel: string;
    superBadge: string;
    fBody: Card;
    bodyPhotoLabels: string[];
    bodyStats: { label: string; val: string }[];
    fZone: Card;
    fWidget: Card;
    widgetAlt: string;
    fStructured: Card;
    durationLabels: string[];
    durationTimes: string[];
    durationNote: string;
    papaEyebrow: string;
    papaText: string[];
    papaValues: string[];
    papaClose: string;
  };
  optional: {
    label: string;
    title: string;
    lead: string;
    zone2: { label: string; title: string; body: string };
    sprint: { label: string; title: string; body: string };
  };
  faq: { label: string; title: string; items: Faq[] };
  cta: { label: string; quote: string; btn: string; meta: string };
  footer: { privacy: string; contact: string; copy: string };
  /** SoftwareApplication schema fields that need translation. */
  schema: { description: string; keywords: string };
}

const de: HomeContent = {
  announcement: { pre: 'App in Beta', link: 'Jetzt in TestFlight testen →' },
  nav: { cta: 'Beta testen' },
  hero: {
    label: 'FÜR VÄTER · TRAINING · iOS',
    tagline: ['Zwei Einheiten.', 'Echter Fortschritt.'],
    body: [
      'Für Väter mit Vollzeitjob, Kindern und Zugang zum Gym oder Homegym — stark werden, besser aussehen und dranbleiben.',
      'Der Kern: zwei feste Krafttrainings pro Woche.',
      'Ohne tägliches Training.',
    ],
    tf: 'In TestFlight testen',
  },
  problem: {
    label: 'DAS PAPA-PROBLEM',
    title: 'Kennst du das?',
    pains: [
      'Zu viele Übungen zur Auswahl. Du weißt nicht, womit du anfangen sollst. Das führt zur Prokrastination oder Überwältigung.',
      'Du denkst, du müsstest täglich trainieren. Fängst damit an und hast schnell wieder Ausreden am Start warum es heute nicht klappt.',
      'Du trainierst, aber siehst keine echten Ergebnisse. Irgendwas stimmt nicht.',
    ],
    answerTitle: 'Dann ist Dad Strong für dich.',
    answerSub:
      'Für Papas die wenig Zeit haben und Gym oder Homegym nutzen. Dad Strong ist kein zufälliger Workout-Katalog — sondern ein progressiver Kraftplan. Zwei feste Einheiten pro Woche. Kurze Zusatz-Einheiten können ergänzen, wenn der Alltag eng wird. Aber der Kern bleibt der Plan.',
  },
  philosophy: {
    label: 'DIE PHILOSOPHIE',
    title: ['Warum genau', 'dieser Trainingsplan?'],
    lead: 'Dad Strong basiert auf wenigen, gut gestützten Prinzipien — nicht auf dem neuesten Trend.',
    cards: [
      {
        title: 'Wenige Übungen',
        body: 'Mehr Fokus. Weniger Chaos. Grundübungen trainieren viele Muskelgruppen gleichzeitig — maximaler Nutzen pro investierter Papa-Zeit.',
      },
      {
        title: 'Fokus auf Beine & hintere Kette',
        body: 'Kraft. Stabilität. Energie für den Alltag. Deshalb liegt hier bewusst der Schwerpunkt — das zahlt sich auch auf dem Spielplatz aus.',
      },
      {
        title: 'Progression statt Zerstörung',
        body: 'Wenige harte Arbeitssätze, klare Steigerung, messbare Entwicklung. Kein Muskelkater der dich am nächsten Tag lahmlegt.',
      },
      {
        title: 'Entwickelt für Väter',
        body: 'Arbeit. Familie. Verpflichtungen. Dad Strong läuft in kurzen Einheiten, braucht wenig Nachdenken — und lässt sich trotzdem konsequent durchziehen.',
      },
    ],
    mockLabel: 'STARTSCREEN',
    mockCaption: 'Dein Training. Sofort sichtbar.',
    mockAlt:
      'Dad Strong iOS App – Übersicht Kraft-, Ausdauer- und Sprint-Streaks auf dem Home Screen',
  },
  story: {
    label: 'WARUM DAD STRONG?',
    pull: '"Ich habe diese App für mich gebaut. Weil ich keinen Plan gefunden habe, der für ein Leben mit Verantwortung gemacht ist."',
    byline: '— Christian Bachmann, Entwickler & Vater von vier Kindern',
    paragraphs: [
      'Vier Kinder, Vollzeitjob. Ich wollte stark sein und gut aussehen — aber nicht, dass Training das Zentrum meines Lebens wird.',
      'Dad Strong ist kein Bodybuilding-Plan. Der Fokus liegt auf Kraft, Stabilität und Belastbarkeit. Dass du dabei besser aussiehst, ist kein Zufall — aber nicht der ganze Punkt.',
    ],
  },
  plan: {
    label: 'DER PLAN',
    title: 'Training A & B',
    lead: 'Fest, damit Fortschritt messbar wird.',
    aTag: 'Training A',
    bTag: 'Training B',
    exercisesA: [
      { name: 'Kniebeuge', why: 'Hoher Gesamtreiz · Beine · Rumpf · Kraftaufbau' },
      { name: 'Bankdrücken', why: 'Oberkörperkraft · progressiv belastbar · effizient' },
      { name: 'Rudern', why: 'Rücken · Ausgleich zum Drücken · Haltung' },
      { name: 'Bulgarian Split Squat', why: 'Unilateral · Beine · Balance · Beweglichkeit' },
      { name: 'Farmer Walk', why: 'Grip · Rumpf · Kondition · mentale Stärke' },
    ],
    exercisesB: [
      { name: 'Kreuzheben', why: 'Hintere Kette · Rücken · maximale Last · Fundament' },
      { name: 'Overhead Press', why: 'Schultern · Rumpf · Stabilität · echte Kraft' },
      { name: 'Klimmzüge', why: 'Rückenbreite · relative Kraft · Körpergewicht' },
      { name: 'Frontkniebeuge', why: 'Beinvorderseite · aufrechte Haltung · Mobilität' },
      { name: 'SZ-Curls', why: 'Bizeps · Ellenbeuger · Ergänzung zum Ziehen' },
    ],
    whyTitle: 'Warum kann ich den Plan nicht anpassen?',
    whyBody:
      'Weil Variation den Fortschritt hindert. Wer die Übungen ständig wechselt, trainiert nie lange genug an einer Bewegung um wirklich stark zu werden. Lineare Progression braucht Kontinuität — keine Abwechslung. Der Plan ist das Produkt.',
    progLabel: 'LINEARE PROGRESSION · BEISPIEL KNIEBEUGE',
    weeks: ['Woche 1', 'Woche 4', 'Woche 8', 'Woche 12'],
    progNote: 'Nicht garantiert — aber realistisch.',
  },
  midcta: { heading: 'Du weißt genug.', tf: 'In TestFlight testen' },
  app: {
    label: 'DIE APP',
    title: ['Dein Training.', 'Deine Zahlen.'],
    lead: 'Für Papas die wenig Zeit haben - und Fortschritt greifbar machen wollen.',
    phoneWarmup: {
      label: 'Warmup',
      alt: 'Dad Strong App – geführtes Warmup vor dem Krafttraining',
    },
    phoneTraining: {
      label: 'Training',
      alt: 'Dad Strong App – Pausentimer zwischen Arbeitssätzen im Krafttraining',
    },
    phoneJourney: {
      label: 'Meine Reise',
      alt: 'Dad Strong App – Körper-Dokumentation mit Gewicht, Maßen und Fortschrittsfotos',
    },
    fTracking: {
      title: 'Workout-Tracking',
      body: 'Sets, Reps, Gewicht. Nach jedem Block ein klarer Progressionsvorschlag.',
    },
    progMockHeader: ['ÜBUNG', 'VORHER', 'JETZT'],
    progMockRows: [
      { name: 'Kniebeuge', before: '85 kg', now: '90 kg ↑' },
      { name: 'Bankdrücken', before: '70 kg', now: '72.5 kg ↑' },
      { name: 'Kreuzheben', before: '110 kg', now: '115 kg ↑' },
    ],
    fStreaks: {
      title: 'Streaks als Motivationsstütze — nicht als Druck.',
      body: 'Jede Woche kannst du drei Streaks sammeln. Schaffst du alle drei — gibt\'s den Superstreak. Erreichst du einen mal nicht? Kein Problem. Die anderen Streaks bleiben. Kein Reset, kein Verlust, kein schlechtes Gewissen.',
    },
    streakTypes: [
      { icon: '💪', name: 'Kraft', rule: '2× Training A oder B' },
      { icon: '🫀', name: 'Ausdauer', rule: '60 Min Zone 2' },
      { icon: '⚡', name: 'Sprint', rule: '1× Sprint-Session' },
    ],
    superLabel: 'Alle 3 in einer Woche',
    superBadge: 'SUPERSTREAK',
    fBody: {
      title: 'Körper-Dokumentation',
      body: 'Gewicht, Maße, Fotos. Du siehst wo du angefangen hast — und wohin die Reise geht.',
    },
    bodyPhotoLabels: ['FRONT', 'BACK', 'SEITE'],
    bodyStats: [
      { label: 'Gewicht', val: '82.4 kg' },
      { label: 'Brust', val: '98 cm' },
      { label: 'Hüfte', val: '91 cm' },
      { label: 'Taille', val: '86 cm' },
    ],
    fZone: {
      title: 'Zone 2 & Sprint',
      body: 'Ausdauer und Kondition als Ergänzung zum Krafttraining. Herzfrequenz direkt via HealthKit.',
    },
    fWidget: {
      title: 'Home Screen Widget',
      body: 'Auf deinem iPhone kannst du ein Foto mit KI erstellen, wo du hinmöchtest. Realistisch! Und das siehst du jedesmal neben deinem Kalender. Mir hat das unterbewusst geholfen, meinen Kopf auf meine neue Figur zu programmieren.',
    },
    widgetAlt:
      'Dad Strong Home Screen Widget – Streak-Übersicht direkt auf dem iPhone Startbildschirm',
    fStructured: {
      title: 'Planbar wie ein Meeting.',
      body: 'Fixe Pausen sind Pflicht — nicht optional. Das schafft Vergleichbarkeit von Einheit zu Einheit. Und weil der Ablauf standardisiert ist, weißt du vorher wie lang du brauchst.',
    },
    durationLabels: ['TRAINING A', 'TRAINING B'],
    durationTimes: ['~60 Min', '~45 Min'],
    durationNote:
      'So kann ich meiner Frau direkt sagen, wie lange ich weg bin. Kein schlechtes Gewissen mehr, keine zu langen Pausen mehr. Standardisiert hilft dir Progression wirklich real zu messen.',
    papaEyebrow: 'WARUM DAS ALLES?',
    papaText: ['Nicht wegen Instagram.', 'Nicht wegen eines perfekten Körpers.'],
    papaValues: ['Energie', 'Stabilität', 'Gesundheit', 'Selbstrespekt', 'Belastbarkeit'],
    papaClose:
      'Dinge, die sich auf alles auswirken — auf die Arbeit, auf die Familie, auf dein Wohlbefinden, deine Libido — einfach alles.',
  },
  optional: {
    label: 'OPTIONAL DAZU',
    title: 'Wenn du mehr willst.',
    lead: 'Der Kraftplan ist der Kern. Diese Ergänzungen sind optional — aber sie machen etwas mit dir.',
    zone2: {
      label: 'ZONE 2',
      title: '30–45 Min. Bike. Netflix an.',
      body: 'Lockeres Cardio das die Regeneration unterstützt, Ausdauer aufbaut und den Kopf runterfährt. Kein Vollgas. 1× pro Woche wenn es passt. Herzfrequenz direkt via Apple Health.',
    },
    sprint: {
      label: 'SPRINT',
      title: '6 Sprints. Einmal pro Woche.',
      body: 'Kurz, explosiv, fertig. Erinnert deinen Körper wofür er gemacht wurde. Bergsprints oder auf einer Geraden — 20 Minuten und du bist durch.',
    },
  },
  faq: {
    label: 'FAQ',
    title: 'Häufige Fragen',
    items: [
      {
        q: 'Was kostet die App?',
        a: ['Dad Strong ist zum Start kostenlos verfügbar. Keine Werbung, kein Abo zum Start.'],
      },
      {
        q: 'Brauche ich ein Gym oder Homegym?',
        a: [
          'Für den Hauptplan: ja. Dad Strong basiert auf progressivem Krafttraining mit Langhantel, Rack, Gewichten und idealerweise einer Bank. Das findest du in fast jedem Gym oder in einem einfachen Homegym. Kurze Zusatz-Einheiten können ergänzen, aber der Kern der App bleibt der feste Kraftplan.',
        ],
      },
      {
        q: 'Kann ich meinen Trainingsplan anpassen?',
        a: [
          'Nein — und das ist Absicht. Variation hindert Fortschritt. Wer die Übungen ständig wechselt, baut keine echte Stärke auf. Der Plan ist das Produkt. Das ist der Punkt.',
        ],
      },
      {
        q: 'Was wenn ich mal ein Training verpasse?',
        a: [
          'Dann machst du das nächste Training. Fertig. Dad Strong hat keinen künstlichen Streak-Druck. Leben passiert — das System ist dafür gebaut.',
        ],
      },
      {
        q: 'Muss ich auf meine Ernährung achten?',
        a: [
          'Der Trainingsplan ist der Kern — aber wenn du sichtbar Fett verlieren willst, entscheidet die Ernährung mit. Wie viele Kalorien du brauchst und wie groß dein Defizit sein sollte, kannst du mit unserem <a href="/kalorienrechner/">Kalorienrechner für Männer</a> berechnen.',
        ],
      },
      {
        q: 'Wie unterscheidet sich Dad Strong von anderen Trainings-Apps?',
        a: [
          'Es gibt gute Apps da draußen. Hevy, Strong, Fitbod, Gainsfire — die sind nicht schlecht. Für viele funktionieren sie prima.',
          'Mein Problem war ein anderes: Ich hatte zu viel Auswahl. Zu viele Möglichkeiten, meinen Plan selbst zusammenzustellen. Zu viele Übungen, zu viele Einstellungen, zu viele Entscheidungen vor dem Training. Das hat mich abgelenkt — weg vom eigentlichen Training, hin zur App-Konfiguration.',
          'Gainsfire zum Beispiel hat mir lange gut gefallen. Solide App. Aber mir fehlte die Möglichkeit, meinen Körper direkt in der App zu tracken — Fotos, Maße, Gewicht — alles zusammen mit dem Training. Dad Strong löst genau das: ein fixer Plan, keine ablenkende Wahlfreiheit — und ein echtes Körper-Tagebuch an einem Ort.',
        ],
      },
    ],
  },
  cta: {
    label: 'BETA VERFÜGBAR',
    quote: 'Dad Strong reduziert Training auf das, was langfristig wirklich zählt.',
    btn: 'In TestFlight testen',
    meta: 'iOS 17+ · Keine Werbung · Kostenlos in der Beta',
  },
  footer: {
    privacy: 'Datenschutz & Impressum',
    contact: 'Kontakt',
    copy: '© 2026 Christian Bachmann',
  },
  schema: {
    description:
      'Krafttraining-App für Väter mit wenig Zeit. Der Kern ist ein fixer progressiver Kraftplan für Gym oder Homegym: 2 Einheiten pro Woche, lineare Progression und klare Trainingsführung. Zum Start kostenlos für iPhone.',
    keywords:
      'Krafttraining Väter, Fitness App Väter, Training App Papas, Krafttraining wenig Zeit, Väter Fitness',
  },
};

const en: HomeContent = {
  announcement: { pre: 'App in beta', link: 'Try it on TestFlight now →' },
  nav: { cta: 'Try the beta' },
  hero: {
    label: 'FOR DADS · TRAINING · iOS',
    tagline: ['Two sessions.', 'Real progress.'],
    body: [
      'For dads with a full-time job, kids and access to a gym or home gym — get strong, look better and stay consistent.',
      'The core: two fixed strength workouts per week.',
      'No daily training.',
    ],
    tf: 'Try on TestFlight',
  },
  problem: {
    label: 'THE DAD PROBLEM',
    title: 'Sound familiar?',
    pains: [
      'Too many exercises to choose from. You don\'t know where to start. So you procrastinate — or get overwhelmed.',
      'You think you have to train every day. You start, and the excuses for skipping today show up fast.',
      'You train, but see no real results. Something\'s off.',
    ],
    answerTitle: 'Then Dad Strong is for you.',
    answerSub:
      'For dads who are short on time and train in a gym or home gym. Dad Strong isn\'t a random workout catalog — it\'s a progressive strength plan. Two fixed sessions per week. Short extra sessions can fill in when life gets tight. But the plan stays the core.',
  },
  philosophy: {
    label: 'THE PHILOSOPHY',
    title: ['Why this exact', 'training plan?'],
    lead: 'Dad Strong is built on a few well-supported principles — not on the latest trend.',
    cards: [
      {
        title: 'Few exercises',
        body: 'More focus. Less chaos. Compound lifts train many muscle groups at once — maximum return on the dad-time you invest.',
      },
      {
        title: 'Focus on legs & posterior chain',
        body: 'Strength. Stability. Energy for everyday life. That\'s the deliberate focus here — and it pays off on the playground too.',
      },
      {
        title: 'Progression, not destruction',
        body: 'A few hard work sets, clear increases, measurable development. No soreness that wrecks you the next day.',
      },
      {
        title: 'Built for dads',
        body: 'Work. Family. Obligations. Dad Strong runs in short sessions, needs little thinking — and still gets done consistently.',
      },
    ],
    mockLabel: 'HOME SCREEN',
    mockCaption: 'Your training. At a glance.',
    mockAlt:
      'Dad Strong iOS app – overview of strength, endurance and sprint streaks on the home screen',
  },
  story: {
    label: 'WHY DAD STRONG?',
    pull: '"I built this app for myself. Because I couldn\'t find a plan made for a life with responsibilities."',
    byline: '— Christian Bachmann, developer & father of four',
    paragraphs: [
      'Four kids, a full-time job. I wanted to be strong and look good — but not make training the center of my life.',
      'Dad Strong isn\'t a bodybuilding plan. The focus is strength, stability and resilience. Looking better along the way is no accident — but it\'s not the whole point.',
    ],
  },
  plan: {
    label: 'THE PLAN',
    title: 'Workout A & B',
    lead: 'Fixed, so progress becomes measurable.',
    aTag: 'Workout A',
    bTag: 'Workout B',
    exercisesA: [
      { name: 'Squat', why: 'High total stimulus · legs · core · strength' },
      { name: 'Bench Press', why: 'Upper-body strength · progressive · efficient' },
      { name: 'Barbell Row', why: 'Back · counter to pressing · posture' },
      { name: 'Bulgarian Split Squat', why: 'Unilateral · legs · balance · mobility' },
      { name: 'Farmer Walk', why: 'Grip · core · conditioning · mental grit' },
    ],
    exercisesB: [
      { name: 'Deadlift', why: 'Posterior chain · back · max load · foundation' },
      { name: 'Overhead Press', why: 'Shoulders · core · stability · real strength' },
      { name: 'Pull-Ups', why: 'Back width · relative strength · bodyweight' },
      { name: 'Front Squat', why: 'Quads · upright posture · mobility' },
      { name: 'EZ-Bar Curls', why: 'Biceps · elbow flexors · pulling accessory' },
    ],
    whyTitle: 'Why can\'t I customize the plan?',
    whyBody:
      'Because variation gets in the way of progress. If you keep swapping exercises, you never train one movement long enough to get truly strong. Linear progression needs continuity — not variety. The plan is the product.',
    progLabel: 'LINEAR PROGRESSION · SQUAT EXAMPLE',
    weeks: ['Week 1', 'Week 4', 'Week 8', 'Week 12'],
    progNote: 'Not guaranteed — but realistic.',
  },
  midcta: { heading: 'You know enough.', tf: 'Try on TestFlight' },
  app: {
    label: 'THE APP',
    title: ['Your training.', 'Your numbers.'],
    lead: 'For dads who are short on time — and want to make progress tangible.',
    phoneWarmup: {
      label: 'Warm-up',
      alt: 'Dad Strong app – guided warm-up before strength training',
    },
    phoneTraining: {
      label: 'Workout',
      alt: 'Dad Strong app – rest timer between work sets during strength training',
    },
    phoneJourney: {
      label: 'My Journey',
      alt: 'Dad Strong app – body tracking with weight, measurements and progress photos',
    },
    fTracking: {
      title: 'Workout tracking',
      body: 'Sets, reps, weight. After every block, a clear progression suggestion.',
    },
    progMockHeader: ['EXERCISE', 'BEFORE', 'NOW'],
    progMockRows: [
      { name: 'Squat', before: '85 kg', now: '90 kg ↑' },
      { name: 'Bench', before: '70 kg', now: '72.5 kg ↑' },
      { name: 'Deadlift', before: '110 kg', now: '115 kg ↑' },
    ],
    fStreaks: {
      title: 'Streaks as a motivation aid — not pressure.',
      body: 'Each week you can collect three streaks. Hit all three and you get the Superstreak. Miss one? No problem. The other streaks stay. No reset, no loss, no guilt.',
    },
    streakTypes: [
      { icon: '💪', name: 'Strength', rule: '2× Workout A or B' },
      { icon: '🫀', name: 'Endurance', rule: '60 min Zone 2' },
      { icon: '⚡', name: 'Sprint', rule: '1× sprint session' },
    ],
    superLabel: 'All 3 in one week',
    superBadge: 'SUPERSTREAK',
    fBody: {
      title: 'Body tracking',
      body: 'Weight, measurements, photos. You see where you started — and where the journey is heading.',
    },
    bodyPhotoLabels: ['FRONT', 'BACK', 'SIDE'],
    bodyStats: [
      { label: 'Weight', val: '82.4 kg' },
      { label: 'Chest', val: '98 cm' },
      { label: 'Hip', val: '91 cm' },
      { label: 'Waist', val: '86 cm' },
    ],
    fZone: {
      title: 'Zone 2 & Sprint',
      body: 'Endurance and conditioning to complement strength training. Heart rate straight from HealthKit.',
    },
    fWidget: {
      title: 'Home Screen Widget',
      body: 'On your iPhone you can generate an AI photo of where you want to be. Realistic! And you see it next to your calendar every day. For me, it quietly helped reprogram my head toward my new physique.',
    },
    widgetAlt:
      'Dad Strong home screen widget – streak overview right on the iPhone home screen',
    fStructured: {
      title: 'Plannable like a meeting.',
      body: 'Fixed rest periods are mandatory — not optional. That makes sessions comparable. And because the flow is standardized, you know up front how long you\'ll need.',
    },
    durationLabels: ['WORKOUT A', 'WORKOUT B'],
    durationTimes: ['~60 min', '~45 min'],
    durationNote:
      'This way I can tell my wife exactly how long I\'ll be gone. No more guilt, no more rest periods that drag on. Standardized, progression becomes something you can actually measure.',
    papaEyebrow: 'WHY ALL THIS?',
    papaText: ['Not for Instagram.', 'Not for a perfect body.'],
    papaValues: ['Energy', 'Stability', 'Health', 'Self-respect', 'Resilience'],
    papaClose:
      'Things that affect everything — your work, your family, your well-being, your libido — simply everything.',
  },
  optional: {
    label: 'OPTIONAL EXTRAS',
    title: 'When you want more.',
    lead: 'The strength plan is the core. These extras are optional — but they do something to you.',
    zone2: {
      label: 'ZONE 2',
      title: '30–45 min. Bike. Netflix on.',
      body: 'Easy cardio that supports recovery, builds endurance and winds your head down. No all-out effort. 1× per week when it fits. Heart rate straight from Apple Health.',
    },
    sprint: {
      label: 'SPRINT',
      title: '6 sprints. Once a week.',
      body: 'Short, explosive, done. Reminds your body what it was built for. Hill sprints or on the flat — 20 minutes and you\'re through.',
    },
  },
  faq: {
    label: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'What does the app cost?',
        a: ['Dad Strong is free at launch. No ads, no subscription at launch.'],
      },
      {
        q: 'Do I need a gym or home gym?',
        a: [
          'For the main plan: yes. Dad Strong is built on progressive strength training with a barbell, rack, weights and ideally a bench. You\'ll find that in almost any gym or a simple home gym. Short extra sessions can supplement it, but the core of the app stays the fixed strength plan.',
        ],
      },
      {
        q: 'Can I customize my training plan?',
        a: [
          'No — and that\'s intentional. Variation gets in the way of progress. If you keep swapping exercises, you never build real strength. The plan is the product. That\'s the point.',
        ],
      },
      {
        q: 'What if I miss a workout?',
        a: [
          'Then you do the next one. Done. Dad Strong has no artificial streak pressure. Life happens — the system is built for it.',
        ],
      },
      {
        q: 'Do I need to watch my diet?',
        a: [
          'The training plan is the core — but if you want to visibly lose fat, nutrition matters too. You can work out how many calories you need and how big your deficit should be with our <a href="/en/calorie-calculator/">calorie calculator for men</a>.',
        ],
      },
      {
        q: 'How is Dad Strong different from other training apps?',
        a: [
          'There are good apps out there. Hevy, Strong, Fitbod, Gainsfire — they\'re not bad. For a lot of people they work great.',
          'My problem was different: I had too much choice. Too many ways to build my own plan. Too many exercises, too many settings, too many decisions before training. It distracted me — away from actually training, toward configuring the app.',
          'Gainsfire, for example, I liked for a long time. Solid app. But it was missing a way to track my body right in the app — photos, measurements, weight — all together with the training. Dad Strong solves exactly that: a fixed plan, no distracting freedom of choice — and a real body journal in one place.',
        ],
      },
    ],
  },
  cta: {
    label: 'BETA AVAILABLE',
    quote: 'Dad Strong strips training down to what actually matters long-term.',
    btn: 'Try on TestFlight',
    meta: 'iOS 17+ · No ads · Free during beta',
  },
  footer: {
    privacy: 'Privacy & Imprint',
    contact: 'Contact',
    copy: '© 2026 Christian Bachmann',
  },
  schema: {
    description:
      'Strength-training app for dads with little time. The core is a fixed progressive strength plan for gym or home gym: 2 sessions per week, linear progression and clear training guidance. Free at launch for iPhone.',
    keywords:
      'strength training dads, fitness app dads, training app fathers, strength training little time, dad fitness',
  },
};

export const home: Record<Lang, HomeContent> = { de, en };
