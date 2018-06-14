import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Sidebar = ({ lesson }) => {
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

export default Sidebar

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  a {
    margin: 20px;
  }
`
