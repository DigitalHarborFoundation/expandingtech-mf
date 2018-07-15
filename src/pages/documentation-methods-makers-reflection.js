import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
const DocumentationMethodsMakersReflectionLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default DocumentationMethodsMakersReflectionLesson

export const lessonsQuery = graphql`
  query queryDocumentationMethodsMakersReflection {
    wordpressWpLessons(wordpress_id: { eq: 1710 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
