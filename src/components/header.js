import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const links = [
  {
    href: 'blog',
    page: 'blog',
    value: 'Blog'
  },

  {
    href: 'resources',
    page: 'resources',
    value: 'Resources'
  }
];

const Header = ({siteTitle}) => (
  <header className="bg-red-500 text-white mb-5 p-8 flex justify-between">
    <style>
      .navigation li {
        @apply mr-5;
      }
    </style>

    <h1 className="m-0">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>

    <ul className="flex navigation">
      {links.map(link =>
        <li key={link.page}>
          <Link to={`/${link.href}`}>{link.value}</Link>
        </li>
      )}

      <li>
        <a href="https://twitter.com/hashtagcoder" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/hashtag_coder/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/sha-alibhai/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>

      <li>
        <a href="https://github.com/shalotelli" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
