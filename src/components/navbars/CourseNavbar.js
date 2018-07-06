import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const CourseNavbar = ({ props }) => {
  return (
    <CourseNavbarContainer>
      <CourseNavbarNav>
        <CourseNavList>
          <ModuleTitle>Module One</ModuleTitle>
          <ul>
            <CourseNavEntry>
              <CourseNavLink>Placeholder 1</CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink>Placeholder 2</CourseNavLink>
            </CourseNavEntry>
          </ul>
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
  margin-left: 1.45rem;
  padding: 5px;
`
const CourseNavEntry = styled.li`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
`

const CourseNavLink = styled(Link)`
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

const ModuleTitle = styled.p`
  margin-bottom: 10px;
  margin-left: 0px;
  font-size: 1.25rem;
  font-weight: bolder;
`
