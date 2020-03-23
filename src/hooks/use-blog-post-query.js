import {useStaticQuery, graphql} from 'gatsby'

export const useBlogPostQuery = () => {
  const {allMarkdownRemark: {edges: blogPosts}} = useStaticQuery(graphql`
  query BlogPostQuery {
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
`)

return blogPosts
}