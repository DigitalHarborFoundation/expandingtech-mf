import React from 'react'
import Link from 'gatsby-link'
import Lesson from '../components/lessons/Lesson'

const ProjectPlanningLesson = ({ data }) => {
  return (
    <div>
      <Lesson lesson={data.wordpressWpLessons} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default ProjectPlanningLesson

export const lessonsQuery = graphql`
  query queryProjectPlanning {
    wordpressWpLessons(wordpress_id: { eq: 649 }) {
      id
      wordpress_id
      title
      slug
      content
    }
  }
`
