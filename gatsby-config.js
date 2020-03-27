module.exports = {
  siteMetadata: {
    title: `Hashtag Coder`,
    description: `Technical tutorials, development and career advice predominantly focusing on JavaScript.`,
    author: `@hashtagcoder`,
    siteUrl: 'https://hashtagcoder.dev'
  },

  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    'gatsby-plugin-postcss',
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `courses`,
        path: `${__dirname}/src/courses`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '›',
              showLineNumbers: false,
              noInlineHighlight: false
            }
          }
        ]
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hashtag Coder`,
        short_name: `hashtagcoder`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hashtagcoder-icon.png`,
      },
    },
    
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-148371012-1'
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
