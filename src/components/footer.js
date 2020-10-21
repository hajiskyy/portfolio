import React from 'react'
import Github from "../icons/github.svg";
import Instagram from "../icons/instagram.svg";
import Twitter from "../icons/twitter.svg";
import Signature from "../icons/signature.svg";


function footer() {
  return (
    <>
      <footer className="w-full px-8 py-10">
        <div className="w-2/5 mx-auto text-center">Designed by me © {new Date().getFullYear()}
          {` `}
        </div>

        <Signature className="text-black w-64 mx-auto my-10" />

        <div className="w-full lg:w-2/5 lg:mx-auto px-12 lg:px-32  flex justify-between ">
          <a href="https://www.instagram.com/hajisky/" target="_blank" rel="noreferrer"><Instagram className="text-gray-700 icons" /></a>
          <a href="https://twitter.com/hajisky_" target="_blank" rel="noreferrer"><Twitter className="text-gray-700 icons" /></a>
          <a href="https://github.com/hajiskyy" target="_blank" rel="noreferrer"><Github className="text-gray-700 icons" /></a>
        </div>

      </footer>

    </>
  )
}

export default footer
