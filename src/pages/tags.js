import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const pageQuery = graphql`
query {
  allMdx(limit: 1000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`

const TagsPage = ({data}) => (
  <Layout>
    <SEO title="Blog post tags" />

    <div className="my-24 sm:my-32">
      <h1>Tags</h1>
      
      <ul className="mt-10 px-5 sm:px-0">
        {data.allMdx.group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue.replace(/ /g, '-')}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage