import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://arunkumards.github.io',
  base: '/productdesignbyarun',
  integrations: [mdx(), sitemap(), react()],
  output: 'static',
});