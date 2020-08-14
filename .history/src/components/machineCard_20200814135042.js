import React from "react"
import { Img } from "gatsby-image"
import Card from "./card"

const MachineCard = ({ name, price, children }) => {
  return (
    <div className="flex justify-start items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md ">
      {children}
      <h1>{name}</h1>
    </div>
  )
}

export default MachineCard
