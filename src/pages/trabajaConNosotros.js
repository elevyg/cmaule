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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni
        adipisci impedit excepturi beatae? Deserunt eligendi dolorem obcaecati
        vel numquam, rem pariatur libero ut ipsa quisquam iusto aut rerum ad
        molestiae, ipsum cumque iure? Pariatur quaerat sint reprehenderit quas
        voluptates, quibusdam praesentium temporibus odit laboriosam dolor
        molestiae, labore rem enim.
      </p>
    </div>
  </Layout>
)

export default TrabajaConNosotros
