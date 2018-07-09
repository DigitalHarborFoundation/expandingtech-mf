import React from 'react'
import LessonListing from '../components/Lessons/LessonListing'
import Link from 'gatsby-link'
import styled from 'styled-components'
import mfLogo from './maker-foundations-featured-img.png'

const IndexPage = ({ data }) => {
  return (
    <div>
      Placeholder content! We should figure out what to add to this main page...
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

export const lessonsQuery = graphql`
  query queryLessons {
    allWordpressWpLessons(
      filter: { lesson_tag: { eq: 318 } }
      sort: { fields: [wordpress_id], order: ASC }
    ) {
      edges {
        node {
          wordpress_id
          title
          excerpt
          slug
        }
      }
    }
  }
`

export default IndexPage
