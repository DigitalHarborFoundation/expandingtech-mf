import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const CourseNavbar = ({ props }) => {
  return (
    <CourseNavbarContainer>
      <CourseNavbarNav>
        <CourseNavList>
          <ModuleTitle>Orientation</ModuleTitle>
          <ul>
            <CourseNavEntry>
              <CourseNavLink to="/introduction">
                Welcome to Maker Foundations
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/maker-warm-up">
                We Are All Makers
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/best-practices">
                Best Practices for Success
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/setting-up-gmail">
                Setting Up Gmail
              </CourseNavLink>
            </CourseNavEntry>
          </ul>
          <ModuleTitle>Digital Communication</ModuleTitle>
          <ul>
            <CourseNavEntry>
              <CourseNavLink to="/effective-email">
                Effective Email
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/google-drive-google-docs">
                Google Drive & Google Docs
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/get-to-know-your-browser">
                Get to Know Your Browser
              </CourseNavLink>
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
