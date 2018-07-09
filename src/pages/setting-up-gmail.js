import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'

const LessonFour = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
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
