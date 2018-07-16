import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const DocumentationMethodsPhotosVideoLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/documentation-methods-photos-video',
          next: '/documentation-methods-makers-reflections',
        }}
      />
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
