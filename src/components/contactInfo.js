import React from "react"

import {
  faMapPin as MapIcon,
  faPhoneSquare as PhoneIcon,
  faMailBulk as MailIcon,
} from "@fortawesome/free-solid-svg-icons"

import { COLORES } from "../constants/colors"
import IconText from "./iconText"

const ContactInfo = ({ footer = false }) => {
  return (
    <div className="my-4">
      <IconText icon={MapIcon} color={footer ? "white " : "red"}>
        <p>Napoleón 3010 Of 72, Las Condes, Santiago Chile.</p>
      </IconText>
      <IconText icon={PhoneIcon} color={footer ? "white " : "green"}>
        <p>+56 222 333 865</p>
      </IconText>
      <IconText icon={MailIcon} color={footer ? "white " : COLORES[1]}>
        <p className="hover:text-custom-blue hover:font-semibold">
          <a href="mailto:contacto@cmaule.cl">contacto@cmaule.com</a>
        </p>
      </IconText>
    </div>
  )
}

export default ContactInfo
