import React from "react"
import { Fade, Flip } from "react-awesome-reveal"
import { motion } from "framer-motion"
import "../assets/css/layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward, faPeopleCarry } from "@fortawesome/free-solid-svg-icons"
import Card from "../components/card"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { icon } from "@fortawesome/fontawesome-svg-core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ValoresContainer />
    <InfoContainer />
  </Layout>
)

export default IndexPage

const Hero = () => {
  return (
    <Flip direction="vertical" duration={1000} triggerOnce>
      <div id="index" className=" flex justify-center items-center">
        <Fade direction="vertical" triggerOnce delay={500}>
          <h1 className=" text-4xl md:text-6xl text-white font-bold">
            30 años de experiencia
          </h1>
        </Fade>
      </div>
    </Flip>
  )
}

const ValoresContainer = () => {
  return (
    <Fade direction="bottom" duration={3000}>
      <div id="valores" className="flex justify-center items-center py-5">
        <div id="valores-izq">
          <Valores
            className="text-right"
            valores={["Profesionalismo", "Probidad"]}
          />
        </div>
        <img
          src={require("../images/engineers discussion.jpg")}
          alt="people"
          className="flex-grow-0 cover max-w-sm lg:max-w-2xl"
        />
        <Valores
          className="text-left"
          valores={["Excelencia", "Puntualidad"]}
        />
      </div>
    </Fade>
  )
}

const Valores = ({ valores, className }) => (
  <div className={className}>
    {valores &&
      valores.map((valor, index) => (
        <div className="flex">
          <motion.p
            key={valor}
            className=" text-lg md:text-3xl my-12 relative top text-gray-800 z-50 bold"
            whileHover={{ scale: 1.3 }}
          >
            {valor}
          </motion.p>
        </div>
      ))}
  </div>
)

const CardContent = ({ icon, title, description }) => {
  return (
    <Card>
      <FontAwesomeIcon icon={icon} size="5x" className="my-3" />
      <h2 className="text-center my-3 text-lg font-bold">{title}</h2>
      <p className="max-w-xs text-center">{description}</p>
    </Card>
  )
}
const INFO = [
  {
    icon: faAward,
    title: "Experiencia",
    description: `Nuestra constructora, fundada hace más de 30 años, viene ejecutando importantes obras civiles en nuestro país, emplazadas entre la segunda y décima región`,
  },
  {
    icon: faPeopleCarry,
    title: "Equipo",
    description: `Junto a un gran equipo humano, la empresa posee un significativo parque de maquinarias, vehículos pesados y maquinaria menor, que le otorga independencia y flexibilidad, garantizando a sus directores de proyectos la disponibilidad de recursos de maquinaria pesada y transporte acorde al ritmo que les demanda la planificación de la ejecución de las obras a su cargo`,
  },
]
const InfoContainer = () => {
  return (
    <div className="h-auto flex bg-gray-300 text-gray-900 justify-around ">
      {INFO.map(info => (
        <CardContent
          icon={info.icon}
          title={info.title}
          description={info.description}
        />
      ))}
    </div>
  )
}