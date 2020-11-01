import React, { useRef, useEffect } from 'react'
import Chevrons from "../icons/chevrons-down.svg"
import Image from 'next/image'
import Sass from "../icons/sass.svg"
import GatsbyLogo from "../icons/gatsby.svg"
import Tailwind from "../icons/tailwindcss.svg"
import Netlify from "../icons/netlify.svg"
import Next from "../icons/next-dot-js.svg"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Projects = () => {

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
                <Image src="/thumbnails-1.png"
                  alt="Picture of the author"
                  unsized className=" border-gray-700 border-2 rounded-lg" />
              </a>
            </div>
            <div className="mt-10 md:w-1/2 md:mt-0 md:ml-10">
              <a href="https://ontracxpress.netlify.app/" target="_blank" rel="noreferrer">
                <h4 className="text-3xl hover:text-gray-700">Ontrac Xpress</h4>
              </a>
              <p className="font-secondary tracking-wider leading-normal my-5">
                Ontrac Xpress is Logistic business that facilitates package deliveries on a small scale. It is a sub-division of a company named Ontrac Global Resources Limited.
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
                <Image src="/thumbnails-2.png"
                  alt="Picture of the author"
                  unsized className=" border-gray-700 border-2 rounded-lg" />
              </a>
            </div>
            <div className="mt-10 md:w-1/2 md:mt-0 md:ml-10">
              <a href="https://cooking-with-khalil.netlify.app/" target="_blank" rel="noreferrer">
                <h4 className="text-3xl hover:text-gray-700">Cooking With Khalil</h4>
              </a>
              <p className="font-secondary tracking-wider leading-normal my-5">
                So this project was just built on the fly for a friend. The dude did'nt even need it anymore but i just completed it anyway.
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