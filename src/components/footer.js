import React from 'react'
import { Link } from "gatsby"
import Github from "../icons/github.svg";
import Instagram from "../icons/instagram.svg";
import Twitter from "../icons/twitter.svg";

function footer() {
  return (
    <>
      <footer className="w-full h-24 px-8 pt-20">
        <div>Designed by me © {new Date().getFullYear()}
          {` `}
        </div>

        <div className="w-full px-32 mt-10 flex justify-between ">
          <Link to="/"><Instagram className="icons" /></Link>
          <Link to="/"><Twitter className="icons" /></Link>
          <Link to="/"><Github className="icons" /></Link>
        </div>

      </footer>

    </>
  )
}

export default footer
