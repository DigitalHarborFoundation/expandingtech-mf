import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

const CourseNavbar = ({ props }) => {
  return (
    <CourseNavbarContainer>
      <Accordion>
        <AccordionItem expanded={true}>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Orientation</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
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
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Digital Communication</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
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
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Project Planning</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
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
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Maker Documentation</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
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
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Graphic Design With Gimp</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavEntry>
              <CourseNavLink to="/introduction-graphic-design-gimp">
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
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Game Development With Scratch</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavEntry>
              <CourseNavLink to="/scratch-basic-skills">
                Scratch Basic Skills
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/using-scratch-to-remix">
                Using Scratch to Remix
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/scratch-intermediate-skills">
                Scratch Intermediate Skills
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/gimp-and-scratch">
                Gimp and Scratch
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/game-development-mini-project">
                Game Development Mini Project
              </CourseNavLink>
            </CourseNavEntry>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>3D Printing for Beginners</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavEntry>
              <CourseNavLink to="/what-is-3d-printing">
                What is 3D Printing?
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/3d-printing-uses">
                3D Printing Uses
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/getting-started-with-tinkercad">
                Getting Started With Tinkercad
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/tinkercad-make-custom-keychain">
                Tinkercad: Make a Custom Keychain
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/tinkercad-design-model-landmark">
                Tinkercad: Design a Model of a Landmark
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/3d-printing-mini-project">
                3D Printing Mini Project
              </CourseNavLink>
            </CourseNavEntry>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Introduction to Circuits</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavEntry>
              <CourseNavLink to="/introduction-to-circuits">
                Introduction to Circuits
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/makey-makey-circuit-board">
                Makey Makey: A Circuit Board
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/introduction-to-soundplant">
                Introduction to Soundplant
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/makey-makey-practice">
                Makey Makey Practice
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/introduction-to-circuits-mini-project">
                Introduction to Circuits Mini Project
              </CourseNavLink>
            </CourseNavEntry>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Web Development</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavEntry>
              <CourseNavLink to="/what-is-3d-printing">
                What is 3D Printing?
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/3d-printing-uses">
                3D Printing Uses
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/getting-started-with-tinkercad">
                Getting Started With Tinkercad
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/tinkercad-make-custom-keychain">
                Tinkercad: Make a Custom Keychain
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/tinkercad-design-model-landmark">
                Tinkercad: Design a Model of a Landmark
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/3d-printing-mini-project">
                3D Printing Mini Project
              </CourseNavLink>
            </CourseNavEntry>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Capstone Project</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavEntry>
              <CourseNavLink to="/what-is-3d-printing">
                What is 3D Printing?
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/3d-printing-uses">
                3D Printing Uses
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/getting-started-with-tinkercad">
                Getting Started With Tinkercad
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/tinkercad-make-custom-keychain">
                Tinkercad: Make a Custom Keychain
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/tinkercad-design-model-landmark">
                Tinkercad: Design a Model of a Landmark
              </CourseNavLink>
            </CourseNavEntry>
            <CourseNavEntry>
              <CourseNavLink to="/3d-printing-mini-project">
                3D Printing Mini Project
              </CourseNavLink>
            </CourseNavEntry>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
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
  margin-left: 1.25rem;
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
  padding-right: 3rem;
  font-size: 1.25rem;
  font-weight: bolder;
`
