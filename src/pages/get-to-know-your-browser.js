import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/lesson'
import LessonNav from '../components/navbars/lessonnav'

const GetToKnowYourBrowser = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <LessonNav
        navLinks={{
          prev: '/google-drive-google-docs',
          next: '/design-process',
        }}
      />
    </div>
  )
}

export default GetToKnowYourBrowser

export const lessonsQuery = graphql`
  query queryGetToKnowYourBrowser {
    wordpressWpLessons(wordpress_id: { eq: 641 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
