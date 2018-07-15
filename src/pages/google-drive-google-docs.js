import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
const GoogleDriveGoogleDocsLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default GoogleDriveGoogleDocsLesson

export const lessonsQuery = graphql`
  query queryGoogleDriveGoogleDocs {
    wordpressWpLessons(wordpress_id: { eq: 89 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
