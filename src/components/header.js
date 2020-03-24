import React from 'react'
import PropTypes from 'prop-types'
import {Link, useStaticQuery, graphql} from 'gatsby'

import './header.css'
import logo from '../images/hashtagcoder-icon.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const socialIconsMap = {
  twitter: faTwitter,
  instagram: faInstagram,
  linkedin: faLinkedin,
  github: faGithub
}

const Header = ({siteTitle}) => {
  const data = useStaticQuery(graphql`
    {
      appConfig {
        socialLinks {
          href
          icon
        }
        navigation {
          value
          page
          href
          active
        }
      }
    }
  `)

  return (
    <header className="mb-5 p-8 flex justify-between">
      <h3 className="m-0">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-10 mr-1" />
          {siteTitle}
        </Link>
      </h3>

      <ul className="navigation">
        {data.appConfig.navigation.filter(x => x.active).map(link => (
          <li key={link.page}>
            <Link to={`/${link.href}`} 
              className="hoverable" 
              activeClassName="border-b border-dashed">
              {link.value}
            </Link>
          </li>
        ))}

        {data.appConfig.socialLinks.map((link, i) => (
          <li key={i}>
            <a href={link.href} 
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={socialIconsMap[link.icon]} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
