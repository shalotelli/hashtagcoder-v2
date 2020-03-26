import React from 'react'
import {Link} from 'gatsby'
import StyledHr from './styled-hr'

const Post = ({data}) => (
  <Link to={data.frontmatter.path}>
    <h4 className="underline text-blue-400 hover:text-blue-600">{data.frontmatter.title}</h4>
    <p className="text-sm pb-2 text-gray-400">{data.frontmatter.date}, {data.timeToRead} min read</p>
    <p>{data.excerpt}</p>
    <StyledHr title="View Post" />
  </Link>
)

export default Post