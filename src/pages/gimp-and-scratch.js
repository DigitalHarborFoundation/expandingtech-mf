import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GimpAndScratch = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/scratch-intermediate-skills',
          next: '/game-development-mini-project',
        }}
      />
    </div>
  )
}

export default GimpAndScratch

export const lessonsQuery = graphql`
  query queryGimpAndScratch {
    wordpressWpLessons(wordpress_id: { eq: 1143 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
