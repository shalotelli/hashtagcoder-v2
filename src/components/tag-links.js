import React from 'react'
import {Link} from 'gatsby'

import '../css/tag-links.css'

const TagLinks = ({tags}) => (
  <>
    <span>tagged as: </span>
    {tags.map((tag, i) => (
      <span key={i}>
        <Link className="tag-link" to={`/tags/${tag.replace(/ /g, '-')}`}>
          {tag}
        </Link>
        {(i < tags.length - 1) ? ', ' : ''}
      </span>
    ))}
  </>
)

export default TagLinks