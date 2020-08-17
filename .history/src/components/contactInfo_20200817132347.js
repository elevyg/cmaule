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
        <p>+56 22 233 38 65</p>
      </IconText>
      <IconText icon={MailIcon} color={footer ? "white " : COLORES[1]}>
        <p>contacto@cmaule.cl</p>
      </IconText>
    </div>
  )
}

export default ContactInfo
