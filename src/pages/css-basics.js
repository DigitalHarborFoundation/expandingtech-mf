import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const CSSBasics = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/activity-building-html-basics',
          next: '/activity-practicing-css-part-1',
        }}
      />
    </div>
  )
}

export default CSSBasics

export const lessonsQuery = graphql`
  query queryCSSBasics {
    wordpressWpLessons(wordpress_id: { eq: 6467 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
