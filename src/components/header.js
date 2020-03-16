import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({siteTitle}) => (
  <header className="bg-red-500 mb-8 p-5">
    <h1 className="m-0">
      <Link to="/" className="text-white">
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
