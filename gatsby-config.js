module.exports = {
  siteMetadata: {
    title: 'Digital Harbor Foundation: Maker Foundations',
  },
  pathPrefix: '/expandingtech-mf/',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Digital Harbor Foundation: Maker Foundations',
        short_name: 'DHF Maker Foundations',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#0091c9',
        display: 'minimal-ui',
        icon: 'src/pages/maker-foundations-featured-img.png',
      },
    },
    {
      resolve: `gatsby-plugin-purify-css`,
      options: {
        purifyOptions: {
          info: true,
          minify: true,
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `learn.digitalharbor.org/`,

        protocol: `https`,

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
