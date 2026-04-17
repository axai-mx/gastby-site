import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    date: z.string(),
    user: z.string().optional(),
    language: z.enum(['es', 'en']),
    permalink: z.string(),
    image: z.string().optional(),
    aliases: z.array(z.string()).optional(),
    translations: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    date: z.string(),
    user: z.string().optional(),
    language: z.enum(['es', 'en']),
    permalink: z.string(),
    image: z.string().optional(),
    projectUrl: z.string().optional(),
    projectInfo: z.string().optional(),
    aliases: z.array(z.string()).optional(),
    translations: z.array(z.string()).optional(),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    nick: z.string(),
    language: z.enum(['es', 'en']),
    permalink: z.string(),
    picture: z.string().optional(),
    twitter: z.string().optional(),
    github: z.string().optional(),
    drupal: z.string().optional(),
    translations: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.string(),
    language: z.enum(['es', 'en']).optional(),
    language_label: z.string().optional(),
    menu_label: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    permalink: z.string(),
    translations: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, projects, people, pages };
