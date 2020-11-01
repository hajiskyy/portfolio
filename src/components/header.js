import Link from 'next/link'
import React from "react"
import Github from "../icons/github.svg";

const Header = ({ siteTitle }) => (
  <>
    <header className="w-full h-32 px-8 lg:px-24 xl:px-64 py-6 flex flex-col md:flex-row justify-between items-center">
      <div><Link href="/" ><a className="text-xl font-bold tracking-widest">{siteTitle}</a></Link></div>
      <div className="w-full md:w-3/5 flex justify-between items-center mt-8 md:mt-0 text-gray-700 transition-all ease-out">
        <div><Link href="/#about"><a className="hover:text-black">About Me</a></Link></div>
        <div><Link href="/#projects"><a className="hover:text-black">Projects</a></Link></div>
        <div><Link href="/#stack"><a className="hover:text-black">Stack</a></Link></div>
        <div><Link href="/#contact"><a className="hover:text-black">Contact</a></Link></div>
        <div><a href="https://github.com/hajiskyy" target="_blank" rel="noreferrer"><Github className="text-gray-900 icons" /></a></div>
      </div>
    </header>
  </>
)

export default Header
