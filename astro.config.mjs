// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dadstrong.app',
  // German stays at the root (no /de/ prefix) so existing URLs are preserved.
  // English lives under /en/. Detection happens client-side via navigator.language.
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de', en: 'en' }
      },
      // The calculator pages use different slugs per language (/kalorienrechner
      // vs /en/calorie-calculator), so the automatic locale-prefix pairing can't
      // link them. Add the hreflang alternates explicitly.
      serialize(item) {
        const calcDe = 'https://dadstrong.app/kalorienrechner/';
        const calcEn = 'https://dadstrong.app/en/calorie-calculator/';
        if (item.url === calcDe || item.url === calcEn) {
          item.links = [
            { lang: 'de', url: calcDe },
            { lang: 'en', url: calcEn }
          ];
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
