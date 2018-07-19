module.exports = {
  siteMetadata: {
    title: 'Digital Harbor Foundation: Maker Foundations',
  },
  pathPrefix: '/dhf-learn-gatsby-test/',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
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
        icon: '/pages/maker-foundations-featured-img.png',
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
