import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const WhyDocumentationIsImportantLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/',
          next: '/',
        }}
      />
    </div>
  )
}

export default WhyDocumentationIsImportantLesson

export const lessonsQuery = graphql`
  query queryGimpSavingYourWork {
    wordpressWpLessons(wordpress_id: { eq: 1121 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
