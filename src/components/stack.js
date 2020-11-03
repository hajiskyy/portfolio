import React, { useRef, useEffect } from 'react'
import Chevrons from "../icons/chevrons-down.svg"
import Html from "../icons/html5.svg"
import Sass from "../icons/sass.svg"
import JS from "../icons/javascript.svg"
import Node from "../icons/node-dot-js.svg"
import ReactLogo from "../icons/reactlogo.svg"
import GatsbyLogo from "../icons/gatsby.svg"
import Next from "../icons/next-dot-js.svg"
import Mongodb from "../icons/mongodb.svg"
import Firebase from "../icons/firebase.svg"
import Codersrank from "../icons/codersrank.svg"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Stack() {
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
    <section className="w-full" id="stack">
      <div className="w-full py-40 lg:py-24">
        <h3 className="text-3xl font-semibold tracking-widest mb-10">My Stack</h3>
        <table className="w-full table-fixed" ref={sectionTrigger}>
          <tbody>
            <tr>
              <td className="w-1/3 border py-5">
                <Html className="icons-big mx-auto animate-flipX" />
              </td>
              <td className="w-1/3 border py-5">
                <Sass className="icons-big mx-auto animate-wiggle" />
              </td>
              <td className="w-1/3 border py-5">
                <JS className="icons-big mx-auto animate-flipY" />
              </td>
            </tr>
            <tr>
              <td className="border py-5">
                <ReactLogo className="icons-big mx-auto animate-spin-slow" />
              </td>
              <td className="border py-5">
                <Next className="icons-big mx-auto animate-bounce-slow" />
              </td>
              <td className="border py-5">
                <GatsbyLogo className="icons-big mx-auto animate-spin-stop " />
              </td>
            </tr>
            <tr>
              <td className="border py-5">
                <Node className="icons-big mx-auto animate-flipY" />
              </td>
              <td className="border py-5">
                <Mongodb className="icons-big mx-auto animate-pulse" />
              </td>
              <td className="border py-5">
                <Firebase className="icons-big mx-auto animate-wiggle" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full mt-16">
          <div className="w-64 mx-auto px-3 py-5 border bg-black hover:bg-gray-700 text-white ">
            <a href="https://profile.codersrank.io/user/hajiskyy" rel="noreferrer" target="_blank" className="flex items-center"> <span>Check out my Codersrank</span>  <Codersrank className="icons text-white ml-3" /> </a>
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

export default Stack
