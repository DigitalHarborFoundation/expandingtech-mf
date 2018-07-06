import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const SiteNavbar = ({ props }) => {
  return (
    <SiteNavContainer>
      <SiteNavEntry to="/">Home</SiteNavEntry>
      <SiteNavEntry to="/introduction">Course</SiteNavEntry>
      <SiteNavEntry to="/maker-warm-up">About</SiteNavEntry>
    </SiteNavContainer>
  )
}

export default SiteNavbar

const SiteNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  padding: 0px;
  margin: 0px;

  a {
    margin: 20px;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }

  a:hover {
    color: black;
    text-decoration: none;
    border-bottom: none;
    transition: color 0.5s ease;
  }
`

const SiteNavEntry = styled(Link)`
  display: inline-flex;
  list-style-type: none;
  padding: 10px;
  margin-bottom: 0px;
  margin-left: 0px;
`
