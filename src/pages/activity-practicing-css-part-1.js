import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const ActivityPracticingCSSPart1 = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/css-basics',
          next: '/web-development-mini-project',
        }}
      />
    </div>
  )
}

export default ActivityPracticingCSSPart1

export const lessonsQuery = graphql`
  query queryActivityPracticingCSSPart1 {
    wordpressWpLessons(wordpress_id: { eq: 6685 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
