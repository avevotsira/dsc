import { languages } from "@/i18n/ui";
import { defineCollection, z } from "astro:content";

const SupportedLanguage = Object.values(languages) as [string, ...string[]];

const articleSchema = z.object({
  author: z.string(),
  categories: z.array(z.string()),
  date: z.string(),
  featured: z.boolean(),
  image: z.string(),
  title: z.string(),
  lang: z.enum(SupportedLanguage),
});

const articlesCollection = defineCollection({
  schema: articleSchema,
});

export const collections = {
  articles: articlesCollection,
};
