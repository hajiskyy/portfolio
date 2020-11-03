import React, { useRef, useEffect } from 'react'
import Chevrons from "../icons/chevrons-down.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Sass from "../icons/sass.svg"
import GatsbyLogo from "../icons/gatsby.svg"
import Tailwind from "../icons/tailwindcss.svg"
import Netlify from "../icons/netlify.svg"
import Next from "../icons/next-dot-js.svg"
import Node from "../icons/node-dot-js.svg"
import Angular from "../icons/angular.svg"
import Mongodb from "../icons/mongodb.svg"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      thumbnail1: file(relativePath: { eq: "thumbnails-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail2: file(relativePath: { eq: "thumbnails-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail3: file(relativePath: { eq: "thumbnails-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  gsap.registerPlugin(ScrollTrigger);

  const sectionTrigger = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionTrigger.current,
      onEnter: () => gsap.fromTo(sectionTrigger.current, {
        y: 100,
        opacity: 0,
      },
        {
          y: 0,
          opacity: 1,
          duration: 3
        }
      )
    })
  })

  return (
    <section className="w-full" id="projects">
      <div className="w-full py-24">
        <h3 className="text-3xl font-semibold tracking-widest mb-10">Some Projects</h3>
        <div className="w-full flex flex-col justify-center items-center" ref={sectionTrigger}>
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
                This is one of my freelance projects done for a local logistics business. During this pandemic there has been a rise in logistic businesses across the country and they wanted some way to stand out from the rest. The design was made minimal and eye catching but also convenient.
              </p>
              <p className="font-secondary tracking-wider leading-normal my-5">Desinged on Adobe XD, Built with Next.js</p>
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
                It’s a  project for a friend which was cancelled midway because it wasn’t needed anymore but I still completed it. I leveraged the power of the JAMstack and built this with gatsby and netlify cms.
              </p>
              <p className="font-secondary tracking-wider leading-normal my-5">
                Built with Gatsby, Hooked up to Netlify CMS
              </p>
              <div className="w-1/2 flex justify-between items-center">
                <GatsbyLogo className="icons text-black" />
                <Sass className="icons text-black" />
                <Netlify className="icons text-black" />
                <Tailwind className="icons text-black" />
              </div>
            </div>
          </div>

          <div className="w-full md:flex md:justify-between md:items-center mb-20 md:mt-20">
            <div className="w-full md:w-1/2">
              <a href="https://elegante.herokuapp.com/" className="w-full" target="_blank" rel="noreferrer">
                <Img fluid={data.thumbnail3.childImageSharp.fluid} className=" border-gray-700 border-2 rounded-lg" />
              </a>
            </div>
            <div className="mt-10 md:w-1/2 md:mt-0 md:ml-10">
              <a href="https://elegante.herokuapp.com/" target="_blank" rel="noreferrer">
                <h4 className="text-3xl hover:text-gray-700">Elegante — A B2B E-commerce</h4>
              </a>
              <p className="font-secondary tracking-wider leading-normal my-5">
                This project was built to present a concept of an B2B idea i had. it's something similar to the ASOS brand but open to everyone. It has a fully built shopping experience with search, filter, cart, checkout (without payment) as well as a simple product management interface for vendors.
              </p>
              <p className="font-secondary tracking-wider leading-normal my-5">
                Built with the MEAN stack and deployed to Heroku.
              </p>
              <div className="w-1/2 flex justify-between items-center">
                <Angular className="icons text-black" />
                <Node className="icons text-black" />
                <Mongodb className="icons text-black" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="flex w-full mx-auto items-center justify-center">
        <div className="px-1 text-lg">Scroll</div>
        <Chevrons className="animate-bounce" />
      </div>
    </section>
  )
}

export default Projects