import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const TestLessonOne = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav navLinks={{ prev: '/', next: '/maker-warm-up' }} />
    </div>
  )
}

export default TestLessonOne

export const lessonsQuery = graphql`
  query queryLessonOne {
    wordpressWpLessons(wordpress_id: { eq: 25 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
