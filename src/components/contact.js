import React, { useRef, useEffect } from 'react'
import Gmail from "../icons/gmail.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Contact() {

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
    <section className="w-full py-24 md:flex md:items-center" id="contact" ref={sectionTrigger}>
      <div className="md:w-1/2 md:pr-10" >
        <h3 className="text-3xl font-semibold tracking-widest mb-10">I Can Help</h3>
        <p className="font-secondary tracking-wider leading-normal">I'm currently available for a part-time job position. Feel free to contact me</p>
        <a className="w-full mt-8 flex items-center justify-center" href="mailto:hajisky07@gmail.com">
          <Gmail className="icons mr-5" />
          <span className="text-xl">Hajisky07@gmail.com</span>
        </a>
      </div>

      <div className="md:w-1/2">
        <form name="contact" method="POST" data-netlify="true" className="mt-10">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">
              <input className=" w-full outline-none border-b-2 py-2 border-gray-700 focus:border-black" type="text" name="name" id="name" placeholder="Name" aria-required required />
            </label>
            <label htmlFor="email">
              <input className=" w-full outline-none my-10 border-b-2 py-2 border-gray-700 focus:border-black" type="email" name="email" id="email" placeholder="Email" aria-required required />
            </label>
            <label htmlFor="message">
              <textarea className="w-full outline-none border-b-2 py-2 border-gray-700 focus:border-black" type="text" name="message" id="message" placeholder="Message" aria-required required></textarea>
            </label>

            <button type="submit" className="mt-10 px-12 py-3 bg-black hover:bg-gray-700 transition-colors ease-out duration-300 text-white text-xl">Send</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact
