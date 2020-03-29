import React from 'react'
import '../css/styled-hr.css'

const StyledHr = ({title, additionalClasses}) => {
  title = title || '<hr>';

  return (
    <div className={`styled-hr ${additionalClasses}`} title={title} />
  )
}

export default StyledHr