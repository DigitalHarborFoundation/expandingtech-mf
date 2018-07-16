import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const TestLessonTwo = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{ prev: '/maker-warm-up', next: '/setting-up-gmail' }}
      />
    </div>
  )
}

export default TestLessonTwo

export const lessonsQuery = graphql`
  query queryLessonThree {
    wordpressWpLessons(wordpress_id: { eq: 647 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
