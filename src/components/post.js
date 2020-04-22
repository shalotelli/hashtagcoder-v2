import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import TagLinks from './tag-links'

const Post = ({data}) => (
  <Link to={data.frontmatter.path} className="max-w-sm m-2 sm:m-5 p-3 rounded-lg shadow-md hover:bg-gray-100">
    {!!data.frontmatter.cover ? 
      <Img 
        fluid={data.frontmatter.cover.childImageSharp.fluid} 
        className="object-cover object-center rounded-lg h-32 mb-2" /> : 
      null
    }
    <h4 className="underline text-blue-500 text-xl sm:text-2xl hover:text-blue-600">{data.frontmatter.title}</h4>
    <p className="text-xs sm:text-sm pb-2 text-gray-500">{data.frontmatter.date}, {data.timeToRead} min read, <TagLinks tags={data.frontmatter.tags} /></p>
    <p className="text-sm sm:text-base">{data.excerpt}</p>
  </Link>
)

export default Post