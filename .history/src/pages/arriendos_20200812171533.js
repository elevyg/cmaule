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
  console.log(machine)
  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-center bg-dark-blue min-h-screen">
        <h1 className="text-4xl">Arriendos</h1>
      </div>
      <div className="flex"></div>
    </Layout>
  )
}
export default Arriendos
