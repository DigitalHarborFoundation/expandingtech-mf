import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GettingStartedWithTinkercad = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/3d-printing-uses',
          next: '/tinkercad-make-custom-keychain',
        }}
      />
    </div>
  )
}

export default GettingStartedWithTinkercad

export const lessonsQuery = graphql`
  query queryGettingStartedWithTinkercad {
    wordpressWpLessons(wordpress_id: { eq: 155 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
