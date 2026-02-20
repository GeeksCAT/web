import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://geekscat.org',
  base: '/',
  output: 'static',
  build: {
    format: 'file'
  }
});
