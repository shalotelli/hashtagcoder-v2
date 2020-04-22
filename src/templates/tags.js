import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`

const Tags = ({pageContext, data}) => {
  const {tag} = pageContext
  const {edges, totalCount} = data.allMdx
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={tagHeader} />

      <div className="my-24 sm:my-32">
        <h1>{tagHeader}</h1>

        <nav className="text-lg my-3 hidden sm:block" aria-label="Breadcrumb">
          <ul className="list-none p-0 inline-flex">
            <li>
              <Link to="/tags" className="underline text-blue-400 hover:text-blue-600">All tags</Link>
              <FontAwesomeIcon icon={faCaretRight} className="mx-3" />
            </li>
            <li className="text-gray-500">{tag}</li>
          </ul>
        </nav>

        <div className="mt-10 px-5 sm:px-0">
          {edges.map(({node: post}, i) => <Post data={post} key={i} />)}
        </div>
      </div>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags