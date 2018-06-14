import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Navbar = ({ props }) => {
  return (
    <div>
      <NavContainer>
        <Link to="/">Home</Link>
        <Link to="/introduction">Welcome to Tech Center</Link>
        <Link to="/maker-warm-up">Maker Warm Up</Link>
      </NavContainer>
    </div>
  )
}

export default Navbar

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0091c9;
  margin-bottom: 50px;

  a {
    margin: 20px;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }

  a: hover {
    color: black;
    text-decoration: none;
    border-bottom: none;
    transition: color 0.5s ease;
  }
`
