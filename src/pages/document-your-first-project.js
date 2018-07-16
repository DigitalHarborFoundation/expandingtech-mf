import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const DocumentYourFirstProjectLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/documentation-methods-makers-reflections',
          next: '#',
        }}
      />
    </div>
  )
}

export default DocumentYourFirstProjectLesson

export const lessonsQuery = graphql`
  query queryDocumentYourFirstProject {
    wordpressWpLessons(wordpress_id: { eq: 3364 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
