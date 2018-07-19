import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const PartThreeCapstoneProjectReflection = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/part-two-capstone-project-work',
          next: '/',
        }}
      />
    </div>
  )
}

export default PartThreeCapstoneProjectReflection

export const lessonsQuery = graphql`
  query queryPartThreeCapstoneProjectReflection {
    wordpressWpLessons(wordpress_id: { eq: 993 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
