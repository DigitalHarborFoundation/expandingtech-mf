import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'

const WhyDocumentationIsImportantLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default WhyDocumentationIsImportantLesson

export const lessonsQuery = graphql`
  query queryWhyDocumentationIsImportant {
    wordpressWpLessons(wordpress_id: { eq: 1612 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
