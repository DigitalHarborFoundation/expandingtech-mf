import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const PartOneCapstoneProjectPlanning = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/activity-practicing-css-part-2',
          next: '/part-two-capstone-project-work',
        }}
      />
    </div>
  )
}

export default PartOneCapstoneProjectPlanning

export const lessonsQuery = graphql`
  query queryPartOneCapstoneProjectPlanning {
    wordpressWpLessons(wordpress_id: { eq: 978 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
