import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'

export const dataQuery = graphql`
{
  allMdx(limit: 1000, sort: {order: DESC, fields: frontmatter___date}, filter: {fields: {collection: {eq: "posts"}}, isFuture: {eq: false}}) {
    edges {
      node {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          tags
          cover {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1064, quality: 100) {
                src
                srcSet
                sizes
                aspectRatio
                base64
              }
            }
          }
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

    <div className="my-16 sm:my-32">
      <div className="flex flex-wrap justify-center">
        {data.allMdx.edges.map(({node: post}, i) => <Post data={post} key={i} />)}
      </div>
    </div>
  </Layout>
)

export default BlogPage