import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
// import MachineCard from "../components/machineCard"
import { Img } from "gatsby-image"

const Arriendos = ({ data }) => {
  const machinery = data.allMachine.nodes

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg-custom-blue h-64">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>

      <div>
        {machinery.map(m => })}
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
