import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Chevrons from "../icons/chevrons-down.svg";

function Landing() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="w-full">
      <div className="w-full py-48 lg:py-24 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-wider">Hi, I'm Haji Mohammmed</h1>
          <p className="mt-10">Front End Developer, UI/UX Design</p>
        </div>
        <div className="hidden lg:block" style={{ width: 400, height: 500 }}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>

      </div>
      <div className="flex w-full mx-auto items-center justify-center">
        <div className="px-1 text-lg">Scroll</div>
        <Chevrons className="animate-bounce" />
      </div>
    </div>
  )
}

export default Landing
