module.exports = {
  siteMetadata: {
    title: 'External Maker Foundations Test Sandbox',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `learn.digitalharbor.org`,

        protocol: `http`,

        hostingWPCOM: false,
        useACF: true,

        excludedRoutes: [
          '/yoast/**',
          '/akismet/**',
          '/oembed/**',
          '/*/*/courses',
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/settings',
          '/*/*/types',
          '/*/*/taxonomies',
          '/*/*/categories',
          '/*/*/tags',
          '/*/*/users',
          '/*/*/statuses',
          '/*/*/media',
          '/*/*/comments',
        ],
      },
    },
  ],
}
