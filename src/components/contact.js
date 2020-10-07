import React from 'react'
import Gmail from "../icons/gmail.svg";

function Contact() {
  return (
    <div className="w-full py-24 lg:flex lg:items-center">
      <div className="lg:w-1/2 lg:pr-10">
        <h3 className="text-3xl font-semibold tracking-widest mb-10">I'm currently available for part-time work.</h3>
        <p className="font-secondary tracking-wider leading-normal">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <a className="w-full mt-8 flex items-center justify-center" href="mailto:hajisky07@gmail.com">
          <Gmail className="icons mr-5" />
          <span className="text-xl">Hajisky07@gmail.com</span>
        </a>
      </div>

      <div className="lg:w-1/2">
        <form name="contact" method="POST" data-netlify="true" className="mt-10">
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
    </div>
  )
}

export default Contact
