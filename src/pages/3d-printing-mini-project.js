import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const MiniProject3DPrinting = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/tinkercad-design-model-landmark',
          next: '/',
        }}
      />
    </div>
  )
}

export default MiniProject3DPrinting

export const lessonsQuery = graphql`
  query queryMiniProject3DPrinting {
    wordpressWpLessons(wordpress_id: { eq: 289 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
