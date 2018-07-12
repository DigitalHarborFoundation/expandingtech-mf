import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import CourseNavbar from '../components/navbars/CourseNavbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import './index.css'

const Layout = ({ children, data, location }) => (
  <MainContainer>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <ContentContainer>
      <CourseNavbar />
      <LessonContentContainer> {children()} </LessonContentContainer>
    </ContentContainer>
  </MainContainer>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

const MainContainer = styled.div`
  display: grid;
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas:
    'sidebar content'
    'sidebar footer';
`

const LessonContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  grid-area: content;
  margin-top: 0px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  padding-top: 20px;
`

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }

  query queryLessonsNavbar {
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
