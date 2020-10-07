import React from 'react'
import Github from "../icons/github.svg";
import Instagram from "../icons/instagram.svg";
import Twitter from "../icons/twitter.svg";

function footer() {
  return (
    <>
      <footer className="w-full px-8 py-10">
        <div className="w-2/5 mx-auto text-center">Designed by me © {new Date().getFullYear()}
          {` `}
        </div>

        <div className="w-full lg:w-2/5 lg:mx-auto px-32 mt-10 flex justify-between ">
          <a href="/"><Instagram className="text-gray-700 icons" /></a>
          <a href="/"><Twitter className="text-gray-700 icons" /></a>
          <a href="/"><Github className="text-gray-700 icons" /></a>
        </div>

      </footer>

    </>
  )
}

export default footer
