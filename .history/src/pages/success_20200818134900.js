import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout page="success">
    <SEO title="Enviado" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-gray">
      <h1 className="text-4xl text-white mb-5">Enviado</h1>
    </div>
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
      <img
        alt="success"
        src={require("../images/success.png")}
        className=" max-w-md md:max-w-2xl"
      />
      <div className="my-3">
        <h2 className="text-2xl font-bold text-custom-blue">
          Muchas gracias por contactarnos
        </h2>
        <p className="text-lg">Nuestro equipo te responderá a la brevedad</p>
      </div>
    </div>
  </Layout>
)

export default Success
