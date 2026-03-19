import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      locale: z.enum(['en', 'fr']),
      translationKey: z.string(),
      routeSlug: z.string(),
      title: z.string(),
      description: z.string(),
      excerpt: z.string(),
      publishDate: z.coerce.date(),
      author: z.string(),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
