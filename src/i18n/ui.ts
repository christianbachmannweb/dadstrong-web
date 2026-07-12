// ─────────────────────────────────────────────────────────────
// Central i18n configuration: locales, route map, per-page meta.
// Content lives in focused per-page modules (home.ts, privacy.ts, calculator.ts).
// ─────────────────────────────────────────────────────────────

export const SITE = 'https://dadstrong.app';

export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const locales: Lang[] = ['de', 'en'];
export const defaultLang: Lang = 'de';

/**
 * Route map: every page gets a path per language.
 * German is unprefixed (root), English lives under /en/.
 */
export const routes = {
  home: { de: '/', en: '/en/' },
  guides: { de: '/guides/', en: '/en/guides/' },
  privacy: { de: '/privacy/', en: '/en/privacy/' },
  calculator: { de: '/kalorienrechner/', en: '/en/calorie-calculator/' },
} as const;

export type PageKey = keyof typeof routes;

/** Absolute URLs for both languages of a page (used for hreflang + canonical). */
export function alternatesFor(page: PageKey) {
  return {
    de: SITE + routes[page].de,
    en: SITE + routes[page].en,
  };
}

/** Per-page, per-language meta (title + description) for the document head. */
export const meta: Record<PageKey, Record<Lang, { title: string; description: string }>> = {
  home: {
    de: {
      title: 'Dad Strong – Krafttraining App für Väter mit wenig Zeit',
      description:
        'Die Krafttraining-App für vielbeschäftigte Väter mit Gym oder Homegym. 2 Krafttrainings pro Woche, kontrollierte Übungsalternativen und messbarer Fortschritt. Zum Start kostenlos für iPhone.',
    },
    en: {
      title: 'Dad Strong – Strength Training App for Busy Dads',
      description:
        'The strength-training app for busy dads with a gym or home gym. 2 strength workouts per week, controlled exercise alternatives and measurable progress. Free at launch for iPhone.',
    },
  },
  guides: {
    de: {
      title: 'Dad Strong Guides – Training, Carry Mission & Badges',
      description:
        'Kurze Anleitungen für Dad Strong: erster Trainingsblock, Übungsalternativen, Carry Mission, Badge-Level und Fortschrittsfotos.',
    },
    en: {
      title: 'Dad Strong Guides – Training, Carry Mission & Badges',
      description:
        'Short Dad Strong guides covering your first training block, exercise alternatives, Carry Mission, badge levels and progress photos.',
    },
  },
  privacy: {
    de: {
      title: 'Datenschutz & Impressum – Dad Strong',
      description: 'Datenschutzerklärung und Impressum der Dad Strong Webseite.',
    },
    en: {
      title: 'Privacy & Imprint – Dad Strong',
      description: 'Privacy policy and legal notice for the Dad Strong website.',
    },
  },
  calculator: {
    de: {
      title: 'Kalorienrechner für Männer – Bedarf & Defizit berechnen | Dad Strong',
      description:
        'Berechne als Mann deinen Kalorienbedarf und dein Defizit zum Abnehmen — bei 2× Krafttraining pro Woche. Fett verlieren, Muskeln halten. Kostenloser Rechner von Dad Strong.',
    },
    en: {
      title: 'Calorie Calculator for Men – TDEE & Deficit | Dad Strong',
      description:
        'Work out your daily calories and the deficit to lose fat while keeping muscle — built for men doing 2 strength workouts a week. Free calculator by Dad Strong.',
    },
  },
};

/** og:locale value per language. */
export const ogLocale: Record<Lang, string> = { de: 'de_DE', en: 'en_US' };

/** Shared UI strings that appear across multiple pages. */
export const common: Record<Lang, { langSwitch: { de: string; en: string }; skipToContent: string }> = {
  de: { langSwitch: { de: 'DE', en: 'EN' }, skipToContent: 'Zum Inhalt springen' },
  en: { langSwitch: { de: 'DE', en: 'EN' }, skipToContent: 'Skip to content' },
};
