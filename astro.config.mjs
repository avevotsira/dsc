import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

// Load environment variables
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");
const PUBLIC_SITE_URL = env.PUBLIC_SITE_URL;

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL || "http://localhost:3000",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "km"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
    fallback: {
      km: "en",
    },
  },
  prefetch: {
    prefetchAll: true,
  },
});
