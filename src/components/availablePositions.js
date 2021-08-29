import React, { useState } from "react"
import PositionCard from "./positionCard"
import PositionForm from "./PositionForm"

const positionsList = [
  { name: "Profesional residente obras viales" },
  { name: "Profesional residente obras urbanas" },
  { name: "Profesional residente obras sanitarias" },
  { name: "Jefe de terreno obras viales" },
  { name: "Jefe de terreno obras sanitarias" },
  { name: "Encargado de control de calidad" },
  { name: "Geomensor" },
  { name: "Topógrafo" },
  { name: "Prevensionista de riesgos" },
  { name: "Laboratorista A, B y C" },
  { name: "Jefe de taller" },
  { name: "Técnico mecánico" },
  { name: "Administrativo de faena" },
  { name: "Administrativo de oficina central" },
  { name: "Profesional para departamento de estudios" },
]

const AvailablePositions = () => {
  const [toggle, setIsToggle] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState("")

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-auto">
      {positionsList.map(item => (
        <PositionCard
          name={item.name}
          key={item.name}
          onClick={() => {
            setSelectedPosition(item.name)
            setIsToggle(true)
          }}
        />
      ))}
      {toggle && (
        <PositionForm
          position={selectedPosition}
          onClose={() => {
            setIsToggle(false)
            setSelectedPosition("")
          }}
        />
      )}
    </div>
  )
}

export default AvailablePositions
