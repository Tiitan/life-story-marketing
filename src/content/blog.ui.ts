import type { Locale } from './types';

export interface BlogUiContent {
  indexTitle: string;
  indexDescription: string;
  readMoreLabel: string;
  backToBlogLabel: string;
  publishedByLabel: string;
  publishedOnLabel: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
}

const blogUiContent: Record<Locale, BlogUiContent> = {
  en: {
    indexTitle: 'All about biography, autobiography, memoir and life stories',
    indexDescription: 'Biography tips, practical guides, and product insights.',
    readMoreLabel: 'Read more',
    backToBlogLabel: 'Back to Blog',
    publishedByLabel: 'Published by',
    publishedOnLabel: 'on',
    ctaTitle: 'Tell the story of your life, your family, or a loved one in a book',
    ctaDescription: 'Let Lisa, your personal biographer, guide you',
    ctaLabel: 'Read more',
    ctaHref: '/',
  },
  fr: {
    indexTitle: "Tout sur la biographie, l'autobiographie, les mémoires et les récits de vie",
    indexDescription: 'Conseils biographiques, guides pratiques et actualités produit.',
    readMoreLabel: 'Lire la suite',
    backToBlogLabel: 'Retour au blog',
    publishedByLabel: 'Publié par',
    publishedOnLabel: 'le',
    ctaTitle: 'Racontez votre vie, votre famille ou un proche dans un livre',
    ctaDescription: 'Laissez Lisa, votre biographe personnelle, vous guider',
    ctaLabel: 'Découvrir',
    ctaHref: '/fr',
  },
};

export function getBlogUiContent(locale: Locale) {
  return blogUiContent[locale];
}
