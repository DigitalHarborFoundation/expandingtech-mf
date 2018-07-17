import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GimpCreatingAnimations = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/gimp-pixel-art-character-illustration-going-further',
          next: '/graphic-design-gimp-mini-project',
        }}
      />
    </div>
  )
}

export default GimpCreatingAnimations

export const lessonsQuery = graphql`
  query queryGimpCreationgAnimations {
    wordpressWpLessons(wordpress_id: { eq: 5968 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
