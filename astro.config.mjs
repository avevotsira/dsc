import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "http://localhost:4321",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: "km",
        locales: {
          en: "en-US",
          km: "km-KH",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "km",
    locales: ["en", "km"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
    fallback: {
      en: "km",
    },
  },
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    plugins: [visualizer()],
  },
});
