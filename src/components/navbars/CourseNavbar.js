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
          <ModuleTitle>Project Planning</ModuleTitle>
          <ul>
            <CourseNavEntry>
              <CourseNavLink to="/design-process">
                The Design Process
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/project-planning">
                Project Planning
              </CourseNavLink>
            </CourseNavEntry>
          </ul>
          <ModuleTitle>Maker Documentation</ModuleTitle>
          <ul>
            <CourseNavEntry>
              <CourseNavLink to="/why-documentation-is-important">
                Why Documentation Is Important
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/documenting-with-google-drive">
                Documenting With Google Drive
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/documentation-methods-photos-video">
                Documentation Methods: Photos and Video
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/documentation-methods-makers-reflection">
                Documentation Methods: Maker's Reflections
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/document-your-first-project">
                Document Your First Project
              </CourseNavLink>
            </CourseNavEntry>
          </ul>
          <ModuleTitle>Graphic Design With Gimp</ModuleTitle>
          <ul>
            <CourseNavEntry>
              <CourseNavLink to="introduction-graphic-design-gimp">
                Introduction to Graphic Design and Gimp
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-basics">Gimp: The Basics</CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-pixel-art-character-illustration">
                Gimp: Pixel Art Character Illustration
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-saving-your-work">
                Gimp: Saving Your Work
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-pixel-art-character-illustration-going-further">
                Pixel Art Character Illustration: Going Further
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-creating-animations">
                Gimp: Creating Animations
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/graphic-design-gimp-mini-project">
                Graphic Design With Gimp Mini Project
              </CourseNavLink>
            </CourseNavEntry>
          </ul>
          <ModuleTitle>Game Development With Scratch</ModuleTitle>
          <ul>
            <CourseNavEntry>
              <CourseNavLink to="introduction-graphic-design-gimp">
                Using Scratch to Make Games
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-basics">
                Scratch Basic Skills
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-pixel-art-character-illustration">
                Using Scratch to Remix
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-saving-your-work">
                Scratch Intermediate Skills
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-pixel-art-character-illustration-going-further">
                Gimp and Scratch
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-creating-animations">
                Game Development Mini Project
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
