import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { clearConfigCache } from "prettier"

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
  console.log(machine)
  return (
    <Layout>
      <SEO title="Arriendos" />
      <div
        id="quienes-somos-container"
        className="h-screen flex justify-center items-center"
      >
        <h1 className="text-4xl">Arriendos</h1>
      </div>
      <div className="flex"></div>
    </Layout>
  )
}
export default Arriendos
