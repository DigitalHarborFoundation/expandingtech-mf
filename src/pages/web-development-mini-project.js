import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const WebDevelopmentMiniProject = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/activity-practicing-css-part-1',
          next: '/activity-practicing-css-part-2',
        }}
      />
    </div>
  )
}

export default WebDevelopmentMiniProject

export const lessonsQuery = graphql`
  query queryWebDevelopmentMiniProject {
    wordpressWpLessons(wordpress_id: { eq: 6705 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
