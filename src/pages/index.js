import React from 'react'
import LessonListing from '../components/Lessons/LessonListing'
import Link from 'gatsby-link'
import styled from 'styled-components'

const IndexPage = ({ data }) => {
  const test = [data.allWordpressWpLessons.edges]
  const revTest = test.reverse()
  return (
    <div>
      <PageContainer>
        {data.allWordpressWpLessons.edges.map(({ node }) => {
          return <LessonListing lesson={node} key={node.wordpress_id} />
        })}
      </PageContainer>
    </div>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`

export const lessonsQuery = graphql`
  query queryLessons {
    allWordpressWpLessons(filter: { lesson_tag: { eq: 318 } }) {
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
