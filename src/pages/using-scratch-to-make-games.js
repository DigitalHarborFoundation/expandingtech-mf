import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const UsingScratchMakeGames = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/graphic-design-gimp-mini-project',
          next: '/scratch-basic-skills',
        }}
      />
    </div>
  )
}

export default UsingScratchMakeGames

export const lessonsQuery = graphql`
  query queryUsingScratchMakeGames {
    wordpressWpLessons(wordpress_id: { eq: 203 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
