import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      // We use import.meta.env to read the variable
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID, 
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
    }),
  ],
});