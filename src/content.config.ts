import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.string(),
    dateRead: z.string(),
    summary: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: 'about.mdx', base: './content' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, books, pages };
