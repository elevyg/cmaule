import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MachineCard from "../components/machineCard"

import { motion } from "framer-motion"
import Button from "../components/button"
import Modal from "../components/modal"
import StyledInput from "../components/StyledInput"

const Arriendos = ({ data }) => {
  const machinery = data.allMachine.nodes
  const trucks = data.allTruck.nodes

  const [toggle, setToggle] = useState(false)
  const handleOnClick = () => {
    setToggle(prev => !prev)
  }

  return (
    <Layout>
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg- h-64 bg-custom-blue">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>
      <div className="flex w-full items-center">
        <SectionHeader>Maquinaria</SectionHeader>
        <div className="h-10">
          <Button onClick={handleOnClick}>Cotizar</Button>
        </div>
      </div>
      {toggle && <QuoteForm onClick={() => handleOnClick()} />}
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

const QuoteForm = ({ onClick }) => {
  const MAQUINARIA = ["Maquina1", "Maquina2", "Maquina3"]

  return (
    <Modal>
      <div className="flex justify-center items-center overflow-y-hidden  ">
        <div className="h-full max-w-6xl bg-gray-100 rounded-md p-5">
          <div>
            <form
              method="post"
              action="https://www.flexyform.com/f/27fd84adf576c792322dc88db1a2c7e090e51f90"
            >
              <div className="flex">
                <div className="flex flex-col">
                  <div>
                    <label htmlFor="nombre">Nombre completo*</label>
                    <StyledInput
                      type="text"
                      name="nombre"
                      id="nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Correo Electrónico*</label>
                    <StyledInput type="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="teléfono">Número de teléfono*</label>
                    <StyledInput type="text" name="teléfono" required />
                  </div>
                </div>
                <div>
                  <label
                    class="inline-flex items-center mt-3"
                    htmlFor="maquinaria"
                  >
                    <span class="ml-2 text-gray-700">label</span>
                    <input
                      type="checkbox"
                      name="maquinaria"
                      className="form-checkbox h-5 w-5 text-custom-yellow  focus:outline-none"
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
          <Button onClick={onClick}>Cerrar</Button>
        </div>
      </div>
    </Modal>
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
