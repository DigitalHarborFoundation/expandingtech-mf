import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/Lessons/Lesson'
import Footer from '../components/Footer'

const TestLessonTwo = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Footer navLinks={{ prev: '/introduction', next: '/best-practices' }} />
    </div>
  )
}

export default TestLessonTwo

export const lessonsQuery = graphql`
  query queryLessonTwo {
    wordpressWpLessons(wordpress_id: { eq: 85 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
