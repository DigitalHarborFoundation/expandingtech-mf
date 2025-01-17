import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const IntroducingThimble = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/introducing-html-css',
          next: '/html-basics',
        }}
      />
    </div>
  )
}

export default IntroducingThimble

export const lessonsQuery = graphql`
  query queryIntroducingThimble {
    wordpressWpLessons(wordpress_id: { eq: 6398 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
