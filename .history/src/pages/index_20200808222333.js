import React from "react"
import { Fade, Flip } from "react-awesome-reveal"
import { motion } from "framer-motion"
import "../assets/css/layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward, faUsers, faHardHat } from "@fortawesome/free-solid-svg-icons"
import Card from "../components/card"

import Layout from "../components/layout"

import SEO from "../components/seo"

const COLORES = ["#5e5874", "#1d3d82", "#fcb501"]

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
      <div
        id="valores"
        className="flex justify-evenly items-center py-5 w-full flex-grow-0 "
      >
        <Valores
          className="flex flex-col text-left items-end "
          valores={[
            "Estanques",
            "Plantas de tratamiento",
            "Red de alcantarillado",
            "Recolectores de aguas",
            "Alumbrado",
          ]}
        />

        <img
          src={require("../images/engineers discussion.jpg")}
          alt="people"
          className="flex-grow-0 cover max-w-sm lg:max-w-2xl"
        />

        <Valores
          className="flex flex-col justify-center items-start"
          valores={[
            "Puentes",
            "Ciclovias",
            "Pasos sobrenivel",
            "Hormigón",
            "Asfalto",
          ]}
        />
      </div>
    </Fade>
  )
}

const Valores = ({ valores, className }) => (
  <div className={className}>
    {valores &&
      valores.map((valor, index) => (
        <motion.p
          key={valor}
          className=" text-lg md:text-3xl text-gray-800 font-bold my-6"
          whileHover={{ scale: 1.3 }}
        >
          {valor}
        </motion.p>
      ))}
  </div>
)

const CardContent = ({ icon, color, title, description }) => {
  return (
    <Card>
      <FontAwesomeIcon icon={icon} size="5x" className="my-3" color={color} />
      <h2 className="text-center my-3 text-lg font-bold">{title}</h2>
      <p className="max-w-xs text-center">{description}</p>
    </Card>
  )
}
const INFO = [
  {
    icon: faAward,
    color: "#5e5874",
    title: "Presencia Nacional",
    description: `Nuestra constructora, fundada hace más de 30 años, viene ejecutando importantes obras civiles en nuestro país, emplazadas entre la segunda y décima región`,
  },
  {
    icon: faUsers,
    title: "Equipo",
    color: "#1d3d82",
    description: `Junto a un gran equipo humano, la empresa posee un significativo parque de maquinarias, vehículos pesados y maquinaria menor, que le otorga independencia y flexibilidad, garantizando a sus directores de proyectos la disponibilidad de recursos de maquinaria pesada y transporte acorde al ritmo que les demanda la planificación de la ejecución de las obras a su cargo`,
  },
  {
    icon: faHardHat,
    color: "#fcb501",
    title: "Múltiples Capacidades",
    description: `La experiencia acumulada ejecutando obras civiles comprende múltiples especialidades, destacando en obras civiles de urbanización, puentes y movimiento de tierras`,
  },
]
const InfoContainer = () => {
  return (
    <div className="h-auto flex bg-gray-300 text-gray-900 justify-around ">
      {INFO.map(info => (
        <CardContent
          icon={info.icon}
          color={info.color}
          title={info.title}
          description={info.description}
        />
      ))}
    </div>
  )
}
