import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'

const EffectiveEmailLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default EffectiveEmailLesson

export const lessonsQuery = graphql`
  query queryEffectiveEmail {
    wordpressWpLessons(wordpress_id: { eq: 87 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
