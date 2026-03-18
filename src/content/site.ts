import type { LandingPageContent, Locale } from './types';
import { enContent } from './site.en';
import { frContent } from './site.fr';

export const landingPageContent: Record<Locale, LandingPageContent> = {
  en: enContent,
  fr: frContent,
};

export function getLandingPageContent(locale: Locale) {
  return landingPageContent[locale];
}
