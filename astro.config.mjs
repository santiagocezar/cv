import { defineConfig } from 'astro/config';
import unocssPlugin from '@unocss/vite';
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [unocssPlugin()]
  }
});