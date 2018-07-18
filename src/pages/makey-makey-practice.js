import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const MakeyMakeyPractice = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/introduction-to-soundplant',
          next: '/intro-to-circuits-mini-project',
        }}
      />
    </div>
  )
}

export default MakeyMakeyPractice

export const lessonsQuery = graphql`
  query queryMakeyMakeyPractice {
    wordpressWpLessons(wordpress_id: { eq: 945 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
