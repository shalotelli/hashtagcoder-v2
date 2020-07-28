import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import SEO from '../components/seo'
import YouTube from '../components/youtube'

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: {path: {eq: $path}}) {
      body
      excerpt
      frontmatter {
        path
        title
        videos
      }
    }
  }
`

export default function CourseTemplate({data}) {
  const {mdx} = data
  const {frontmatter, body, excerpt} = mdx

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} />
      
      <div className="course my-24 sm:my-32">
        <h1>{frontmatter.title}</h1>
        
        <MDXRenderer>{body}</MDXRenderer>

        {frontmatter.videos.map((video, i) => (
          <div className="mb-10" key={i}>
            <YouTube video={video} />
          </div>
        ))}
      </div>
    </Layout>
  )
}