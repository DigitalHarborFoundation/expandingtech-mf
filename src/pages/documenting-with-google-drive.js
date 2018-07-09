import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'

const DocumentingWithGoogleDriveLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default DocumentingWithGoogleDriveLesson

export const lessonsQuery = graphql`
  query queryDocumentingWithGoogleDrive {
    wordpressWpLessons(wordpress_id: { eq: 1611 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
