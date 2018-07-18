import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const ActivityBuildingHTMLBasics = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/common-html-elements',
          next: '/css-basics',
        }}
      />
    </div>
  )
}

export default ActivityBuildingHTMLBasics

export const lessonsQuery = graphql`
  query queryActivityBuildingHTMLBasics {
    wordpressWpLessons(wordpress_id: { eq: 6561 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
