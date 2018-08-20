import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GraphicDesignGimpMiniProject = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/gimp-creating-animations',
          next: '/using-scratch-to-make-games',
        }}
      />
    </div>
  )
}

export default GraphicDesignGimpMiniProject

export const lessonsQuery = graphql`
  query queryGraphicDesignGimpMiniProject {
    wordpressWpLessons(wordpress_id: { eq: 1132 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
