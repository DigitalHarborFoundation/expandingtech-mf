import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GoogleDriveGoogleDocsLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/effective-email',
          next: '/get-to-know-your-browser',
        }}
      />
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
