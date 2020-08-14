import React from "react"
import { Img } from "gatsby-image"

const MachineCard = ({ name, price, img }) => {
  return (
    <div>
      <Img fluid={img} atl={name} className="max-w-lg" />
      <h1>{name}</h1>
    </div>
  )
}

export default MachineCard
