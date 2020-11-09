import React, { useRef, useEffect } from 'react'
import Chevrons from "../icons/chevrons-down.svg"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Instagram from "../icons/instagram.svg";
import Twitter from "../icons/twitter.svg";
import Github from "../icons/github.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    <section className="w-full" id="about">
      <div className="w-full py-32 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="mb-20 md:mb-0" style={{ width: 300, height: 400 }}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2" ref={sectionTrigger}>
          <h2 className="text-3xl font-semibold tracking-widest">About me</h2>
          <p className="font-secondary tracking-wider leading-normal my-5">I'm a JAMstack Developer who loves to learn and work with people. I like to bring ideas to life, from design to code. Besides that, you may find me watching anime with a pack of biscuits in my hands. </p>
          <p className="font-secondary tracking-wider leading-normal my-5">I'm currently available for part-time or contract work as I am currently pursuing a masters degree in Data Science at the university of Salford, Manchester.</p>
          <div className="flex items-center">
            <a href="https://docs.google.com/document/d/1Tm9KzdkYMhuUewEaQ3mG8onLiXkIWRfEQFzPCXRRaiE/edit?usp=sharing" target="_blank" rel="noreferrer" className="px-3 py-5 border bg-black hover:bg-gray-700 text-white" >View my CV Here</a>
            <a href="https://twitter.com/hajiskyy" target="_blank" rel="noreferrer" className="ml-5">
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
    </section>
  )
}

export default About
