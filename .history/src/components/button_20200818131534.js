import React from "react"

const Button = props => {
  let customClassName = `shadow bg-custom-blue hover:bg-custom-yellow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`

  if (props.className) {
    customClassName = customClassName.concat([" ", props.className])
  }
  return (
    <button className={customClassName} {...props}>
      {props.children}
    </button>
  )
}

export default Button
