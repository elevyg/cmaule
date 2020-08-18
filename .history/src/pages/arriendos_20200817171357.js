import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MachineCard from "../components/machineCard"

import { motion } from "framer-motion"
import Button from "../components/button"

const Arriendos = ({ data }) => {
  const machinery = data.allMachine.nodes
  const trucks = data.allTruck.nodes

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg- h-64 bg-custom-blue">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>
      <div className="flex w-full">
        <SectionHeader>Maquinaria</SectionHeader>
        <Button className="bg-red-100">Cotizar</Button>
      </div>
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
      <p className="mx-5">
        Arriendo camiones base Santiago, con operador y mantenimiento, sin
        petróleo,
        <span className="font-bold">
          {" "}
          período mínimo de arriendo: 1 mes & 30 días.
        </span>{" "}
        jornada normal de trabajo.{" "}
      </p>
      <SingleItemCard
        image={data.camiones.childImageSharp.fluid}
        name="camiones"
      >
        {trucks.map(t => (
          <div className="my-3 mx-10">
            <h1 className="text-2xl text-custom-gray">{t.name}</h1>
            <h3 className="font-semibold text-custom-yellow text-xl">
              {t.price} UF + IVA / mes
            </h3>
          </div>
        ))}
      </SingleItemCard>
      <SectionHeader>Pavimentadora</SectionHeader>
      <SingleItemCard
        image={data.pavimentadora.childImageSharp.fluid}
        data={trucks}
        name="camiones"
      >
        <div className="my-3 mx-10">
          <h1 className="text-2xl text-custom-gray">
            Pavimentadora autopropulsada CMI Super 200
          </h1>
          <h3 className="font-semibold text-custom-yellow text-xl">
            2 UF + IVA / día
          </h3>
          <p>
            Arriendo de hormigón pavimentadora autopropulsada 3.0 a 5.0 m de
            ancho, 45cm profundidad máximo, base Santiago, con operador,
            ayudante y mantenimiento, sin petróleo, período mínimo de arriendo:
            1 mes & 165 horas mínimo; jornada normal de trabajo;{" "}
          </p>
        </div>
      </SingleItemCard>
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
            className="h-40 w-1/2 max-w-xl rounded-md"
            loading="eager"
          />
        </MachineCard>
      )
    })}
  </div>
)

const SingleItemCard = ({ image, name, children }) => (
  <motion.div
    className="flex flex-col md:flex-row justify-start items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md max-h-full"
    whileHover={{ scale: 1 }}
  >
    <Img
      fluid={image}
      alt={name}
      className="h-full w-full  md:w-1/2 rounded-md"
      loading="eager"
    />
    <div className=" w-full md:w-1/2 flex flex-col justify-around">
      {children}
    </div>
  </motion.div>
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
    allTruck {
      nodes {
        id
        price
        name
        priceTimeUnit
      }
    }
    camiones: file(relativePath: { eq: "machinery/camiones.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pavimentadora: file(
      relativePath: { eq: "machinery/pavimentadora-200CMI.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Arriendos
