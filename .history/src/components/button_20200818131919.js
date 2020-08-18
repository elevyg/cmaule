import React from "react"

const Button = (props, { color = "blue" }) => {
  let baseStyle = `shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded bg-custom-gray`

  let customClassName = `${baseStyle} bg-custom-blue hover:bg-custom-yellow`
  if (props.color === "blue") {
  }
  return (
    <button className={customClassName} {...props}>
      {props.children}
    </button>
  )
}

export default Button
