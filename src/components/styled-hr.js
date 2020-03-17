import React from 'react'
import './styled-hr.css'

const StyledHr = ({title, type}) => {
  title = title || '<hr>';

  return (
    <div className={`styled-hr ${type}`} title={title} />
  )
}

export default StyledHr