import React from "react"

const Button = props => {
  return (
    <button
      className={
        "shadow hover:bg-custom-yellow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" +
        " " +
        props.className
      }
      {...props}
    ></button>
  )
}

export default Button
