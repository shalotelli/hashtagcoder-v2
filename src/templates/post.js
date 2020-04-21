import React from 'react'
import {Link, graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TagLinks from '../components/tag-links'
import '../css/post.css'

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: {path: {eq: $path}}) {
      body
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`

export default function PostTemplate({data}) {
  const {mdx} = data
  const {frontmatter, body, excerpt, timeToRead} = mdx

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
          <h5 className="text-gray-400">
            {frontmatter.date}, {timeToRead} min read, <TagLinks tags={frontmatter.tags} />
          </h5>

          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}