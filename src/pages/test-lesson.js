import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const TestLesson = ({ data }) => (
  <div>
    <main>
      <LessonTitle>{data.wordpressWpLessons.title}</LessonTitle>
      <LessonCopy
        dangerouslySetInnerHTML={{ __html: data.wordpressWpLessons.content }}
      />
      <Link to="/">Go back to the homepage</Link>
    </main>
  </div>
)

const LessonTitle = styled.h1`
  font-family: avenir;
`

const LessonCopy = styled.p`
  font-family: avenir;
`

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
