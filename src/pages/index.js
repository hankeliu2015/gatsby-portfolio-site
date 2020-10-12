import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({data}) => {
  const {
    allStrapiProjects:{nodes:projects},
    allStrapiBlogs: {nodes: blogs}
  } = data;
  // const projects = data.allStrapiProjects.nodes;
  return (
    <Layout>
      <SEO title="home" description="this is the home page"/>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title='latest blog articles' showLink />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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

    allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
        slug
        content
        date(formatString: "MMMM Do, YYYY")
        id
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
        title
      }
    }

  }
`
