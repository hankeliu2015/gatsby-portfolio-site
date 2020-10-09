import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  return <h2>jobs component</h2>
}

export const query = graphql`
  {
    allStrapiJobs(sort: {fields: id, order: ASC}) {
      nodes {
        date
        company
        position
        desc {
          id
          name
        }
      }
    }
  }
`
export default Jobs
