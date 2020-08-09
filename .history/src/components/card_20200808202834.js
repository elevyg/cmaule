import React from "react"

const Card = ({ children }) => {
  return (
    <div className="h-auto flex bg-gray-300 text-gray-900 ">
      <div className="flex flex-col justify-center items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md">
        {children}
      </div>
    </div>
  )
}
export default Card
