import type { Locale } from '../content/types';

export const locales: Locale[] = ['en', 'fr'];
const configuredSiteUrl = process.env.SITE_URL ?? import.meta.env.SITE ?? 'https://life-story.ai/';
const siteUrl = new URL(configuredSiteUrl);
const pathPrefix = siteUrl ? siteUrl.pathname.replace(/\/$/, '') : '';

export function localePath(locale: Locale) {
  return locale === 'fr' ? '/fr' : '/';
}

export function withSitePath(path: string) {
  if (!path.startsWith('/') || !pathPrefix) {
    return path;
  }

  if (path === pathPrefix || path.startsWith(`${pathPrefix}/`)) {
    return path;
  }

  return path === '/' ? `${pathPrefix}/` : `${pathPrefix}${path}`;
}

export function absoluteSiteUrl(path: string) {
  if (!siteUrl) {
    return path;
  }

  return new URL(withSitePath(path), siteUrl.origin).toString();
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
