import React from "react"
import { motion } from "framer-motion"

const PositionCard = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-full md:w-auto focus:outline-none"
    >
      <motion.div
        className="flex justify-center items-center md:m-5 p-5 bg-gray-100 shadow-2xl rounded-md w-10/12 md:w-auto max-h-full"
        whileHover={{ scale: 1.025, ascent: 1 }}
      >
        <div className="flex flex-col items-start justify-center ml-3 min-h-full">
          <h1 className="text-xl text-custom-gray">{name}</h1>
        </div>
      </motion.div>
    </button>
  )
}

export default PositionCard
