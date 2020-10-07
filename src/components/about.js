import React from 'react'
import Chevrons from "../icons/chevrons-down.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Instagram from "../icons/instagram.svg";
import Twitter from "../icons/twitter.svg";
import Github from "../icons/github.svg";

function About() {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "image.jpg" }) {
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
      <div className="w-full py-32 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="mb-20" style={{ width: 300, height: 400 }}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <div className="mt-10 lg:w-1/2">
          <h3 className="text-3xl font-semibold tracking-widest">About me</h3>
          <p className="font-secondary tracking-wider leading-normal my-5"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <div className="flex">
            <a href="https://twitter.com/hajiskyy" target="_blank" rel="noreferrer">
              <Twitter className="text-gray-700 icons" />
            </a>
            <a href="https://www.instagram.com/hajisky/" target="_blank" rel="noreferrer" className="ml-5">
              <Instagram className="text-gray-700 icons" />
            </a>
            <a href="https://github.com/hajiskyy" target="_blank" rel="noreferrer" className="ml-5">
              <Github className="text-gray-700 icons" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full mx-auto items-center justify-center">
        <div className="px-1 text-lg">Scroll</div>
        <Chevrons className="animate-bounce" />
      </div>
    </div>
  )
}

export default About
