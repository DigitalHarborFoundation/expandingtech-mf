import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const CommonHTMLElements = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/html-basics',
          next: '/activity-building-html-basics',
        }}
      />
    </div>
  )
}

export default CommonHTMLElements

export const lessonsQuery = graphql`
  query queryCommonHTMLElements {
    wordpressWpLessons(wordpress_id: { eq: 6567 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
