import React from 'react'
import Chevrons from "../icons/chevrons-down.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Sass from "../icons/sass.svg"
import GatsbyLogo from "../icons/gatsby.svg"
import Tailwind from "../icons/tailwindcss.svg"
import Netlify from "../icons/netlify.svg"
import Next from "../icons/next-dot-js.svg"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      thumbnail1: file(relativePath: { eq: "thumbnails-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail2: file(relativePath: { eq: "thumbnails-2.png" }) {
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
      <div className="w-full py-24">
        <h3 className="text-3xl font-semibold tracking-widest mb-10">Some Projects</h3>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full md:flex md:justify-between md:items-center mb-20">
            <div className="w-full md:w-1/2">
              <a href="https://ontracxpress.netlify.app/" className="w-full" target="_blank" rel="noreferrer">
                <Img fluid={data.thumbnail1.childImageSharp.fluid} className=" border-gray-700 border-2 rounded-lg" />
              </a>
            </div>
            <div className="mt-10 md:w-1/2 md:mt-0 md:ml-10">
              <a href="https://ontracxpress.netlify.app/" target="_blank" rel="noreferrer">
                <h4 className="text-3xl hover:text-gray-700">Ontrac Xpress</h4>
              </a>
              <p className="font-secondary tracking-wider leading-normal my-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              </p>
              <div className="w-1/2 flex justify-between items-center">
                <Next className="icons text-black" />
                <Sass className="icons text-black" />
                <Netlify className="icons text-black" />
                <Tailwind className="icons text-black" />
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="w-full md:flex md:justify-between md:items-center mb-20 md:mt-20">
            <div className="w-full md:w-1/2">
              <a href="https://cooking-with-khalil.netlify.app/" className="w-full" target="_blank" rel="noreferrer">
                <Img fluid={data.thumbnail2.childImageSharp.fluid} className=" border-gray-700 border-2 rounded-lg" />
              </a>
            </div>
            <div className="mt-10 md:w-1/2 md:mt-0 md:ml-10">
              <a href="https://cooking-with-khalil.netlify.app/" target="_blank" rel="noreferrer">
                <h4 className="text-3xl hover:text-gray-700">Cooking With Khalil</h4>
              </a>
              <p className="font-secondary tracking-wider leading-normal my-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              </p>
              <div className="w-1/2 flex justify-between items-center">
                <GatsbyLogo className="icons text-black" />
                <Sass className="icons text-black" />
                <Netlify className="icons text-black" />
                <Tailwind className="icons text-black" />
              </div>
            </div>
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

export default Projects

// export const query = graphql`
//   query {
//     image1: file(relativePath: { eq: "images/image1.jpg" }) {
//       ...squareImage
//     }

//     image2: file(relativePath: { eq: "images/image2.jpg" }) {
//       ...squareImage
//     }

//     image3: file(relativePath: { eq: "images/image3.jpg" }) {
//       ...squareImage
//     }
//   }
// `