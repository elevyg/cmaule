import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacto = () => (
  <Layout>
    <SEO title="Contacto" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-yellow">
      <h1 className="text-4xl text-white mb-5">Contacto</h1>
    </div>
    <div>
      <Map />
    </div>
  </Layout>
)

const Map = () => {
  return (
    <div>
      <div style="width: 100%">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Napole%C3%B3n%203010,%20Santiago%20Chile+(Oficina)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://www.maps.ie/route-planner.htm">Journey Planner</a>
      </div>
    </div>
  )
}
export default Contacto
