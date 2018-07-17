import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const TinkercadMakeCustomKeychain = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/getting-started-with-tinkercad',
          next: '/tinkercad-design-model-landmark',
        }}
      />
    </div>
  )
}

export default TinkercadMakeCustomKeychain

export const lessonsQuery = graphql`
  query queryTinkercadMakeCustomKeychain {
    wordpressWpLessons(wordpress_id: { eq: 157 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
