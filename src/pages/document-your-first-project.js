import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
const DocumentYourFirstProjectLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default DocumentYourFirstProjectLesson

export const lessonsQuery = graphql`
  query queryDocumentYourFirstProject {
    wordpressWpLessons(wordpress_id: { eq: 3364 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
