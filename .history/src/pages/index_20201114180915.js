import React from "react"
import { Fade, Flip } from "react-awesome-reveal"
import "../css/layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward, faUsers, faHardHat } from "@fortawesome/free-solid-svg-icons"
import Card from "../components/card"

import Layout from "../components/layout"

import SEO from "../components/seo"

import { COLORES } from "../constants/colors"

const IndexPage = () => (
  <Layout page="index">
    <SEO title="Inicio" />
    <Hero />
    <WordsContainer />
    <InfoContainer />
  </Layout>
)

export default IndexPage

const Hero = () => {
  return (
    <Flip direction="vertical" duration={1000} triggerOnce>
      <div id="index" className=" flex justify-center items-center flex-col ">
        <Fade direction="vertical" triggerOnce delay={500}>
          <h2 className=" text-center text-xl md:text-6xl text-white font-bold">1990 - 2020</h2>
          <h1 className=" text-center text-4xl md:text-6xl text-white font-bold">
            30 años de exitoso cumplimiento
          </h1>
        </Fade>
      </div>
    </Flip>
  )
}

const WordsContainer = () => {
  return (
    // <h2>Una empresa constructora</h2>
    <Fade direction="bottom" duration={3000}>
      <div
        id="valores"
        className="flex flex-col md:flex-row justify-evenly items-center py-5 w-full flex-grow-0 "
      >
        <Valores
          className=" text-center md:flex md:flex-col justify-center md:text-left md:items-end "
          valores={[
            "Estanques",
            "Plantas de tratamiento",
            "Redes de alcantarillado",
            "Recolectores de aguas",
            "Alumbrados públicos",
          ]}
        />

        <img
          src={require("../images/engineers discussion.jpg")}
          alt="people"
          className="flex-grow-0 cover max-w-xs lg:max-w-2xl"
        />

        <Valores
          className="  text-center md:flex md:flex-col justify-center md:text-right md:items-start"
          valores={[
            "Puentes",
            "Ciclovias",
            "Pasos sobrenivel",
            "Pavimentación en Hormigón",
            "Pavimentación en Asfalto",
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
        <p
          key={valor}
          className="text-lg md:text-3xl font-bold  mx-3 md:my-6"
          style={{ color: COLORES[index % COLORES.length] }}
        >
          {valor}
        </p>
      ))}
  </div>
)

const INFO = [
  {
    icon: faAward,

    title: "Presencia Nacional",
    description: `Nuestra constructora, fundada hace más de 30 años, viene ejecutando importantes obras civiles en nuestro país, emplazadas entre la segunda y décima región`,
  },
  {
    icon: faUsers,
    title: "Equipo",

    description: `Junto a un gran equipo humano, la empresa posee un significativo parque de maquinarias, vehículos pesados y maquinaria menor, que le otorga independencia y flexibilidad, garantizando a sus directores de proyectos la disponibilidad de recursos de maquinaria pesada y transporte acorde al ritmo que les demanda la planificación de la ejecución de las obras a su cargo`,
  },
  {
    icon: faHardHat,

    title: "Múltiples Capacidades",
    description: `La experiencia acumulada ejecutando obras civiles comprende múltiples especialidades, donde destacan obras civiles de urbanización, puentes y movimiento de tierras`,
  },
]
const InfoContainer = () => {
  return (
    <div className="h-auto flex flex-col md:flex-row bg-gray-300 text-gray-900 justify-around ">
      {INFO.map((info, index) => (
        <Fade
          direction="top"
          delay={(1000 * index) / 3}
          key={info.title}
          className="h-full"
        >
          <div className=" h-auto">
            <CardContent
              icon={info.icon}
              color={COLORES[index]}
              title={info.title}
              description={info.description}
            />
          </div>
        </Fade>
      ))}
    </div>
  )
}

const CardContent = ({ icon, color, title, description }) => {
  return (
    <Card>
      <FontAwesomeIcon icon={icon} size="5x" className="my-3" color={color} />
      <h2 className="text-center my-3 text-lg font-bold">{title}</h2>
      <p className="max-w-xs text-center">{description}</p>
    </Card>
  )
}
