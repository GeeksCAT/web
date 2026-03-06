import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = process.env.SITE_URL || 'https://geeks.cat';

export default defineConfig({
  site: siteUrl,
  base: '/',
  output: 'static',
  integrations: [
    mdx(),
    icon(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
