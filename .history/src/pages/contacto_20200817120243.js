import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapPin as MapIcon,
  faPhoneSquare as PhoneIcon,
  faMailBulk as MailIcon,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { COLORES } from "../constants/colors"
import StyledInput from "../components/StyledInput"

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
        <Content />
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
      ></iframe>
    </div>
  )
}

const Content = () => {
  return (
    <div className="my-4">
      <IconText icon={MapIcon} color="red">
        <p>Napoleón 3010 Of 72, Las Condes, Santiago Chile.</p>
      </IconText>
      <IconText icon={PhoneIcon} color="green">
        <p>+56 22 233 38 65</p>
      </IconText>
      <IconText icon={MailIcon} color={COLORES[1]}>
        <p>contacto@cmaule.cl</p>
      </IconText>
    </div>
  )
}

const IconText = ({ icon, children, color }) => (
  <div className="flex items-center justify-start">
    <FontAwesomeIcon icon={icon} color={color} className="mx-5" />
    {children}
  </div>
)

const Form = () => {
  const handleAction = () => {}
  return (
    <form method="post" action={handleAction}>
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
          textArea
        />
      </div>
      <div className="w-full my-3">
        <button
          class="shadow bg-custom-blue hover:bg-custom-yellow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Contacto
