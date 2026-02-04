export default {
  name: 'gallery',
  title: 'Gallery Module',
  type: 'document',
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
          ],
        },
      ],
    },
  ],
}