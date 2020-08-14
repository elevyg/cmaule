import React from "react"
import { motion } from "framer-motion"
const MachineCard = ({ name, price, children }) => {
  return (
    <motion.div
      className=" flex justify-between items-center m-5 p-5 bg-gray-100 shadow-2xl rounded-md max-h-full"
      whileHover={{ scale: 1.005 }}
    >
      {children}
      <div className="flex flex-col items-start justify-between ml-3 min-h-full">
        <h1 className="text-lg text-custom-gray">{name}</h1>
        <h3 className="font-semibold text-custom-yellow text-xl">
          {price} UF + IVA
        </h3>
      </div>
    </motion.div>
  )
}

export default MachineCard
