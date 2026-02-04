export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Home',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'modules',
      title: 'Page Modules',
      type: 'array',
      description: 'Add, remove, and reorder sections of the home page.',
      of: [
        { type: 'hero' },
        { type: 'features' },
        { type: 'gallery' }
      ]
    }
  ]
}