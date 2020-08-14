import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MachineCard from "../components/machineCard"

const Arriendos = ({ data }) => {
  const machinery = data.allMachine.nodes

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg- h-64 bg-custom-blue">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>

      <div>
        {machinery.map(m => {
          return (
            <div key={m.id}>
              <h1>{m.name}</h1>

              <MachineCard img={m.image.childImageSharp.fluid} name={m.name}>
                <Img
                  fluid={m.image.childImageSharp.fluid}
                  atl={m.name}
                  className="max-w-lg"
                />
              </MachineCard>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMachine {
      nodes {
        id
        name
        price
        priceTimeUnit
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Arriendos
