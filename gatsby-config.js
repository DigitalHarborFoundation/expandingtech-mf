module.exports = {
  siteMetadata: {
    title: 'Digital Harbor Foundation: Maker Foundations',
  },
  pathPrefix: '/dhf-learn-gatsby-test/',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
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
          '/sensei/**',
          '/*/*/courses',
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/settings',
          '/*/*/types',
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
