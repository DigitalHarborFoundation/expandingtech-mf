import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const WhyDocumentationIsImportantLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/introduction-graphic-design-gimp.js',
          next: '/gimp-pixel-art-character-illustration.js',
        }}
      />
    </div>
  )
}

export default WhyDocumentationIsImportantLesson

export const lessonsQuery = graphql`
  query queryGimpBasics {
    wordpressWpLessons(wordpress_id: { eq: 1118 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
