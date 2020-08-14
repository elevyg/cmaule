import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Arriendos = () => {
  const machinery = useStaticQuery(graphql`
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
  console.log(machinery.data.AllMaquinariaJson[0])
  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg-dark-blue h-64">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>
      <div className="flex">{}</div>
    </Layout>
  )
}
export default Arriendos
