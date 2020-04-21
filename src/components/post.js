import React from 'react'
import {Link} from 'gatsby'
import StyledHr from './styled-hr'
import TagLinks from './tag-links'

const Post = ({data}) => (
  <Link to={data.frontmatter.path}>
    <h4 className="underline text-blue-400 text-xl sm:text-2xl hover:text-blue-600">{data.frontmatter.title}</h4>
    <p className="text-xs sm:text-sm pb-2 text-gray-400">{data.frontmatter.date}, {data.timeToRead} min read, <TagLinks tags={data.frontmatter.tags} /></p>
    <p className="text-sm sm:text-base">{data.excerpt}</p>
    <StyledHr title="View Post" />
  </Link>
)

export default Post