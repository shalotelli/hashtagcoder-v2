import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StyledHr from '../components/styled-hr'

export const dataQuery = graphql`
{
  appConfig {
    recentVideos
  }
  allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: frontmatter___date}, filter: {fileAbsolutePath: {regex: "/(posts)/.*\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          path
          title
        }
        excerpt
      }
    }
  }
}
`

const BlogPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />

      <ul className="mb-48">
        {posts && posts.map(({node: post}, i) => (
          <li key={i}>
            <Link to={post.frontmatter.path}>
              <h4 className="underline text-blue-400 hover:text-blue-600">{post.frontmatter.title}</h4>
              <p>{post.excerpt}</p>
              <StyledHr title="View Post" />
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage