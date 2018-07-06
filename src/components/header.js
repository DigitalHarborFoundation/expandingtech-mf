import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import SiteNavbar from '../components/navbars/SiteNavbar'
import SiteLogo from '../components/SiteLogo'

const Header = ({ siteTitle }) => (
  <Masthead>
    <SiteNavbar />
    <SiteTitle>{siteTitle}</SiteTitle>
    <SiteLogo />
  </Masthead>
)

export default Header

const Masthead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0091c9;
`
const SiteTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 2.25rem;
  color: #ffffff;
  padding: 0px;
  margin: 0px;

  @media only screen and (max-width: 1000px) {
    font-size: 1.5rem;
    margin-left: 50px;
  }
`
