import { defineCollection, z } from "astro:content";

const articleSchema = z.object({
  author: z.string(),
  categories: z.array(z.string()),
  date: z.string(),
  featured: z.boolean(),
  image: z.string(),
  title: z.string(),
});

const articlesCollection = defineCollection({
  schema: articleSchema,
});

export const collections = {
  articles: articlesCollection,
};
