import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconText = ({ icon, children, color }) => (
  <div className="flex items-center justify-start">
    <FontAwesomeIcon icon={icon} color={color} className="mx-5" />
    {children}
  </div>
)

export default IconText
