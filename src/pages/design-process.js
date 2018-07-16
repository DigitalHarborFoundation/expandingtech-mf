import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const DesignProcessLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/design-process',
          next: '/project-planning',
        }}
      />
    </div>
  )
}

export default DesignProcessLesson

export const lessonsQuery = graphql`
  query queryDesignProcess {
    wordpressWpLessons(wordpress_id: { eq: 675 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
