import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Long-form notes and essays. Drop a markdown file in src/content/writing/ and
 * it appears on /published and at /published/<filename>. Files prefixed with an
 * underscore are ignored.
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
