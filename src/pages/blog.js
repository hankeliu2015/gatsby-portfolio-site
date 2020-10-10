import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({data: {allStrapiBlogs: {nodes: blogs}}}) => {
  return(
    <Layout>
      <section>
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
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
