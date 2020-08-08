import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuienesSomos = () => (
  <Layout>
    <SEO title="Quienes Somos" />
    <div
      id="quienes-somos-container"
      className="h-screen flex justify-center items-center"
    >
      <h1 className="text-6xl text-white font-bold">Quienes Somos</h1>
    </div>
  </Layout>
)

export default QuienesSomos
