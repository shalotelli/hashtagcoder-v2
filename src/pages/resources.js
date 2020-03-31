import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResourceCard from '../components/resource-card'

import WebpackCoverImg from '../images/webpack2-cover.png'

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />

    <div className="my-24 sm:my-32">
      <h1>Create a life you love through technology.</h1>

      <div className="my-10 flex flex-wrap justify-center">
        <ResourceCard title="Webpack 2 - A Build Tool for Modern JavaScript Applications" image={WebpackCoverImg} url="https://leanpub.com/webpack2">
          <strong>Webpack 2 - A Build Tool for Modern JavaScript Applications</strong> helps beginner and intermediate users understand and fully utilize the power of Webpack in their projects.
        </ResourceCard>
      </div>
    </div>
  </Layout>
)

export default ResourcesPage