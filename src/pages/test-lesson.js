import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const TestLesson = ({ data }) => (
  <div>
    <LessonContainer>
      <LessonTitle>{data.wordpressWpLessons.title}</LessonTitle>
      <LessonCopy
        dangerouslySetInnerHTML={{ __html: data.wordpressWpLessons.content }}
      />
      <Link to="/">Go back to the homepage</Link>
    </LessonContainer>
  </div>
)

const LessonContainer = styled.main`
  display: flex;
  flex-direction: column;

  img {
    width: auto;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  img: hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

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
