import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/post.css'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      excerpt
      timeToRead
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
  const {frontmatter, html, excerpt, timeToRead} = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} />

      <div className="post">
        <h1>{frontmatter.title}</h1>
        <h5 className="text-gray-400">{frontmatter.date}, {timeToRead} min read</h5>

        <div className="py-10" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}