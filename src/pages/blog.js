import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'

export const dataQuery = graphql`
{
  allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: frontmatter___date}, filter: {fileAbsolutePath: {regex: "/(posts)/.*\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
        }
        excerpt
        timeToRead
      }
    }
  }
}
`

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />

    <div className="mb-48">
      {data.allMarkdownRemark.edges.map(({node: post}, i) => <Post data={post} key={i} />)}
    </div>
  </Layout>
)

export default BlogPage