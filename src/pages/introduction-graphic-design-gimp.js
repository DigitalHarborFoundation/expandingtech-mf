import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const WhyDocumentationIsImportantLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/document-your-first-project.js',
          next: '/gimp-basics.js',
        }}
      />
    </div>
  )
}

export default WhyDocumentationIsImportantLesson

export const lessonsQuery = graphql`
  query queryIntroGraphicDesign {
    wordpressWpLessons(wordpress_id: { eq: 1103 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
