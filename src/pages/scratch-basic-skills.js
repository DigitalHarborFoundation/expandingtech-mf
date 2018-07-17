import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const ScrachBasicSkills = ({ data }) => {
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

export default ScratchBasicSkills

export const lessonsQuery = graphql`
  query queryScratchBasicSkills {
    wordpressWpLessons(wordpress_id: { eq: 205 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
