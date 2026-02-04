// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      // CHANGE 1: Use process.env for the Project ID
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      // CHANGE 2: Use process.env for the Dataset
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
    }),
  ],
});