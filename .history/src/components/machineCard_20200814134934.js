import React from "react"
import { Img } from "gatsby-image"
import Card from "./card"

const MachineCard = ({ name, price, children }) => {
  return (
    <Card>
      <div className=" w-auto h-auto justify-between items-center">
        {children}
        <h1>{name}</h1>
      </div>
    </Card>
  )
}

export default MachineCard
