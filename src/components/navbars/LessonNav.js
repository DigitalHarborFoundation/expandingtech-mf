import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const LessonNav = ({ navLinks }) => (
  <LessonNavContainer>
    <Link to={navLinks.prev}>Previous Lesson</Link>
    <Link to="/">Home</Link>
    <Link to={navLinks.next}>Next Lesson</Link>
  </LessonNavContainer>
)

export default LessonNav

const LessonNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  grid-area: footer;
  align-items: center;
  padding: 20px;
`
