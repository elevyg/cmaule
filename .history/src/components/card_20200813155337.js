import React from "react"

const Card = ({ children, className }) => {
  return (
    <div
      className={[
        "flex flex-col justify-start items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md ",
        className,
      ]}
    >
      {children}
    </div>
  )
}
export default Card
