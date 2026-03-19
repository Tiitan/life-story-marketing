import type { LandingPageContent, Locale } from '../content/types';
import { getLandingPageContent } from '../content/site';
import { localePath, withSitePath } from './i18n';
import { normalizeCopy } from './text';
import { normalizeSiteHref } from './site-links.js';

function normalizeLinks(locale: Locale, links: LandingPageContent['nav']['links']) {
  return links.map((link) => ({
    ...link,
    href: normalizeSiteHref(locale, link.href),
  }));
}

function normalizeFooterGroups(locale: Locale, footer: LandingPageContent['footer']) {
  return footer.legalLinks.map((group) => ({
    ...group,
    links: group.links.map((link) => ({
      ...link,
      href: normalizeSiteHref(locale, link.href),
    })),
  }));
}

export function getStaticPageChrome(locale: Locale, alternatePath: string) {
  const landing = normalizeCopy(getLandingPageContent(locale));
  const homeHref = withSitePath(localePath(locale));

  return {
    homeHref,
    nav: {
      ...landing.nav,
      links: normalizeLinks(locale, landing.nav.links),
      alternateLanguage: {
        ...landing.nav.alternateLanguage,
        href: alternatePath,
      },
    },
    footer: {
      ...landing.footer,
      legalLinks: normalizeFooterGroups(locale, landing.footer),
      alternateLanguage: {
        ...landing.footer.alternateLanguage,
        href: alternatePath,
      },
    },
  };
}
