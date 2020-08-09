import React from "react"
import { Fade, Flip, Slide, Bounce } from "react-awesome-reveal"
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
    <Bounce direction="top" duration={1000}>
      <div id="index" className="  flex justify-center items-center">
        <Flip direction="vertical" triggerOnce delay={1000}>
          <h1 className=" text-4xl md:text-6xl text-white font-bold">
            30 años de experiencia
          </h1>
        </Flip>
      </div>
    </Bounce>
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
      valores.map((valor, index) => (
        <div className="flex relative">
          <motion.p
            key={valor}
            className=" text-xl md:text-5xl my-12 relative top text-gray-800 z-50 bold"
            whileHover={{ scale: 1.3 }}
          >
            {valor}
          </motion.p>
        </div>
      ))}
  </div>
)

export default IndexPage
