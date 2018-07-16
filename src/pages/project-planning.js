import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const ProjectPlanningLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/design-process',
          next: '/why-documentation-is-important',
        }}
      />
    </div>
  )
}

export default ProjectPlanningLesson

export const lessonsQuery = graphql`
  query queryProjectPlanning {
    wordpressWpLessons(wordpress_id: { eq: 649 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
