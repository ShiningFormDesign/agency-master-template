// studio/schemaTypes/gallery.js
export default {
  name: 'gallery',
  title: 'Gallery Module',
  type: 'document', // We will change this to 'object' later for the Page Builder, but 'document' allows testing now.
  fields: [
    {
      name: 'headline',
      title: 'Gallery Headline',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      options: { layout: 'grid' },
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Important for SEO and accessiblity.',
            },
            // We can add a 'caption' field here later if needed
          ],
        },
      ],
    },
  ],
}