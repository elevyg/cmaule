import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapPin as MapIcon,
  faPhoneAlt as PhoneIcon,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacto = () => (
  <Layout>
    <SEO title="Contacto" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-yellow">
      <h1 className="text-4xl text-white mb-5">Contacto</h1>
    </div>
    <div className="w-full flex items-start justify-between">
      <Map />
      <div className="w-1/2 p-3">
        <Content />
        <Form />
      </div>
    </div>
  </Layout>
)

const Map = () => {
  return (
    <div className="w-1/2">
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
      <IconText icon={MapIcon}>
        <p>Napoleón 3010 Of 72, Las Condes, Santiago Chile.</p>
      </IconText>
      <IconText icon={PhoneIcon}>
        <p>Número de teléfono: +56 22 233 38 65</p>
      </IconText>
    </div>
  )
}

const IconText = ({ icon, children }) => (
  <div className="flex items-center justify-start">
    <FontAwesomeIcon icon={icon} color="red" className="mx-5" />
    {children}
  </div>
)

const Form = () => {
  return <div></div>
}
export default Contacto
