import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'

const DocumentationMethodsPhotosVideoLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default DocumentationMethodsPhotosVideoLesson

export const lessonsQuery = graphql`
  query queryDocumentationMethodsPhotosVideo {
    wordpressWpLessons(wordpress_id: { eq: 1692 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
