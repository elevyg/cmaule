import React from "react"

const MachineCard = ({ name, price, children }) => {
  return (
    <div className="justify-start items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md  h-64 max-w-xl min-h-full">
      {children}
      <h1>{name}</h1>
    </div>
  )
}

export default MachineCard
