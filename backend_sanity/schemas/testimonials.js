export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',

      options: {
        // Enables ability for USER to choose CROP of profile image
        hotspot: true
      }
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string'
    }
  ]
}
