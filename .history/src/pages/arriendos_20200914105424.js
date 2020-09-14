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
  const pavimentadora = { name: "Pavimentadora autopropulsada CMI Super 200" }

  const [toggle, setToggle] = useState(false)
  const handleOnClick = () => {
    setToggle(prev => !prev)
  }

  return (
    <Layout page="arriendos">
      <SEO title="Arriendos" />
      <div className="flex justify-center items-end bg- h-64 bg-custom-blue">
        <h1 className="text-4xl text-white mb-5">Arriendos</h1>
      </div>
      <TitleAndQuote onClick={handleOnClick}>
        <SectionHeader>Maquinaria</SectionHeader>
      </TitleAndQuote>
      {toggle && (
        <QuoteForm
          onClick={() => handleOnClick()}
          data={[...machinery, ...trucks, pavimentadora]}
        />
      )}
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
      <TitleAndQuote onClick={handleOnClick}>
        <SectionHeader>Camiones</SectionHeader>
      </TitleAndQuote>
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
      <TitleAndQuote onClick={handleOnClick}>
        <SectionHeader>Pavimentadora</SectionHeader>
      </TitleAndQuote>
      <SingleItemCard
        image={data.pavimentadora.childImageSharp.fluid}
        data={trucks}
        name="camiones"
      >
        <div className="my-3 mx-10">
          <h1 className="text-2xl text-custom-gray">{pavimentadora.name}</h1>
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

const TitleAndQuote = ({ children, onClick }) => (
  <div className="flex w-full items-center">
    {children}
    <div className="h-10">
      <Button onClick={onClick}>Cotizar</Button>
    </div>
  </div>
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

const QuoteForm = ({ onClick, data }) => {
  return (
    <Modal>
      <div className="flex justify-center items-center overflow-y-hidden  ">
        <div className="h-full max-w-6xl bg-gray-100 rounded-md p-5">
          <div>
            <form
              method="post"
              action="https://www.flexyform.com/f/0afa15e71d42d75b565502b5986ce42559a3ffd2"
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
                  <div className="items-stretch h-full">
                    <label htmlFor="mensaje">Mensaje*</label>
                    <StyledInput
                      type="text"
                      name="mensaje"
                      style={{ height: 200 }}
                      required
                      textArea={true}
                      rows={5}
                      className="flex"
                    />
                  </div>
                </div>
                <div className="mx-3 flex flex-col">
                  {data.map(m => (
                    <>
                      <label
                        htmlFor={m.name}
                        class="inline-flex items-center mt-3"
                      >
                        <input
                          type="checkbox"
                          id={m.name}
                          name={m.name}
                          key={m.name}
                          className="form-checkbox h-5 w-5 text-custom-yellow focus:outline-none"
                        />
                        <span class="ml-2 ">{m.name}</span>
                      </label>
                    </>
                  ))}
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-between mt-2">
            <Button onClick={onClick} color="gray">
              Cerrar
            </Button>
            <Button type="submit" color="yellow">
              Enviar
            </Button>
          </div>
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
