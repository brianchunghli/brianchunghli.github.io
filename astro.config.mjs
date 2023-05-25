import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import katex from "katex";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://brianchunghli.github.io",
  integrations: [mdx(), sitemap()],
});
