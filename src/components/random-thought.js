import React from 'react'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

const RandomThought = ({thought}) => (
  <div className="text-xs sm:text-base mt-4">
    <Link to={thought.url} className="text-lg sm:text-2xl underline text-blue-500 hover:text-blue-800">
      Here's my thoughts on {thought.title.toLowerCase()}
    </Link>

    <p className="text-gray-500">{thought.description}</p>

    <a href="https://twitter.com/hashtagcoder" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-base sm:text-lg underline text-blue-500 hover:text-blue-800">
      Tweet me (@hashtagcoder) and share your thoughts!
    </a>
  </div>
)

export default RandomThought