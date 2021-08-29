import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AvailablePositions from "../components/AvailablePositions"

const TrabajaConNosotros = () => (
  <Layout>
    <SEO title="TrabajaConNosotros" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-yellow">
      <h1 className="text-2xl md:text-4xl text-white mb-5">
        Trabaja Con Nosotros
      </h1>
    </div>
    <div className="flex flex-col justify-center items-center text-center md:mx-24 my-5 w-full md:w-auto">
      <h1 className="text-2xl md:text-5xl font-hairline text-custom-gray mb-2">
        Buscamos profesionales comprometidos
      </h1>
      <h2 className="text-xl md:text-3xl font-bold md:font-hairline text-custom-gray mb-4">
        Con vocación por las obras de ingeniería.
      </h2>
      <AvailablePositions />
    </div>
  </Layout>
)

export default TrabajaConNosotros
