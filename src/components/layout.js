
import React from "react"
import config from '../config.ts'
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const siteTitle = config.title;

  return (
    <>
      <Header siteTitle={`${siteTitle}`} />
      <main className="w-full px-8 lg:px-24 xl:px-64">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
