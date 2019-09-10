import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
