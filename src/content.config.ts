import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()).default([]),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  sources: z.array(z.string()).default([]),
});

const historia = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/historia' }),
  schema: baseSchema.extend({
    order: z.number().optional(),
    periodo: z.string().optional(),
  }),
});

const oracoes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/oracoes' }),
  schema: baseSchema.extend({
    tipo: z.enum(['oracao', 'novena', 'ladainha']).default('oracao'),
    diaNovena: z.number().optional(),
  }),
});

const obras = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/obras' }),
  schema: baseSchema.extend({
    artista: z.string().optional(),
    ano: z.string().optional(),
    local: z.string().optional(),
    licenca: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: baseSchema.extend({
    author: z.string().default('Redação Santo Homobono'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  historia,
  oracoes,
  obras,
  blog,
};
