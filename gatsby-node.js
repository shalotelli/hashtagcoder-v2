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
  const tagTemplate = path.resolve('src/templates/tags.js')

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
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
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

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue.replace(/ /g, '-')}/`,
      component: tagTemplate,
      context: {tag: tag.fieldValue}
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

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  
  // add collection field to markdown files for filtering
  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}

exports.createSchemaCustomization = ({actions, schema, getNode}) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'Mdx',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: (s) => new Date(s.frontmatter.date) > new Date(),
        },
      },
    }),
  ])
}