import React from 'react'
import PropTypes from 'prop-types'

import StyledHr from './styled-hr'

const Footer = ({title}) => (
  <footer className="static bottom-0">
    <StyledHr title="<footer>" />
    &copy; {new Date().getFullYear()} {title}<br />
    Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

Footer.propTypes = {
  title: PropTypes.string
}

Footer.defaultProps = {
  title: ``
}

export default Footer