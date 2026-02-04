// studio/schemaTypes/siteSettings.js

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The name of the site (displayed in browser tab)',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Link',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Text to display (e.g., Home, About)',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Where the link goes (e.g., /, /about)',
            },
          ],
        },
      ],
    },
  ],
}