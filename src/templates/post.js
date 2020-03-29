import React from 'react'
import {Link, graphql} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'

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

      <div className="my-24 sm:my-32">
        <nav class="text-sm my-3 hidden sm:block" aria-label="Breadcrumb">
          <ul class="list-none p-0 inline-flex">
            <li>
              <Link to="/blog" className="underline text-blue-400 hover:text-blue-600">Blog</Link>
              <FontAwesomeIcon icon={faCaretRight} className="mx-3" />
            </li>
            <li className="text-gray-500">{frontmatter.title}</li>
          </ul>
        </nav>

        <div className="post">
          <h1>{frontmatter.title}</h1>
          <h5 className="text-gray-400">{frontmatter.date}, {timeToRead} min read</h5>

          <div className="py-10" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}