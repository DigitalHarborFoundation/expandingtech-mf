import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'

const TestLessonTwo = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/introduction">Previous Lesson</Link>
      <Link to="/">Go back to the homepage</Link>
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
