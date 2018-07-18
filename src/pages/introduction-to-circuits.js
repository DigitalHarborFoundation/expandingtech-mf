import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const IntroductionToCircuits = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/3d-printing-mini-project',
          next: '/makey-makey-circuit-board',
        }}
      />
    </div>
  )
}

export default IntroductionToCircuits

export const lessonsQuery = graphql`
  query queryIntroductionToCircuits {
    wordpressWpLessons(wordpress_id: { eq: 889 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
