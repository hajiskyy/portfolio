import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Github from "../icons/github.svg";

const Header = ({ siteTitle }) => (
  <>
    <header className="w-full h-24 px-8 py-4 flex flex-col justify-between items-center">
      <div><Link to="/" className="text-xl font-bold tracking-widest">{siteTitle}</Link></div>
      <div className="w-full flex justify-between items-center mt-5 text-gray-700 transition-all ease-out">
        <div><Link className="hover:text-black" to="/">About Me</Link></div>
        <div><Link className="hover:text-black" to="/">Projects</Link></div>
        <div><Link to="/"><Github className="icons" /></Link></div>
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
