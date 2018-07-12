import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Footer = () => (
  <FooterContainer>
    <SiteCopyright>Copyright 2018 Digital Harbor Foundation</SiteCopyright>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #0091c9;
`

const SiteCopyright = styled.span`
  display: flex;
  font-size: 1rem;
  color: #ffffff;
  padding: 0px;
  margin: 0px;
`
