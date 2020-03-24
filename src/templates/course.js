import React from 'react'
import {graphql} from 'gatsby'
import YouTube from 'react-youtube'

import Layout from '../components/layout'
import SEO from '../components/seo'

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
      
      <div className="course">
        <h1>{frontmatter.title}</h1>

        <div className="py-10" dangerouslySetInnerHTML={{ __html: html }} />

        <div className="flex flex-wrap justify-center">
          {frontmatter.videos.map((video, i) => (
            <YouTube 
              videoId={video}
              key={i}
              className="mb-10"
              opts={{
                width: '560',
                height: '315'
              }} />
          ))}
          </div>
      </div>
    </Layout>
  )
}