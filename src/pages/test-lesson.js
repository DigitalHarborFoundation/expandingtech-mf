import React from 'react'
import Link from 'gatsby-link'

const TestLesson = ({ data }) => (
  <div>
    <main>
      <p>
        <h1>{data.wordpressWpLessons.title}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: data.wordpressWpLessons.content }}
        />
      </p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </div>
)

export default TestLesson

export const lessonsQuery = graphql`
  query queryLesson {
    wordpressWpLessons(wordpress_id: { eq: 25 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
