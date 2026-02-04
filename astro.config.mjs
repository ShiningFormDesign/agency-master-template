import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'puh7k8ji',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
    }),
  ],
});