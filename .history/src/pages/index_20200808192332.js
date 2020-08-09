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
      valores.map((valor, index) => (
        <div className="flex relative">
          <motion.div
            className="h-20 w-20 absolute bg-dark-blue rounded-full z-40"
            style={
              index === 0
                ? { top: 50, bottom: 0, left: 50, right: 0 }
                : { top: 50, bottom: 0, left: 100, right: 0 }
            }
            whileHover={{ scale: 1.5 }}
          >
            <motion.div
              className="h-32 w-32 absolute bg-yellow-400 rounded-full z-10"
              style={
                index === 0
                  ? { top: 0, bottom: 0, left: 0, right: 0 }
                  : { top: 0, bottom: 0, left: 0, right: 0 }
              }
              whileHover={{ scale: 1.5 }}
            ></motion.div>
          </motion.div>
          <motion.p
            key={valor}
            className=" text-xl md:text-5xl my-12 relative top text-gray-500 z-50"
            whileHover={{ scale: 1.3 }}
          >
            {valor}
          </motion.p>
        </div>
      ))}
  </div>
)

export default IndexPage
