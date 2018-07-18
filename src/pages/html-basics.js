import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const HTMLBasics = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/introducing-thimble',
          next: '/common-html-elements',
        }}
      />
    </div>
  )
}

export default HTMLBasics

export const lessonsQuery = graphql`
  query queryHTMLBasics {
    wordpressWpLessons(wordpress_id: { eq: 6431 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
