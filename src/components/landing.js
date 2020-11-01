import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Chevrons from "../icons/chevrons-down.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Landing() {

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
    <div className="w-full">
      <div className="w-full py-48 md:py-24 md:flex md:items-center md:justify-between" ref={sectionTrigger}>
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-wider">Hi, I'm Haji Mohammed</h1>
          <p>Developer, Data Science Student.</p>
        </div>
        <div className="hidden md:block" style={{ width: 400, height: 500 }}>
          <Image src="/images/about.jpg" alt="Landing Image"
            unsized
          />
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
