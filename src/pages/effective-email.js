import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const EffectiveEmailLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/setting-up-gmail',
          next: '/google-drive-google-docs',
        }}
      />
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
