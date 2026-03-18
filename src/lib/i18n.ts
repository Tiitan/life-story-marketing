import type { Locale } from '../content/types';

export const locales: Locale[] = ['en', 'fr'];

export function localePath(locale: Locale) {
  return locale === 'fr' ? '/fr' : '/';
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
