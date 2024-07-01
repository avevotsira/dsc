import { POLICY_TYPES, type PolicyType } from "./content.type";
import { languages } from "@/i18n/ui";
import { defineCollection, z } from "astro:content";
import type { SchemaContext } from "astro:content";

const SupportedLanguage = Object.values(languages) as [string, ...string[]];

const PolicyTypeEnum = z.enum(
  Object.values(POLICY_TYPES) as [PolicyType, ...PolicyType[]],
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

const policySchema = z.object({
  date: z.string(),
  title: z.string(),
  lang: z.enum(SupportedLanguage),
  file: z.string(),
  type: PolicyTypeEnum,
});

const policiesCollection = defineCollection({
  schema: policySchema,
});

export const collections = {
  articles: articlesCollection,
  policies: policiesCollection,
};
