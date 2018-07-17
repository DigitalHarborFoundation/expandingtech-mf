import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const TinkercadDesignModelLandmark = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/tinkercad-make-custom-keychain',
          next: '/3d-printing-mini-project',
        }}
      />
    </div>
  )
}

export default TinkercadDesignModelLandmark

export const lessonsQuery = graphql`
  query queryTinkercadDesignModelLandmark {
    wordpressWpLessons(wordpress_id: { eq: 6088 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
