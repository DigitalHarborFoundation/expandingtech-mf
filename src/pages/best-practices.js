import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/Lesson'
import Footer from '../components/Footer'

const TestLessonTwo = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/introduction">Previous Lesson</Link>
      <Link to="/">Go back to the homepage</Link>
      <Footer navLinks={{ prev: '/maker-warm-up', next: '/' }} />
    </div>
  )
}

export default TestLessonTwo

export const lessonsQuery = graphql`
  query queryLessonThree {
    wordpressWpLessons(wordpress_id: { eq: 647 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
