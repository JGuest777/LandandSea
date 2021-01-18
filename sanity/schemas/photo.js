export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'Image',
      title: 'Image',
      type: 'image',
      options: {
        metadata: ['location', 'palette', 'lqip'],
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'Image',
    },
  },
};
