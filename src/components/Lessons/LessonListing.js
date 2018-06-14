import React from 'react'
import Link from 'gatsby-link'

const LessonListing = ({ lesson }) => {
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
}

export default LessonListing
