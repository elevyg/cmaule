import React from "react"
import { Fade, Flip } from "react-awesome-reveal"
import { motion } from "framer-motion"
import "../assets/css/layout.css"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ValoresContainer />
    <div className="h-screen flex bg-gray-300"></div>
  </Layout>
)

const Hero = () => {
  return (
    <div id="index" className="  flex justify-center items-center">
      <Flip direction="vertical" triggerOnce>
        <h1 className=" text-4xl md:text-6xl text-white font-bold">
          30 años de experiencia
        </h1>
      </Flip>
    </div>
  )
}

const ValoresContainer = () => {
  return (
    <Fade direction="bottom" duration={5000}>
      <div id="valores" className=" flex justify-center items-center my-5">
        <div id="valores-izq">
          <Valores
            className="text-right"
            valores={["Profesionalismo", "Probidad"]}
          />
        </div>
        <img
          src={require("../images/engineers discussion.jpg")}
          alt="people"
          className="flex-grow-0 cover max-w-lg lg:max-w-3xl"
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
      valores.map(valor => (
        <div>
          <motion.p
            key={valor}
            className=" text-xl md:text-3xl my-12"
            whileHover={{ scale: 1.3 }}
          >
            {valor}
          </motion.p>
          <div className="h-10 w-10  bg-dark-blue rounded-full "></div>
        </div>
      ))}
  </div>
)

export default IndexPage
