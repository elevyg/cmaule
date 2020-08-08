import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

//images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="index" className="h-screen flex justify-center items-center">
      <h1 className="text-6xl text-white font-bold">30 años de experiencia</h1>
    </div>
    <div id="valores" className="container flex">
      <div id="valores-izq">
        <p>Profesionalismo</p>
        <p>Providad</p>
      </div>
      <img
        src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Valores"
        className="rounded-full  h-64 w-64 object-cover object-center m-3"
      />
      <Valores />
    </div>
  </Layout>
)

const Valores = () => (
  <div id="valores-izq">
    <p>Excelencia</p>
    <p>Providad</p>
  </div>
)

export default IndexPage
