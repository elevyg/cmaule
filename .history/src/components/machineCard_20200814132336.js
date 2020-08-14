import React from "react"
import { Img } from "gatsby-image"

const MachineCard = ({ name, price, img }) => {
  return (
    <div key={m.id}>
      <h1>{name}</h1>
      <Img fluid={img} atl={name} className="max-w-lg" />
    </div>
  )
}

export default MachineCard
