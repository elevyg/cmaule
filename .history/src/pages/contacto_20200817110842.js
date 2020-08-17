import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacto = () => (
  <Layout>
    <SEO title="Contacto" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-yellow">
      <h1 className="text-4xl text-white mb-5">Contacto</h1>
    </div>
    <div className="w-full">
      <Map />
    </div>
  </Layout>
)

const Map = () => {
  return (
    <div>
      <div className="w-full">
        <iframe
          className="w-full h-56"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Napole%C3%B3n%203010,%20Santiago%20Chile+(Oficina)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  )
}
export default Contacto
