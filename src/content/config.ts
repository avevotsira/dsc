import { DIRECTIVE_TYPES, type DirectiveType } from "./content.type";
import { languages } from "@/i18n/ui";
import { defineCollection, z } from "astro:content";
import type { SchemaContext } from "astro:content";

const SupportedLanguage = Object.values(languages) as [string, ...string[]];

const DirectiveTypeEnum = z.enum(
  Object.values(DIRECTIVE_TYPES) as [DirectiveType, ...DirectiveType[]],
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

const directiveSchema = z.object({
  date: z.string(),
  title: z.string(),
  lang: z.enum(SupportedLanguage),
  file: z.string(),
  type: DirectiveTypeEnum,
});

const directivesCollection = defineCollection({
  schema: directiveSchema,
});

export const collections = {
  articles: articlesCollection,
  directives: directivesCollection,
};
