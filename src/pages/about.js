import React from 'react'

import Link from 'gatsby-link'
import styled from 'styled-components'
import mfLogo from './maker-foundations-featured-img.png'

const About = () => {
  return (
    <div>
      <PageContainer>
        <div>
          <h1>Maker Foundations Overview</h1>
          <img src={mfLogo} alt={mfLogo} />
          <p>
            Digital Harbor Foundation’s Maker Foundations program is an
            introductory course for middle and high school youth. Enjoy 14 weeks
            of exploration into emerging technology topics where you will design
            and 3D print your own creations, learn to program games and make
            your own game artwork, make a website, create interactive
            electronics, and much more!
          </p>
          <h2>Maker Foundations Components </h2>

          <p>
            Maker Foundations is made up of a series of learning opportunities,
            mini projects, and a culminating final project and showcase.{' '}
          </p>

          <ul>
            <li>10 Learning Modules focused on emerging technologies </li>
            <li>5 coordinating Mini Projects to demonstrate new learning</li>
            <li>1 Final Project</li>
            <li>
              1 Maker Showcase
              <ul>
                <li>
                  {' '}
                  During the Maker Showcase, youth will share the work they’ve
                  done throughout Maker Foundations, with particular focus on
                  the Final Project
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </PageContainer>
    </div>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0091c9;

  &:hover {
    color: #333333;
    transition: color ease 0.5s;
  }
`

export default About
