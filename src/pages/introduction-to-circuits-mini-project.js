import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const IntroductionToCircuitsMiniProject = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/makey-makey-practice',
          next: '/',
        }}
      />
    </div>
  )
}

export default IntroductionToCircuitsMiniProject

export const lessonsQuery = graphql`
  query queryIntroductionToCircuitsMiniProject {
    wordpressWpLessons(wordpress_id: { eq: 962 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
