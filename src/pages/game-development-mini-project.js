import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GameDevelopmentMiniProject = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/gimp-and-scratch',
          next: '/',
        }}
      />
    </div>
  )
}

export default GameDevelopmentMiniProject

export const lessonsQuery = graphql`
  query queryGameDevelopmentMiniProject {
    wordpressWpLessons(wordpress_id: { eq: 117 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
