import React from 'react'
import Link from 'gatsby-link'

const TestLesson = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default TestLesson

export const lessonsQuery = graphql`
  query queryLesson {
    wordpressWpLessons(wordpress_id: { eq: 25 }) {
      id
      wordpress_id
      title
      slug
    }
  }
`
