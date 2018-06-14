import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Lesson from '../components/Lessons/Lesson'

const TestLessonTwo = ({ data }) => {
  return <Lesson lesson={data.wordpressWpLessons} />
}

export default TestLessonTwo

export const lessonsQuery = graphql`
  query queryLessonTwo {
    wordpressWpLessons(wordpress_id: { eq: 25 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
