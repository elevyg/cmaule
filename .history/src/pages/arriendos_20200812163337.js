import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Arriendos = () => {
  const machine = useStaticQuery(graphql`
    {
      allMaquinariaJson {
        edges {
          node {
            id
            name
            price
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div
        id="quienes-somos-container"
        className="h-screen flex justify-center items-center"
      ></div>
      <h1 className="text-4xl">Arriendos</h1>
    </Layout>
  )
}
export default Arriendos
