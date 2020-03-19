import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogPostQuery {
      allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)
  
  const {allMarkdownRemark: {edges: posts}} = data

  return (
    <Layout>
      <SEO title="Blog" />

      <ul>
        {posts && posts.map(({node: {frontmatter: post}}, i) => (
          <li>
            <Link to={post.path} key={i}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage