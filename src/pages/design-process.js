import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'

const DesignProcessLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
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
