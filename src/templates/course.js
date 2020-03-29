import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import YouTube from '../components/youtube'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
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
  const {markdownRemark} = data
  const {frontmatter, html, excerpt} = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} />
      
      <div className="course my-24 sm:my-32">
        <h1>{frontmatter.title}</h1>

        <div className="py-10" dangerouslySetInnerHTML={{ __html: html }} />

        {frontmatter.videos.map((video, i) => (
          <div className="mb-10">
            <YouTube video={video} key={i} />
          </div>
        ))}
      </div>
    </Layout>
  )
}