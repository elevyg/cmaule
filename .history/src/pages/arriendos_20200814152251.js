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

      <h2 className="font-hairline text-custom-blue text-4xl my-3">
        Maquinaria
      </h2>
      <div className="h-full grid md:grid-cols-2 lg:grid-cols-3">
        {machinery.map(m => {
          return (
            <MachineCard name={m.name} key={m.id} price={m.price}>
              <Img
                fluid={m.image.childImageSharp.fluid}
                atl={m.name}
                className="h-full w-full max-w-xl rounded-md"
              />
            </MachineCard>
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
