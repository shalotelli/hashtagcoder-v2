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
          },

          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1064
            }
          }
        ]
      }
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              maintainCase: true,
              isIconAfterHeader: true,
              className: 'hash-anchor'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '›',
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },

          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1064
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

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {fields: {collection: {eq: "posts"}}, isFuture: {eq: false}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        date
                        path
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Hashtag Coder Blog',
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://dev.us10.list-manage.com/subscribe/post?u=37b8cc71bc7e983ec70ce4913&amp;id=9bfaf00704'
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
