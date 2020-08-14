import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Arriendos = ({ data }) => {
  const machinery = data.allMachine.nodes

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg-dark-blue h-64">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>
      {machinery && (
        <div>
          {machinery.map(m => {
            return (
              <div key={m.id}>
                <h1>{m.name}</h1>
                <Img
                  fluid={m.image.childImageSharp.fluid}
                  atl={m.name}
                  className="max-w-lg"
                />
              </div>
            )
          })}
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allMachine {
      nodes {
        image {
          childImageSharp {
            fluid(maxWidth: 384) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        price
        priceTimeUnit
      }
    }
  }
`
export default Arriendos
