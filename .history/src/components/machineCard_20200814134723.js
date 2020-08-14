import React from "react"
import { Img } from "gatsby-image"

const MachineCard = ({ name, price, children }) => {
  return (
    <div>
      {children}
      <h1>{name}</h1>
    </div>
  )
}

export default MachineCard
