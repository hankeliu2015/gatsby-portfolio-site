import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({title, description}) => {
  const { allSite: {nodes: siteMetadata } } = useStaticQuery(query);

  const { siteDesc, siteTitle, siteUrl, image, twitterUsername} = siteMetadata[0].siteMetadata

  return(
    <Helmet htmlAttributes={{lang: "en"}} title={`${title} | siteTitle`}>
      <meta name="description" content={description || siteDesc}></meta>
      <meta name="image" content={image}></meta>
    </Helmet>
  )
}

const query = graphql`
  {
    allSite {
      nodes {
        siteMetadata {
          author
          siteDesc: description
          image
          siteUrl
          siteTitle: title
          twitterUsername
        }
      }
    }
  }
`

export default SEO
