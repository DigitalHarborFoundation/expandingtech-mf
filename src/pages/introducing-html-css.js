import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const IntroducingHTMLCSS = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/project-creating-personal-wireframe',
          next: '/introducing-thimble',
        }}
      />
    </div>
  )
}

export default IntroducingHTMLCSS

export const lessonsQuery = graphql`
  query queryIntroducingHTMLCSS {
    wordpressWpLessons(wordpress_id: { eq: 6465 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
