import React from "react"
const StyledInput = props => {
  const customStyle =
    "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" +
    props.className

  if (props.textArea === true) {
    return <textarea {...props} className={customStyle} />
  }
  return <input {...props} className={customStyle} />
}

export default StyledInput
