// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://life-story.ai/';
const base = new URL(site).pathname.replace(/\/$/, '');

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
