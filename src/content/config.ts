import { DECREE_TYPES, type DecreeType } from "./content.type";
import { languages } from "@/i18n/ui";
import { defineCollection, z } from "astro:content";
import type { SchemaContext } from "astro:content";

const SupportedLanguage = Object.values(languages) as [string, ...string[]];

const DecreeTypeEnum = z.enum(
  Object.values(DECREE_TYPES) as [DecreeType, ...DecreeType[]],
);

const articleSchema = ({ image }: SchemaContext) =>
  z.object({
    author: z.string().default("Digital Security Committee"),
    categories: z.array(z.string()).default(["News", "Article"]),
    date: z.string(),
    featured: z.boolean(),
    image: image(),
    title: z.string(),
    lang: z.enum(SupportedLanguage),
  });

const articlesCollection = defineCollection({
  schema: articleSchema,
});

const decreeSchema = z.object({
  date: z.string(),
  title: z.string(),
  lang: z.enum(SupportedLanguage),
  file: z.string(),
  type: DecreeTypeEnum,
});

const decreesCollection = defineCollection({
  schema: decreeSchema,
});

const aboutsSchema = z.object({
  date: z.string(),
  title: z.string().nullable(),
  lang: z.enum(SupportedLanguage),
  type: z.string(),
});

const aboutsCollection = defineCollection({
  schema: aboutsSchema,
});

export const collections = {
  articles: articlesCollection,
  decrees: decreesCollection,
  abouts: aboutsCollection,
};
