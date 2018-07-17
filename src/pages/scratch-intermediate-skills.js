import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const ScratchIntermediateSkills = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/scratch-basic-skills',
          next: '/gimp-and-scratch',
        }}
      />
    </div>
  )
}

export default ScratchIntermediateSkills

export const lessonsQuery = graphql`
  query queryScratchIntermediateSkills {
    wordpressWpLessons(wordpress_id: { eq: 209 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
