/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const AppConfig = require('./app.config')

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions
  
  const postTemplate = path.resolve('src/templates/post.js')
  const courseTemplate = path.resolve('src/templates/course.js')

  const result = await graphql(`
    {
      allMdx(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allMdx.edges.forEach(({node}) => {
    const template = ~node.frontmatter.path.indexOf('/blog') ? 
      postTemplate : 
      courseTemplate

    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {} // pass additional data here
    })
  })
}

exports.sourceNodes = ({actions, createNodeId, createContentDigest}) => {
  const {createNode} = actions

  const nodeMeta = {
    id: createNodeId(`app-config`),
    parent: null,
    children: [],
    internal: {
      type: `AppConfig`,
      mediaType: `text/html`,
      content: JSON.stringify(AppConfig),
      contentDigest: createContentDigest(AppConfig)
    }
  }

  const node = Object.assign({}, AppConfig, nodeMeta)
  createNode(node)
}