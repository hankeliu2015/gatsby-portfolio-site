import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  query ImageQuery {
    file(relativePath: {eq: "hero-img.png"}) {
      childImageSharp{
       fluid{
        ...GatsbyImageSharpFluid
      	}
      }
    }
  }
`
const Hero = () => {
  const {file: {childImageSharp: {fluid}}} = useStaticQuery(query);
  // console.log(data)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>I'm Henry</h1>
            <h4>freeland web developer</h4>
              <Link to="/contact" className='btn'>
                contact me
              </Link>
              <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>

  )
}

export default Hero
