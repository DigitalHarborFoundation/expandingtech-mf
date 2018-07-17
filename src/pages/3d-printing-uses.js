import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const Uses3DPrinting = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/what-is-3d-printing',
          next: '/getting-started-with-tinkercad',
        }}
      />
    </div>
  )
}

export default Uses3DPrinting

export const lessonsQuery = graphql`
  query queryUses3DPrinting {
    wordpressWpLessons(wordpress_id: { eq: 143 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
