import React from "react"

const MachineCard = ({ name, price, children }) => {
  return (
    <div className=" flex justify-between items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md max-h-full">
      {children}
      <div className="flex flex-col items-center justify-start min-h-full">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default MachineCard
