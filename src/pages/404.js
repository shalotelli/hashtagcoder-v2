import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Page not found. It's usually in the last place you look..." />
    <div className="my-24 sm:my-32">
      <h1>Page Not Found.</h1>
      <p>It's usually in the last place you look...</p>
      <p><a href="/blog">Try checking out some interesting blog posts!</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
