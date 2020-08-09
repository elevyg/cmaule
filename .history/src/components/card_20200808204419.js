import React from "react"

const Card = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md min-w-full">
      {children}
    </div>
  )
}
export default Card
