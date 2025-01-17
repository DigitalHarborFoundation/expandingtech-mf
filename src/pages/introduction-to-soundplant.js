import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const IntroductionToSoundPlant = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/makey-makey-circuit-board',
          next: '/makey-makey-practice',
        }}
      />
    </div>
  )
}

export default IntroductionToSoundPlant

export const lessonsQuery = graphql`
  query queryIntroductionToSoundPlant {
    wordpressWpLessons(wordpress_id: { eq: 933 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
