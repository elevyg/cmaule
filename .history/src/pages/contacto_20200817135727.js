import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import StyledInput from "../components/StyledInput"
import ContactInfo from "../components/contactInfo"

const Contacto = () => (
  <Layout>
    <SEO title="Contacto" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-yellow">
      <h1 className="text-4xl text-white mb-5">Contacto</h1>
    </div>
    <div className="w-full flex flex-col-reverse md:flex-row items-start justify-between">
      <Map />
      <div className="w-full md:w-1/2 p-3">
        <Form />
        <ContactInfo />
      </div>
    </div>
  </Layout>
)

const Map = () => {
  return (
    <div className="w-full md:w-1/2">
      <iframe
        className="w-full"
        style={{ height: 600 }}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Napole%C3%B3n%203010,%20Santiago%20Chile+(Oficina)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="map"
      ></iframe>
    </div>
  )
}

const Form = () => {
  return (
    <form
      method="post"
      action="https://www.flexyform.com/f/27fd84adf576c792322dc88db1a2c7e090e51f90"
    >
      <div>
        <label>Nombre completo*</label>
        <StyledInput type="text" name="name" required />
      </div>
      <div>
        <label>Correo Electrónico*</label>
        <StyledInput type="email" name="email" required />
      </div>
      <div>
        <label>Número de teléfono*</label>
        <StyledInput type="text" name="phone" required />
      </div>
      <div className="items-stretch h-full">
        <label>Mensaje*</label>
        <StyledInput
          type="text"
          name="message"
          style={{ height: 200 }}
          required
          textArea={true}
          rows={5}
          className="flex"
        />
      </div>
      <div className="w-full my-3">
        <button
          class="shadow bg-custom-blue hover:bg-custom-yellow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Contacto
