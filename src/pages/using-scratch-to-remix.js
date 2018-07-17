import React from 'react'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const UsingScratchRemix = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/scratch-basic-skills',
          next: '/scratch-intermediate-skills',
        }}
      />
    </div>
  )
}

export default UsingScratchRemix

export const lessonsQuery = graphql`
  query queryUsingScratchRemix {
    wordpressWpLessons(wordpress_id: { eq: 205 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
