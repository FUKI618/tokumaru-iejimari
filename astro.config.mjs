import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fuki618.github.io",
  base: "/tokumaru-iejimari",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
