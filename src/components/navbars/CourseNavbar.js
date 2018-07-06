import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const CourseNavbar = ({ props }) => {
  return (
    <CourseNavbarContainer>
      <CourseNavbarNav>
        <CourseNavList>
          <CourseNavEntry>Placeholder 1</CourseNavEntry>
          <CourseNavEntry>Placeholder 2</CourseNavEntry>
        </CourseNavList>
      </CourseNavbarNav>
    </CourseNavbarContainer>
  )
}

export default CourseNavbar

const CourseNavbarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  padding-top: 20px;
  background-color: #f5f4f5;
`

const CourseNavbarNav = styled.nav`
  display: inline-block;
  margin: 0px;
  padding: 0px;
`

const CourseNavList = styled.ul`
  margin: 0px;
  padding: 5px;
`

const CourseNavEntry = styled(Link)`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: #0091c9;
  text-decoration: none;

  &:hover {
    color: black;
    text-decoration: none;
    border-bottom: none;
    transition: color 0.5s ease;
  }
`
