import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Arriendos = () => {
  const data = useStaticQuery(graphql`
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

  const machinery = data.allMaquinariaJson

  console.log(machinery)

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg-dark-blue h-64">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>
      <div className="flex">
        {machinery.map(machine => (
          <h2>machine.node.name</h2>
        ))}
      </div>
    </Layout>
  )
}
export default Arriendos
