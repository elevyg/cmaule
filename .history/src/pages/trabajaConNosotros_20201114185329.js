import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TrabajaConNosotros = () => (
  <Layout>
    <SEO title="TrabajaConNosotros" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-yellow">
      <h1 className="text-4xl text-white mb-5">Trabaja Con Nosotros</h1>
    </div>
    <div className="flex flex-col justify-center items-center text-center mx-24 my-5">
      <h1 className="text-5xl font-hairline text-custom-gray">
        Buscamos profesionales comprometidos
      </h1>
      <h2 className="text-3xl font-hairline text-custom-gray">
       Ingenieros civiles, constructores civiles con vocación por las obras de ingeniería.
      </h2>
      <ul className="list-disc text-left">
        <li> Ingenier@ encargado del estudio de propuestas; elaboración de presupuesto y presentación de ofertas - Full time - Experiencia acreditable - Presencial</li>
      <li>Profesional experto en cubicación con Autocad, experiencia acreditable - Full Time</li>
      </ul>
    </div>
  </Layout>
)

export default TrabajaConNosotros
