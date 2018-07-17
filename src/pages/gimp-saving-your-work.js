import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GimpSavingYourWorkLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/gimp-pixel-art-character-illustration.js',
          next: '/gimp-pixel-art-character-illustration-going-further.js',
        }}
      />
    </div>
  )
}

export default GimpSavingYourWorkLesson

export const lessonsQuery = graphql`
  query queryGimpSavingYourWork {
    wordpressWpLessons(wordpress_id: { eq: 1121 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
