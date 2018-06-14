import React from 'react'
import LessonListing from '../components/Lessons/LessonListing'

const IndexPage = ({ data }) => (
  <div>
    {data.allWordpressWpLessons.edges.reverse().map(({ node }) => {
      return <LessonListing lesson={node} key={node.wordpress_id} />
    })}
  </div>
)

export const lessonsQuery = graphql`
  query queryLessons {
    allWordpressWpLessons(filter: { lesson_tag: { eq: 318 } }) {
      edges {
        node {
          wordpress_id
          title
          excerpt
        }
      }
    }
  }
`

export default IndexPage
