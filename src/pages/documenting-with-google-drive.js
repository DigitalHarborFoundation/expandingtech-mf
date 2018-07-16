import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const DocumentingWithGoogleDriveLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/documenting-with-google-drive',
          next: '/documentation-methods-photos-video',
        }}
      />
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
