import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Navbar = ({ lesson }) => {
  return (
    <div>
      <NavContainer>
        <Link to="/">Course Home</Link>
        <Link to="/test-lesson">Lesson 1</Link>
        <Link to="/test-lesson-2">Lesson 2</Link>
      </NavContainer>
    </div>
  )
}

export default Navbar

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #0091c9;
  margin-bottom: 50px;
  a {
    margin: 20px;
    color: white;
    text-decoration: none;
  }
`
