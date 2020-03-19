import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default function PostTemplate({data}) {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark

  return (
    <Layout>
      <div className="post">
        <h1>{frontmatter.title}</h1>
        <h5 className="text-gray-400">{frontmatter.date}</h5>

        <div className="py-10" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}