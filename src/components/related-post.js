import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import StyledHr from './styled-hr'

const RelatedPost = ({post}) => {
  const {allMdx: data} = useStaticQuery(
    graphql`
    query data {
      allMdx(limit: 1000, sort: {order: DESC, fields: frontmatter___date}, filter: {fields: {collection: {eq: "posts"}}}) {
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
    const posts = data.edges.filter(x => 
      new Date(x.node.frontmatter.date) < new Date()
    )

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
        <div className="px-10 py-6 bg-gray-100 rounded-lg shadow-md mx-2 sm:mx-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="font-light text-gray-600 text-sm">{relevantPost.frontmatter.date}, {relevantPost.timeToRead} min read</span>

            <div>
              {relevantPost.frontmatter.tags.map((tag, i) => (
                <span key={i}
                  className="px-2 py-1 mr-2 bg-blue-600 text-gray-100 font-bold rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-2">
            <h4 className="text-gray-700 font-bold hover:text-gray-600">{relevantPost.frontmatter.title}</h4>
            <p className="mt-2 text-gray-600 text-sm">{relevantPost.excerpt}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-blue-600 hover:underline text-sm">Read more</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default RelatedPost