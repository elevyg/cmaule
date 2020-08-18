import React from "react"

const Button = props => {

  const customClassName = "shadow bg-custom-blue hover:bg-custom-yellow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" +
  " " +props.className

  return (
    <button
      className={
        
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
