import React, { Fragment } from "react"

const Modal = props => {
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-screen  max-h-screen md:max-w-2xl my-4 mx-auto ">
          {/*content*/}
          {props.children}
        </div>
      </div>
      <div className="opacity-0 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  )
}

export default Modal
