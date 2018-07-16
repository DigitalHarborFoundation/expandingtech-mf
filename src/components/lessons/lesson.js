import React from 'react'
import styled from 'styled-components'

const Lesson = ({ lesson }) => (
  <div>
    <LessonContainer>
      <LessonTitle>{lesson.title}</LessonTitle>
      <LessonCopy dangerouslySetInnerHTML={{ __html: lesson.content }} />
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

  a {
    color: #0091c9;
    font-family: avenir;
    text-decoration: none;
    transition: color 0.5s ease;
  }

  a:hover {
    color: black;
    text-decoration: none;
    border-bottom: none;
    transition: color 0.5s ease;
  }
`

const LessonTitle = styled.h1`
  font-family: avenir;
`

const LessonCopy = styled.p`
  font-family: avenir;
`
export default Lesson
