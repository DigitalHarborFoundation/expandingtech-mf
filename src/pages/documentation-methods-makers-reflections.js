import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const DocumentationMethodsMakersReflectionLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/documentation-methods-makers-reflections',
          next: '/document-your-first-project',
        }}
      />
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
