import type { LandingPageContent, Locale } from './types';
import { enContent } from './site.en';
import { frContent } from './site.fr';
import { normalizeCopy } from '../lib/text';

export const landingPageContent: Record<Locale, LandingPageContent> = {
  en: normalizeCopy(enContent),
  fr: normalizeCopy(frContent),
};

export function getLandingPageContent(locale: Locale) {
  return landingPageContent[locale];
}
