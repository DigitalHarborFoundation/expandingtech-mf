import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const LessonFour = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{ prev: '/best-practices', next: '/effective-email' }}
      />
    </div>
  )
}

export default LessonFour

export const lessonsQuery = graphql`
  query queryLessonFour {
    wordpressWpLessons(wordpress_id: { eq: 4941 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
