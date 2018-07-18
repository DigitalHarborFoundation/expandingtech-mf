import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const MakeyMakeyCircuitBoard = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/introduction-to-circuits',
          next: '/introduction-to-soundplant',
        }}
      />
    </div>
  )
}

export default MakeyMakeyCircuitBoard

export const lessonsQuery = graphql`
  query queryMakeyMakeyCircuitBoard {
    wordpressWpLessons(wordpress_id: { eq: 931 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
