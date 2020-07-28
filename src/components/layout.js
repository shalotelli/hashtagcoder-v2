/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'
import {ThemeContext} from '../context/theme-context'

import 'typeface-merriweather'

import Header from './header'
import Footer from './footer'

import '../css/layout.css'

const Layout = ({children}) => {
  const {theme} = useContext(ThemeContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={`theme-${theme} bg-primary text-main-text transition-all duration-300`}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div className="sm:mx-auto sm:w-10/12 p-2">
        <main>{children}</main>
        <Footer title={data.site.siteMetadata.title} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
