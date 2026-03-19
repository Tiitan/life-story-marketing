// @ts-check
import { defineConfig } from 'astro/config';
import { normalizeSiteHref } from './src/lib/site-links.js';

const site = process.env.SITE_URL ?? 'https://life-story.ai/';
const base = new URL(site).pathname.replace(/\/$/, '');

function visitNodes(node, visitor) {
  if (!node || typeof node !== 'object') {
    return;
  }

  visitor(node);

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      visitNodes(child, visitor);
    }
  }
}

function rehypeNormalizeLegacyLinks() {
  return (tree, file) => {
    const locale = file.data?.astro?.frontmatter?.locale === 'fr' ? 'fr' : 'en';

    visitNodes(tree, (node) => {
      if (node.type !== 'element' || node.tagName !== 'a') {
        return;
      }

      const href = node.properties?.href;
      if (typeof href !== 'string') {
        return;
      }

      node.properties.href = normalizeSiteHref(locale, href);
    });
  };
}

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeNormalizeLegacyLinks],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
