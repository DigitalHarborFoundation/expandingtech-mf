import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'

const TestLessonOne = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
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
