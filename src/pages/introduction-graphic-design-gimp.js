import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const IntroductionGraphicDesignLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/document-your-first-project',
          next: '/gimp-basics',
        }}
      />
    </div>
  )
}

export default IntroductionGraphicDesignLesson

export const lessonsQuery = graphql`
  query queryIntroGraphicDesign {
    wordpressWpLessons(wordpress_id: { eq: 1103 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
