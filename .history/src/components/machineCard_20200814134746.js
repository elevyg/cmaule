import React from "react"
import { Img } from "gatsby-image"

const MachineCard = ({ name, price, children }) => {
  return (
    <Card>
      {children}
      <h1>{name}</h1>
    </Card>
  )
}

export default MachineCard
