// studio/schemaTypes/features.js
export default {
  name: 'features',
  title: 'Feature Grid',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Section Headline',
      type: 'string', 
      description: 'e.g., Why We Are Different',
    },
    {
      name: 'items',
      title: 'Feature Items',
      type: 'array',
      // This limits the user to 3 items to preserve the layout design
      validation: Rule => Rule.max(3).warning('The design looks best with 3 items.'),
      of: [
        {
          type: 'object',
          title: 'Feature',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }
          ]
        }
      ]
    }
  ]
}