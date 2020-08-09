import React from "react"
import { Fade, Flip } from "react-awesome-reveal"
import { motion } from "framer-motion"
import "../assets/css/layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ValoresContainer />
    <div className="h-screen flex bg-gray-300">
      <div className="flex flex-col justify-center items-center">
        <FontAwesomeIcon icon={faAward} />
        <div className="text-center">Logo</div>
        <p className="max-w-xs text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
          excepturi eligendi beatae, nulla at suscipit qui quidem corrupti illum
          ullam.
        </p>
      </div>
    </div>
  </Layout>
)

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
      <div id="valores" className="flex justify-center items-center my-5">
        <div id="valores-izq">
          <Valores
            className="text-right"
            valores={["Profesionalismo", "Probidad"]}
          />
        </div>
        <img
          src={require("../images/engineers discussion.jpg")}
          alt="people"
          className="flex-grow-0 cover max-w-lg lg:max-w-2xl"
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
        <div className="flex relative">
          <motion.p
            key={valor}
            className=" text-xl md:text-3xl my-12 relative top text-gray-800 z-50 bold"
            whileHover={{ scale: 1.3 }}
          >
            {valor}
          </motion.p>
        </div>
      ))}
  </div>
)

export default IndexPage
