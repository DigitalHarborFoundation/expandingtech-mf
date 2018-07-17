import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GimpPixelArtCharacterIllustrationLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/gimp-basics.js',
          next: '/gimp-pixel-art-character-illustration-going-further.js',
        }}
      />
    </div>
  )
}

export default GimpPixelArtCharacterIllustrationLesson

export const lessonsQuery = graphql`
  query queryGimpPixelArtCharacterIllustration {
    wordpressWpLessons(wordpress_id: { eq: 1106 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
