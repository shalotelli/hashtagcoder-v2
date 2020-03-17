import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({title}) => (
  <footer className="fixed bottom-0">
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