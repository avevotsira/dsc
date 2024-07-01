import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

console.log(process.env.PUBLIC_SITE_URL);
// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || " http://localhost:4321",
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
