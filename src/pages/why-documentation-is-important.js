import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const WhyDocumentationIsImportantLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/project-planning',
          next: '/documenting-with-google-drive',
        }}
      />
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
