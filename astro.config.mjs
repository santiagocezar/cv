import { defineConfig } from 'astro/config';
import unocssPlugin from '@unocss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit'

function knownDirectives() {
  return function (tree) {
    visit(tree, function (node) {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        node.data = node.data || {};
        node.data.hName = node.name;
        node.data.hProperties = {
          directive: node.name,
          ...(node.attributes || {}),
        };
      }
    })
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    remarkPlugins: [remarkDirective, knownDirectives],
  },
  vite: {
    plugins: [unocssPlugin()]
  }
});
