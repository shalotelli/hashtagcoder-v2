import React from 'react'
import {graphql, Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StyledHr from '../components/styled-hr'

export const courses = graphql`
  query CourseQuery {
    allMdx(limit: 1000, sort: {order: DESC, fields: frontmatter___date}, filter: {fields: {collection: {eq: "courses"}}}) {
      edges {
        node {
          frontmatter {
            path
            title
          }
          excerpt
        }
      }
    }
  }
`

const CoursesPage = ({data}) => {
  const {allMdx} = data
  const {edges: courses} = allMdx

  return (
    <Layout>
      <SEO title="Courses" />

      <div className="my-24 sm:my-32">
        <h1>Programmer <small><em>(noun)</em></small></h1>
        <h4>A person who fixed a problem that you don't know you have, in a way you don't understand.</h4>

        <ul className="mt-10 mb-48">
          {courses && courses.map(({node: course}, i) => (
            <li key={i}>
              <Link to={course.frontmatter.path}>
                <h4 className="underline text-blue-400 hover:text-blue-600">{course.frontmatter.title}</h4>
                <p>{course.excerpt}</p>
                <StyledHr title="View Course" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default CoursesPage