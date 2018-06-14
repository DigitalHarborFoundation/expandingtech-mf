import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Sidebar from '../components/sidebar/Sidebar'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    {location.pathname === '/' ? (
      <Header siteTitle={data.site.siteMetadata.title} />
    ) : (
      <div />
    )}
    <Sidebar />
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
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }

  query queryLessonsSidebar {
    allWordpressWpLessons(filter: { lesson_tag: { eq: 318 } }) {
      edges {
        node {
          wordpress_id
          title
          excerpt
        }
      }
    }
  }
`
