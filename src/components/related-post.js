import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import StyledHr from './styled-hr'

const RelatedPost = ({post}) => {
  const {allMdx: data} = useStaticQuery(
    graphql`
    query data {
      allMdx(limit: 1000, sort: {order: DESC, fields: frontmatter___date}, filter: {fields: {collection: {eq: "posts"}}, isFuture: {eq: false}}) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              tags
            }
            excerpt
            timeToRead
          }
        }
      }
    }
    `
  )

  function calculateRelatedPost() {
    const tags = post.frontmatter.tags
    const posts = data.edges

    let mostRelevantPosts = []
    let highestRelevancy = 0

    posts.forEach(({node: p}) => {
      // ignore same post
      if (p.frontmatter.path === post.frontmatter.path)
        return

      // calculate relevancy based on number of matching tags
      const relevancyScore = p.frontmatter.tags.filter(tag => tags.includes(tag)).length

      if (relevancyScore > highestRelevancy) {
        mostRelevantPosts = [p]
        highestRelevancy = relevancyScore
      } else if (relevancyScore === highestRelevancy) {
        mostRelevantPosts.push(p)
      }
    })

    // return random relevant post
    return mostRelevantPosts[Math.floor(Math.random() * mostRelevantPosts.length)]
  }

  const relevantPost = calculateRelatedPost()

  return (
    <>
      <StyledHr title="Related Post" />
      <Link to={relevantPost.frontmatter.path}>
        <div className="px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">{relevantPost.frontmatter.date}, {relevantPost.timeToRead} min read</span>

            <div>
              {relevantPost.frontmatter.tags.map(tag => (
                <span className="px-2 py-1 m-1 bg-gray-600 text-gray-100 font-bold rounded text-sm">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="mt-2">
            <h3 className="text-2xl text-gray-700 font-bold hover:text-gray-600">{relevantPost.frontmatter.title}</h3>
            <p className="mt-2 text-gray-600">{relevantPost.excerpt}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-blue-600 hover:underline">Read more</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default RelatedPost