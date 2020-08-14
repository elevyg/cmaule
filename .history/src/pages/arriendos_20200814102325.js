import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  {
    allMaquinariaJson {
      edges {
        node {
          id
          name
          price
          img {
            src
          }
        }
      }
    }
  }
`

const Arriendos = ({ data }) => {
  const machinery = data.allMaquinariaJson.edges

  console.log(machinery)

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg-dark-blue h-64">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>
      {machinery && (
        <div>
          {machinery.map(m => (
            <>
              <h1>{m.node.name}</h1>
              {node.img.childImageSharp.fluid.src !== "" ? (
                <Img
                  fixed={`../images/machinery/Camiones.jpg`}
                  style={{ width: 500, height: 500 }}
                />
              ) : (
                <h3>No picture</h3>
              )}
            </>
          ))}
        </div>
      )}
    </Layout>
  )
}
export default Arriendos
