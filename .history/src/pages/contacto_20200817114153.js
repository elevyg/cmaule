import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapPin as MapIcon,
  faPhoneSquare as PhoneIcon,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacto = () => (
  <Layout>
    <SEO title="Contacto" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-yellow">
      <h1 className="text-4xl text-white mb-5">Contacto</h1>
    </div>
    <div className="w-full flex flex-col md:flex-row items-start justify-between">
      <Map />
      <div className="md:w-1/2 p-3">
        <Content />
        <Form />
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
    <div>
      <IconText icon={MapIcon} color="red">
        <p>Napoleón 3010 Of 72, Las Condes, Santiago Chile.</p>
      </IconText>
      <IconText icon={PhoneIcon} color="green">
        <p>+56 22 233 38 65</p>
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
  return (
    <div>
      <div>
        <label>Nombre completo</label>
        <StyledInput type="text" name="name" />
      </div>
      <div>
        <label>Correo Electrónico</label>
        <StyledInput type="email" name="name" />
      </div>
      <div>
        <label>Número de teléfono</label>
        <StyledInput type="text" name="name" />
      </div>
      <div className="items-stretch h-full">
        <label>Mensaje</label>
        <StyledInput type="text" name="name" style={{ height: 200 }} />
      </div>
    </div>
  )
}

const StyledInput = props => {
  return (
    <input
      {...props}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-last-name"
    />
  )
}
export default Contacto
