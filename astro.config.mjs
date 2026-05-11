import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  // GitHub Pages requires a static output
  output: 'static',
  
  // Neutralized custom domain
  site: 'https://example.com',
  
  // '/' is correct for the primary username.github.io repository
  base: '/', 

  integrations: [
    tailwind(), 
    sanity({ 
      projectId: PUBLIC_SANITY_PROJECT_ID || '', 
      dataset: PUBLIC_SANITY_DATASET || 'production', 
      useCdn: false,
      // This allows the studio to link back to your local/prod site
      stega: {
        enabled: true,
        studioUrl: 'http://localhost:3333',
      },
    }), 
    sitemap()
  ],
});