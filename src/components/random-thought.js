import React from 'react'
import {Link} from 'gatsby'

const RandomThought = ({thought}) => (
  <div className="text-xs sm:text-base mt-4">
    <Link to={thought.url} className="text-lg sm:text-2xl underline text-blue-500 hover:text-blue-800">
      Here's my thoughts on {thought.title.toLowerCase()}
    </Link>

    <p className="text-gray-500">{thought.description}</p>
  </div>
)

export default RandomThought