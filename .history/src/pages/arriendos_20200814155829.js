import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MachineCard from "../components/machineCard"
import Card from "../components/card"

const Arriendos = ({ data }) => {
  const machinery = data.allMachine.nodes

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg- h-64 bg-custom-blue">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>

      <SectionHeader>Maquinaria</SectionHeader>
      <p class="ml-5">
        Arriendo maquinaria base Santiago, con operador y mantenimiento, sin
        petróleo,{" "}
        <span className="font-bold">
          {" "}
          período mínimo de arriendo: 1 mes & 180 horas mínimo;{" "}
        </span>{" "}
        jornada normal de trabajo.
      </p>
      <MachineryGird item={machinery} />
      <SectionHeader>Camiones</SectionHeader>
    </Layout>
  )
}

const SectionHeader = ({ children }) => (
  <h2 className="font-hairline text-custom-blue text-5xl mx-5">{children}</h2>
)

const MachineryGird = ({ item }) => (
  <div className="h-full grid md:grid-cols-2 lg:grid-cols-3">
    {item.map(m => {
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
)

const CamionesCard = () => (
  <Card>
    <Img fluid={image} alt="Camiones" />
  </Card>
)

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
    camiones: file(relativePath: { eq: "machinery/camiones.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Arriendos