import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const ScratchBasicSkills = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/using-scratch-to-make-games',
          next: '/scratch-basic-skills',
        }}
      />
    </div>
  )
}

export default ScratchBasicSkills

export const lessonsQuery = graphql`
  query queryScratchBasicSkills {
    wordpressWpLessons(wordpress_id: { eq: 207 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
