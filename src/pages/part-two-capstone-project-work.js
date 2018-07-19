import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const PartTwoCapstoneProjectWork = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/part-one-capstone-project-planning',
          next: '/part-three-capstone-project-reflection',
        }}
      />
    </div>
  )
}

export default PartTwoCapstoneProjectWork

export const lessonsQuery = graphql`
  query queryPartTwoCapstoneProjectWork {
    wordpressWpLessons(wordpress_id: { eq: 990 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
