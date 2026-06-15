// ─────────────────────────────────────────────────────────────
// Content for the calorie calculator: the interactive widget (UI + client-script
// strings) AND the surrounding SEO page (H1, methodology, FAQ, CTA). German + English.
// ─────────────────────────────────────────────────────────────

import type { Lang } from './ui';
import { TESTFLIGHT_URL } from './home';

export { TESTFLIGHT_URL };

interface Mode {
  name: string;
  deficitLabel: string; // shown on the button, e.g. "−200 kcal / Tag"
  desc: string;
  deficit: number; // used by the calculation
  weeklyLoss: string; // pre-localized string
  totalLoss: string; // pre-localized string
}

export interface CalcUI {
  label: string;
  heading: string;
  age: string;
  weight: string;
  height: string;
  ageUnit: string;
  weightUnit: string;
  heightUnit: string;
  modes: Mode[];
  resBmr: string;
  resTdee: string;
  resTarget: string;
  /** Number-format locale for kcal values, e.g. de-DE / en-US. */
  numberLocale: string;
  kcal: string;
  /** Template with {total} and {weekly} placeholders. */
  noteTemplate: string;
  /** Template with {target} placeholder. */
  warnLow: string;
  /** Template with {deficit} placeholder. */
  warnHigh: string;
}

interface Section {
  h2: string;
  paragraphs: string[];
}
interface Faq {
  q: string;
  a: string[];
}

export interface CalcPage {
  navBack: string;
  h1: string;
  lead: string;
  distinctTitle: string;
  distinctBody: string;
  sections: Section[];
  faqTitle: string;
  faq: Faq[];
  ctaTitle: string;
  ctaBody: string;
  ctaBtn: string;
}

const calcDe: CalcUI = {
  label: 'KALORIENRECHNER',
  heading: 'Dein Defizit für 12 Wochen',
  age: 'Alter',
  weight: 'Gewicht',
  height: 'Größe',
  ageUnit: 'Jahre',
  weightUnit: 'kg',
  heightUnit: 'cm',
  modes: [
    {
      name: 'Sanft',
      deficitLabel: '−200 kcal / Tag',
      desc: 'Muskeln aufbauen, Fett verlieren — gleichzeitig. Kaum Hunger.',
      deficit: 200,
      weeklyLoss: '~0,15–0,2 kg',
      totalLoss: '~1,5–2,5 kg',
    },
    {
      name: 'Moderat',
      deficitLabel: '−400 kcal / Tag',
      desc: 'Klares Defizit, sichtbare Ergebnisse. Machbar ohne Dauerhunger.',
      deficit: 400,
      weeklyLoss: '~0,3–0,4 kg',
      totalLoss: '~3–5 kg',
    },
    {
      name: 'Aggressiv',
      deficitLabel: '−600 kcal / Tag',
      desc: 'Schnelle Ergebnisse. Erfordert Disziplin beim Essen.',
      deficit: 600,
      weeklyLoss: '~0,4–0,6 kg',
      totalLoss: '~5–7 kg',
    },
  ],
  resBmr: 'Grundumsatz (BMR)',
  resTdee: 'Tagesbedarf inkl. Training',
  resTarget: 'Ziel (mit Defizit)',
  numberLocale: 'de-DE',
  kcal: 'kcal',
  noteTemplate:
    'Über 12 Wochen: {total} Körperfett — bei gleichzeitigem Kraftaufbau durch dein Training. {weekly} pro Woche.',
  warnLow:
    'Hinweis: {target} kcal ist für deine Größe sehr wenig. Unter 1.500 kcal leidet die Trainingsleistung deutlich und du verlierst Muskelmasse. Wähle besser Sanft oder Moderat.',
  warnHigh:
    'Hinweis: Ein Defizit von {deficit} kcal pro Tag ist sehr hoch. Oberhalb von 600–700 kcal steigt das Risiko, Muskelmasse zu verlieren — was beim Krafttraining kontraproduktiv ist.',
};

const calcEn: CalcUI = {
  label: 'CALORIE CALCULATOR',
  heading: 'Your deficit for 12 weeks',
  age: 'Age',
  weight: 'Weight',
  height: 'Height',
  ageUnit: 'years',
  weightUnit: 'kg',
  heightUnit: 'cm',
  modes: [
    {
      name: 'Gentle',
      deficitLabel: '−200 kcal / day',
      desc: 'Build muscle, lose fat — at the same time. Barely any hunger.',
      deficit: 200,
      weeklyLoss: '~0.15–0.2 kg',
      totalLoss: '~1.5–2.5 kg',
    },
    {
      name: 'Moderate',
      deficitLabel: '−400 kcal / day',
      desc: 'A clear deficit, visible results. Doable without constant hunger.',
      deficit: 400,
      weeklyLoss: '~0.3–0.4 kg',
      totalLoss: '~3–5 kg',
    },
    {
      name: 'Aggressive',
      deficitLabel: '−600 kcal / day',
      desc: 'Fast results. Requires discipline with your eating.',
      deficit: 600,
      weeklyLoss: '~0.4–0.6 kg',
      totalLoss: '~5–7 kg',
    },
  ],
  resBmr: 'Basal rate (BMR)',
  resTdee: 'Daily need incl. training',
  resTarget: 'Target (with deficit)',
  numberLocale: 'en-US',
  kcal: 'kcal',
  noteTemplate:
    'Over 12 weeks: {total} body fat — while building strength through your training. {weekly} per week.',
  warnLow:
    'Note: {target} kcal is very low for your size. Below 1,500 kcal your training performance suffers noticeably and you lose muscle mass. Better pick Gentle or Moderate.',
  warnHigh:
    'Note: A deficit of {deficit} kcal per day is very high. Above 600–700 kcal the risk of losing muscle mass rises — which is counterproductive when strength training.',
};

const pageDe: CalcPage = {
  navBack: '← Zur Startseite',
  h1: 'Kalorienrechner für Männer',
  lead: 'Berechne deinen Kalorienbedarf und dein Defizit zum Abnehmen — abgestimmt auf zwei Krafttrainings pro Woche. Fett verlieren, Kraft behalten.',
  distinctTitle: 'Du suchst eine App zum Kalorienzählen?',
  distinctBody:
    'Dann bist du hier halb richtig. Dad Strong zählt nicht jede Mahlzeit für dich — es zeigt dir, wie viele Kalorien du überhaupt brauchst und wie viel du essen solltest, um Fett zu verlieren. Der Rechner hier gibt dir die Zahl, an der du dich orientierst. Das tatsächliche Tracken machst du, wenn überhaupt, mit Küchenwaage und gesundem Menschenverstand.',
  sections: [
    {
      h2: 'Grundumsatz, Tagesbedarf, Defizit — was die Zahlen bedeuten',
      paragraphs: [
        'Dein Grundumsatz (auch BMR, Basal Metabolic Rate) ist das, was dein Körper in völliger Ruhe verbraucht — nur fürs Atmen, den Herzschlag, die Organe. Wir berechnen ihn mit der Mifflin-St-Jeor-Formel, der heute am besten validierten Formel für den Ruheumsatz.',
        'Dein Tagesbedarf (TDEE, Total Daily Energy Expenditure) ist der Grundumsatz mal einem Aktivitätsfaktor. Wir rechnen mit 1,55 — das entspricht einem Bürojob plus zwei Krafteinheiten und einer lockeren Ausdauereinheit pro Woche. Genau der Dad-Strong-Rhythmus.',
        'Das Defizit ist die Menge, die du unter deinem Tagesbedarf isst. Kein Defizit, kein Fettverlust — so einfach ist das. Aber zu groß darf es auch nicht sein, sonst verlierst du Muskeln statt Fett.',
      ],
    },
    {
      h2: 'Wie viele Kalorien zum Abnehmen als Mann?',
      paragraphs: [
        'Die ehrliche Antwort: Es kommt auf deinen Tagesbedarf an — deshalb der Rechner. Für die meisten Männer mit Bürojob und zwei Krafteinheiten liegt der Bedarf zwischen 2.400 und 2.900 kcal. Zum Abnehmen ziehst du davon 200 bis 600 kcal ab.',
        'Ein moderates Defizit von 300–500 kcal pro Tag ist für die meisten der beste Kompromiss: sichtbare Ergebnisse, ohne dass du ständig Hunger hast oder im Training einbrichst. Mehr ist nicht besser — es ist nur schneller und riskanter.',
      ],
    },
    {
      h2: 'Fett verlieren und Muskeln halten — gleichzeitig',
      paragraphs: [
        'Der Grund, warum dieser Rechner ein moderates Defizit empfiehlt statt einer Crash-Diät: Krafttraining plus genug Protein plus ein kleines Defizit ist die Kombination, mit der du Fett verlierst und trotzdem stark bleibst — oder sogar Muskeln aufbaust, wenn du vorher untrainiert warst.',
        'Deshalb ist der Rechner direkt auf das Dad-Strong-Training abgestimmt: zwei feste Krafttrainings pro Woche sind der Motor, das Defizit ist die Richtung. Ohne das Training würde ein Defizit dich nur kleiner machen — nicht stärker.',
      ],
    },
  ],
  faqTitle: 'Häufige Fragen zum Kalorienbedarf',
  faq: [
    {
      q: 'Wie viele Kalorien sollte ein Mann essen, um abzunehmen?',
      a: [
        'Das hängt von deinem Tagesbedarf ab. Berechne ihn oben und zieh 200–600 kcal ab. Für die meisten Männer landet das Ziel zwischen 1.900 und 2.500 kcal pro Tag. Geh nicht dauerhaft unter 1.500 kcal.',
      ],
    },
    {
      q: 'Wie berechne ich mein Kaloriendefizit?',
      a: [
        'Tagesbedarf minus Zielkalorien = Defizit. Der Rechner macht das automatisch: Er bestimmt deinen Grundumsatz nach Mifflin-St-Jeor, multipliziert ihn mit deinem Aktivitätsfaktor und zieht das gewählte Defizit ab.',
      ],
    },
    {
      q: 'Kann man gleichzeitig Fett verlieren und Muskeln aufbauen?',
      a: [
        'Ja — besonders als Trainingsanfänger oder Wiedereinsteiger. Mit Krafttraining, genug Protein und einem moderaten Defizit ist Body Recomposition möglich. Je trainierter du bist, desto langsamer geht es, aber Muskeln halten klappt fast immer.',
      ],
    },
    {
      q: 'Wie viel Defizit pro Tag ist gesund?',
      a: [
        '200 bis 600 kcal pro Tag. Darüber steigt das Risiko, Muskelmasse und Trainingsleistung zu verlieren. 300–500 kcal sind für die meisten Männer der beste Bereich.',
      ],
    },
    {
      q: 'Was ist der Unterschied zwischen Grundumsatz und Tagesbedarf?',
      a: [
        'Der Grundumsatz (BMR) ist der Verbrauch in völliger Ruhe. Der Tagesbedarf (TDEE) ist der Grundumsatz plus alles, was du dich am Tag bewegst — Arbeit, Alltag, Training. Abnehmen oder zunehmen richtet sich nach dem Tagesbedarf, nicht nach dem Grundumsatz.',
      ],
    },
    {
      q: 'Brauche ich eine App zum Kalorienzählen?',
      a: [
        'Nicht zwingend. Viele kommen mit dem berechneten Zielwert, einer Küchenwaage am Anfang und etwas Routine aus. Dad Strong selbst zählt dein Essen nicht — die App ist auf das Training und deine Körper-Entwicklung fokussiert.',
      ],
    },
  ],
  ctaTitle: 'Stark werden, nicht nur dünner.',
  ctaBody:
    'Der Rechner gibt dir die Zahl. Dad Strong gibt dir den Plan: zwei feste Krafttrainings pro Woche, klare Progression, kein Chaos. Zum Start kostenlos.',
  ctaBtn: 'In TestFlight testen',
};

const pageEn: CalcPage = {
  navBack: '← Back to home',
  h1: 'Calorie Calculator for Men',
  lead: 'Work out your daily calories and the deficit to lose fat — built around two strength workouts a week. Lose fat, keep your strength.',
  distinctTitle: 'Looking for a food-tracking app?',
  distinctBody:
    'Then you\'re half right here. Dad Strong doesn\'t count every meal for you — it shows you how many calories you actually need and how much to eat to lose fat. This calculator gives you the number to aim for. The actual tracking, if you do it at all, you handle with a kitchen scale and common sense.',
  sections: [
    {
      h2: 'Basal rate, daily need, deficit — what the numbers mean',
      paragraphs: [
        'Your basal metabolic rate (BMR) is what your body burns at complete rest — just breathing, your heartbeat, your organs. We calculate it with the Mifflin-St Jeor equation, today\'s best-validated formula for resting metabolic rate.',
        'Your daily need (TDEE, Total Daily Energy Expenditure) is your basal rate times an activity factor. We use 1.55 — a desk job plus two strength sessions and one easy cardio session per week. Exactly the Dad Strong rhythm.',
        'The deficit is how much you eat below your daily need. No deficit, no fat loss — it\'s that simple. But it can\'t be too big either, or you lose muscle instead of fat.',
      ],
    },
    {
      h2: 'How many calories to lose weight as a man?',
      paragraphs: [
        'The honest answer: it depends on your daily need — that\'s what the calculator is for. For most men with a desk job and two strength sessions, the need sits between 2,400 and 2,900 kcal. To lose fat, subtract 200 to 600 kcal.',
        'A moderate deficit of 300–500 kcal per day is the best compromise for most: visible results without constant hunger or crashing in your workouts. More isn\'t better — it\'s just faster and riskier.',
      ],
    },
    {
      h2: 'Lose fat and keep muscle — at the same time',
      paragraphs: [
        'The reason this calculator recommends a moderate deficit instead of a crash diet: strength training plus enough protein plus a small deficit is the combination that lets you lose fat and still stay strong — or even build muscle if you were untrained before.',
        'That\'s why the calculator is tuned to Dad Strong training: two fixed strength workouts per week are the engine, the deficit is the direction. Without the training, a deficit would just make you smaller — not stronger.',
      ],
    },
  ],
  faqTitle: 'Common questions about calorie needs',
  faq: [
    {
      q: 'How many calories should a man eat to lose weight?',
      a: [
        'It depends on your daily need. Calculate it above and subtract 200–600 kcal. For most men the target lands between 1,900 and 2,500 kcal per day. Don\'t go below 1,500 kcal long-term.',
      ],
    },
    {
      q: 'How do I calculate my calorie deficit?',
      a: [
        'Daily need minus target calories = deficit. The calculator does it automatically: it works out your basal rate with Mifflin-St Jeor, multiplies by your activity factor and subtracts your chosen deficit.',
      ],
    },
    {
      q: 'Can you lose fat and build muscle at the same time?',
      a: [
        'Yes — especially as a beginner or someone returning to training. With strength training, enough protein and a moderate deficit, body recomposition is possible. The more trained you are, the slower it goes, but keeping muscle works almost always.',
      ],
    },
    {
      q: 'How much of a daily deficit is healthy?',
      a: [
        '200 to 600 kcal per day. Above that, the risk of losing muscle mass and training performance rises. 300–500 kcal is the best range for most men.',
      ],
    },
    {
      q: 'What\'s the difference between basal rate and daily need?',
      a: [
        'The basal rate (BMR) is what you burn at complete rest. The daily need (TDEE) is your basal rate plus everything you move during the day — work, daily life, training. Losing or gaining weight is based on the daily need, not the basal rate.',
      ],
    },
    {
      q: 'Do I need a calorie-counting app?',
      a: [
        'Not necessarily. Many people get by with the calculated target, a kitchen scale at the start and a bit of routine. Dad Strong itself doesn\'t count your food — the app is focused on training and your body progress.',
      ],
    },
  ],
  ctaTitle: 'Get strong, not just smaller.',
  ctaBody:
    'The calculator gives you the number. Dad Strong gives you the plan: two fixed strength workouts per week, clear progression, no chaos. Free at launch.',
  ctaBtn: 'Try on TestFlight',
};

export const calcUI: Record<Lang, CalcUI> = { de: calcDe, en: calcEn };
export const calcPage: Record<Lang, CalcPage> = { de: pageDe, en: pageEn };
