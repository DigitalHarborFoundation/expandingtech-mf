import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const WhatIs3DPrinting = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/game-development-mini-project',
          next: '/3d-printing-uses',
        }}
      />
    </div>
  )
}

export default WhatIs3DPrinting

export const lessonsQuery = graphql`
  query queryWhatIs3DPrinting {
    wordpressWpLessons(wordpress_id: { eq: 140 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
