import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const ProjectCreatingPersonalWireframe = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/wireframe-basics',
          next: '/introducing-html-css',
        }}
      />
    </div>
  )
}

export default ProjectCreatingPersonalWireframe

export const lessonsQuery = graphql`
  query queryCreatingPersonalWireframe {
    wordpressWpLessons(wordpress_id: { eq: 6440 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
