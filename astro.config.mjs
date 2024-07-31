import { defineConfig } from 'astro/config';
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
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkDirective, knownDirectives],
  }
});
