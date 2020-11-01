import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import About from "../components/about"
import Stack from "../components/stack"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Stack />
    <Projects />
    <Contact />
  </Layout >
)

export default IndexPage
