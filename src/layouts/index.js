import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Navbar from '../components/navbar/Navbar'
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
    <Navbar />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </MainContainer>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

const MainContainer = styled.div`
  display: grid;
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
