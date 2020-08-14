import React from "react"
import { motion } from "framer-motion"
const MachineCard = ({ name, price, children }) => {
  return (
    <motion.div
      className=" flex justify-between items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md max-h-full"
      whileHover={{ scale: 1.1 }}
    >
      {children}
      <div className="flex flex-col items-center justify-start ml-3 min-h-full">
        <h1>{name}</h1>
      </div>
    </motion.div>
  )
}

export default MachineCard
