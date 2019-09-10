import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/about">About</Link>
  </Layout>
)

export default IndexPage
