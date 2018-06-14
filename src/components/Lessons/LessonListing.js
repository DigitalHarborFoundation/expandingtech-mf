import React from 'react'
import Link from 'gatsby-link'

const LessonListing = ({ lesson }) => {
  return (
    <div>
      <div>
        <h3>{lesson.title}</h3>
        <article dangerouslySetInnerHTML={{ __html: lesson.excerpt }} />
      </div>
    </div>
  )
}

export default LessonListing
