import React from "react"
import { Fade, Flip } from "react-awesome-reveal"

import Layout from "../components/layout"

import SEO from "../components/seo"

//images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="index" className="h-screen flex justify-center items-center">
      <Flip direction="vertical">
        <h1 className="text-6xl text-white font-bold">
          30 años de experiencia
        </h1>
      </Flip>
    </div>
    <Fade direction="top">
      <div id="valores" className="container flex justify-center items-center">
        <div id="valores-izq">
          <Valores
            className="text-right"
            valores={["Profesionalismo", "Providad"]}
          />
        </div>

        <img
          src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Valores"
          className="rounded-full  h-64 w-64 object-cover object-center m-3"
        />

        <Valores
          className="text-left"
          valores={["Excelencia", "Puntualidad"]}
        />
      </div>
    </Fade>
  </Layout>
)

const Valores = ({ valores, className }) => (
  <div className={className}>
    {valores &&
      valores.map(valor => (
        <p key={valor} className="text-3xl my-12">
          {valor}
        </p>
      ))}
  </div>
)

export default IndexPage
