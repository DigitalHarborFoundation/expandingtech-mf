import React from 'react'
import LessonListing from '../components/Lessons/LessonListing'
import Link from 'gatsby-link'
import styled from 'styled-components'

const IndexPage = ({ data }) => {
  const test = [data.allWordpressWpLessons.edges]

  {
    /*
  return (
    <div>
      <PageContainer>
        {data.allWordpressWpLessons.edges.map(({ node }) => {
          return <LessonListing lesson={node} key={node.wordpress_id} />
        })}
      </PageContainer>
    </div>
  )

  return (
    <div>
      <div>
        <Link to={lesson.slug}>
          <h3>{lesson.title}</h3>
        </Link>
        <article dangerouslySetInnerHTML={{ __html: lesson.excerpt }} />
      </div>
    </div>
  )
*/
  }

  return (
    <div>
      <PageContainer>
        <div>
          <StyledLink to={'/introduction.js'}>
            <h2>Welcome to the Tech Center</h2>
          </StyledLink>
          <p>
            Welcome to Maker Foundations! In this lesson, participants will
            become oriented to the learning space and the expectations for
            working in the space. You will get a tour of the Tech Center and
            review the program as well as meet the people in your cohort.
          </p>
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
