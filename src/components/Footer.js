import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Footer = ({ navLinks }) => (
  <FooterContainer>
    <Link to={navLinks.prev}>Previous Lesson</Link>
    <Link to={navLinks.next}>Next Lesson</Link>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0091c9;
`
