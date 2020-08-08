import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuienesSomos = () => (
  <Layout>
    <SEO title="Quienes Somos" />
    <div>
      <h1 className="text-4xl">Quienes Somos</h1>
      <img src="https://unsplash.com/photos/qvBYnMuNJ9A" alt="quienes_somos" />
    </div>
  </Layout>
)

export default QuienesSomos
