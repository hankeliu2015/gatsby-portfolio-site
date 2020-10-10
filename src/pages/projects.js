import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid
// get all the project not only the featured ones

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        featured
        github
        id
        url
        title
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const ProjectsPage = ({data: {allStrapiProjects: {nodes: projects}}}) => {
  // console.log(projects)
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}


export default ProjectsPage
