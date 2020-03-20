import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import './header.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const links = [
  {
    href: 'blog',
    page: 'blog',
    value: 'Blog',
    active: true
  },

  {
    href: 'learn',
    page: 'learn',
    value: 'Learn',
    active: false
  },

  {
    href: 'mentorship',
    page: 'mentorship',
    value: 'Mentorship',
    active: false
  },

  {
    href: 'resources',
    page: 'resources',
    value: 'Resources',
    active: false
  }
]

const social = [
  {
    href: 'https://twitter.com/hashtagcoder',
    icon: faTwitter 
  },

  {
    href: 'https://www.instagram.com/hashtag_coder/',
    icon: faInstagram 
  },

  {
    href: 'https://www.linkedin.com/in/sha-alibhai/',
    icon: faLinkedin 
  },

  {
    href: 'https://github.com/shalotelli',
    icon: faGithub 
  }
]

const Header = ({siteTitle}) => (
  <header className="mb-5 p-8 flex justify-between">
    <h3 className="m-0">
      <Link to="/">
        {siteTitle}
      </Link>
    </h3>

    <ul className="navigation">
      {links.filter(x => x.active).map(link => (
        <li key={link.page}>
          <Link to={`/${link.href}`} 
            className="hoverable" 
            activeClassName="border-b border-dashed">
            {link.value}
          </Link>
        </li>
      ))}

      {social.map(link => (
        <li>
          <a href={link.href} 
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={link.icon} />
          </a>
        </li>
      ))}
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
