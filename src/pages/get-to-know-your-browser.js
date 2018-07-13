import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/Lesson'
const GetToKnowYourBrowser = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
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
