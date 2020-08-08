import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuienesSomos = () => (
  <Layout>
    <SEO title="Quienes Somos" />
    <div id="quienes-somos-container" className="h-screen">
      <h1 className="text-4xl">Quienes Somos</h1>
      <img
        src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3387&q=80"
        alt="quienes_somos"
      />
    </div>
  </Layout>
)

export default QuienesSomos
