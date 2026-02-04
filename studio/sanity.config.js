import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

// Define the singleton document types
const singletonTypes = new Set(['siteSettings', 'homePage'])

// Define the raw data types to hide from the main list
const hiddenTypes = new Set(['hero', 'gallery', 'features'])
const hiddenFromRoot = new Set([...singletonTypes, ...hiddenTypes])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'Agency Studio',

  // Prefer environment variables; fall back to the repository values
  projectId: process.env.SANITY_PROJECT_ID || 'puh7k8ji',
  dataset: process.env.SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Agency Dashboard')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !hiddenFromRoot.has(listItem.getId())
            ),
          ]),
    }),
    unsplashImageAsset(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})