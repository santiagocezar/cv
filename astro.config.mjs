import { defineConfig } from 'astro/config';
import unocssPlugin from '@unocss/vite';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [unocssPlugin()]
  }
});
