import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../content/types';

export type BlogPostEntry = CollectionEntry<'blog'>;

export function getBlogIndexPath(locale: Locale) {
  return locale === 'fr' ? '/fr/blog' : '/blog';
}

export function getBlogPostPath(locale: Locale, slug: string) {
  return `${getBlogIndexPath(locale)}/${slug}`;
}

export function sortBlogPosts(posts: BlogPostEntry[]) {
  return [...posts].sort((left, right) => right.data.publishDate.getTime() - left.data.publishDate.getTime());
}

export async function getBlogPostsByLocale(locale: Locale) {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.locale === locale);
  return sortBlogPosts(posts);
}

export function findTranslatedBlogPost(post: BlogPostEntry, posts: BlogPostEntry[]) {
  return (
    posts.find(
      (candidate) => candidate.id !== post.id && candidate.data.translationKey === post.data.translationKey && candidate.data.locale !== post.data.locale,
    ) ?? null
  );
}

export function formatBlogDate(locale: Locale, publishDate: Date) {
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(publishDate);
}
