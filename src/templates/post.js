import React from 'react'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TagLinks from '../components/tag-links'
import RelatedPost from '../components/related-post'
import ShareButtons from '../components/share-buttons'
import BookSignup from '../components/book-signup'

import '../css/post.css'

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(frontmatter: {path: {eq: $path}}) {
      body
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updatedOn(formatString: "MMMM DD, YYYY")
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
        socialCard {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`

export default function PostTemplate({data}) {
  const {mdx: post, site} = data
  const {frontmatter, body, excerpt, timeToRead} = post
  const socialCard = post.frontmatter.socialCard
      ? post.frontmatter.socialCard.childImageSharp.resize
      : null

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} image={socialCard} />

      <div className="my-16 sm:my-32">
        {!!frontmatter.cover ? 
          <Img 
            fluid={frontmatter.cover.childImageSharp.fluid} 
            className="object-cover object-center rounded-lg h-64" /> : 
          null
        }

        <nav className="text-sm my-3 hidden sm:block bg-gray-100 p-3 rounded-lg" aria-label="Breadcrumb">
          <ul className="list-none p-0 inline-flex">
            <li>
              <Link to="/blog" className="underline text-blue-400 hover:text-blue-600">Blog</Link>
              <FontAwesomeIcon icon={faCaretRight} className="mx-3" />
            </li>
            <li className="text-gray-500">{frontmatter.title}</li>
          </ul>
        </nav>

        <div className="post">
          <h1>{frontmatter.title}</h1>
          <p className="text-gray-400 mb-3 text-sm sm:text-base">
            Published {frontmatter.date}, {timeToRead} min read, <TagLinks tags={frontmatter.tags} />

            {frontmatter.updatedOn && <div>Updated on {frontmatter.updatedOn}</div>}
          </p>

          <div className="mb-3">
            <ShareButtons 
              url={site.siteMetadata.siteUrl + frontmatter.path} 
              title={frontmatter.title} 
              tags={frontmatter.tags} />
          </div>

          <MDXRenderer>{body}</MDXRenderer>

          <p>I tweet about this type of thing a lot. If you enjoyed this article, <a href="https://twitter.com/hashtagcoder" target="_blank" rel="noopener noreferrer">you may enjoy following me</a>.</p>

          <div className="my-3 w-screen">
            <ShareButtons 
              url={site.siteMetadata.siteUrl + frontmatter.path} 
              title={frontmatter.title} 
              tags={frontmatter.tags} />
          </div>
        </div>

        <RelatedPost post={post} />

        <BookSignup />
      </div>
    </Layout>
  )
}