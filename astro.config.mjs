import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://harsha.so',
  integrations: [mdx()],
  // /about.html instead of /about/index.html, so URLs stay /about (no trailing slash).
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
});
