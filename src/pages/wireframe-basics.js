import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const WireframeBasics = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/introduction-to-circuits-mini-project',
          next: '/project-creating-personal-wireframe',
        }}
      />
    </div>
  )
}

export default WireframeBasics

export const lessonsQuery = graphql`
  query queryWireframeBasics {
    wordpressWpLessons(wordpress_id: { eq: 6437 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
