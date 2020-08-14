import React from "react"

const MachineCard = ({ name, price, children }) => {
  return (
    <div className=" flex justify-start items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md  h-64 max-w-xl min-h-full">
      {children}
      <div className="flex flex-col">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default MachineCard
