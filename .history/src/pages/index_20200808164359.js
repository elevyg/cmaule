import React from "react"
import { Fade, Flip } from "react-awesome-reveal"
import { motion } from "framer-motion"

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
      <div
        id="valores"
        className="container flex justify-center items-center my-5"
      >
        <div id="valores-izq">
          <Valores
            className="text-right"
            valores={["Profesionalismo", "Probidad"]}
          />
        </div>
        <img src={require('../images/engineers discussion.jpg')}
        {/* <img
          src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Valores"
          className="rounded-full h-40 w-40 md:h-64 md:w-64 object-cover object-center m-3"
        /> */}
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
        <motion.p
          key={valor}
          className=" text-xl md:text-3xl my-12"
          whileHover={{ scale: 1.3 }}
        >
          {valor}
        </motion.p>
      ))}
  </div>
)

export default IndexPage
