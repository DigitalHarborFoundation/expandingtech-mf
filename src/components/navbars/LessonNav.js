import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const LessonNav = ({ navLinks }) => (
  <LessonNavContainer>
    <LessonNavLink to={navLinks.prev}>Previous Lesson</LessonNavLink>
    <LessonNavLink to="/">Home</LessonNavLink>
    <LessonNavLink to={navLinks.next}>Next Lesson</LessonNavLink>
  </LessonNavContainer>
)

export default LessonNav

const LessonNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  grid-area: footer;
  align-items: center;
  background-color: #f5f4f5;
  padding: 20px;
`

const LessonNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: #0091c9;
  text-decoration: none;
  transition: color 1s ease;

  &:hover {
    color: black;
    text-decoration: none;
    border-bottom: none;
  }
`
