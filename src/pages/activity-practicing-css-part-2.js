import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const ActivityPracticingCSSPart2 = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/web-development-mini-project',
          next: '#',
        }}
      />
    </div>
  )
}

export default ActivityPracticingCSSPart2

export const lessonsQuery = graphql`
  query queryActivityPracticingCSSPart2 {
    wordpressWpLessons(wordpress_id: { eq: 6709 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
