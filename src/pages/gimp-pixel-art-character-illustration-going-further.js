import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GimpPixelArtCharacterIllustrationGoingFurtherLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/gimp-saving-your-work',
          next: '/gimp-creating-animations',
        }}
      />
    </div>
  )
}

export default GimpPixelArtCharacterIllustrationGoingFurtherLesson

export const lessonsQuery = graphql`
  query queryGimpPixelArtCharacterIllustrationGoingFurther {
    wordpressWpLessons(wordpress_id: { eq: 7186 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
