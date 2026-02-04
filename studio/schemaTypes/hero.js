export default {
  name: 'hero',
  title: 'Hero Module',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Label',
      type: 'string',
    },
    // --- NEW FIELD BELOW ---
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true, // This lets you crop images in the dashboard
      },
    }
  ]
}