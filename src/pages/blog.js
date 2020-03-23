import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StyledHr from '../components/styled-hr'
import {useBlogPostQuery} from '../hooks/use-blog-post-query'

const BlogPage = () => {
  const posts = useBlogPostQuery()

  return (
    <Layout>
      <SEO title="Blog" />

      <ul className="mb-48">
        {posts && posts.map(({node: post}, i) => (
          <li key={i}>
            <Link to={post.frontmatter.path}>
              <h4 className="underline text-blue-400 hover:text-blue-600">{post.frontmatter.title}</h4>
              <p>{post.excerpt}</p>
              <StyledHr title="View Post" />
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage