import React from "react"

const IconText = ({ icon, children, color }) => (
  <div className="flex items-center justify-start">
    <FontAwesomeIcon icon={icon} color={color} className="mx-5" />
    {children}
  </div>
)

export default IconText
