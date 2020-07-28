import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../css/thoughts.css'

export const dataQuery = graphql`
{
  appConfig {
    thoughts {
      title
      url
      description
    }
  }
}
`

const ThoughtsPage = ({data}) => {
  const thoughts = data.appConfig.thoughts
  return (
    <Layout>
      <SEO title="My thoughts on having finding success" />

      <div className="my-24 sm:my-32">
        <h1>My thoughts on...</h1>

        <ul className="thoughts-list">
        {thoughts.map((link, i) => (
          <li key={i}>
            <Link to={link.url}>{link.title}</Link>
            <p>{link.description}</p>
            <hr />
          </li>
        ))}
        </ul>
      </div>
    </Layout>
  )
}

export default ThoughtsPage