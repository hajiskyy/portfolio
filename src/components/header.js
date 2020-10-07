import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Github from "../icons/github.svg";

const Header = ({ siteTitle }) => (
  <>
    <header className="w-full h-32 px-4 lg:px-24 xl:px-48 py-6 flex flex-col md:flex-row justify-between items-center">
      <div><Link to="/" className="text-xl font-bold tracking-widest">{siteTitle}</Link></div>
      <div className="w-full md:w-2/5 flex justify-between items-center mt-5 text-gray-700 transition-all ease-out">
        <div><Link className="hover:text-black" to="/#about">About Me</Link></div>
        <div><Link className="hover:text-black" to="/#projects">Projects</Link></div>
        <div><Link className="hover:text-black" to="/#stack">Stack</Link></div>
        <div><Link className="hover:text-black" to="/#contact">Contact</Link></div>
        <div><a href="https://github.com/hajiskyy" target="_blank" rel="noreferrer"><Github className="text-gray-900 icons" /></a></div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
