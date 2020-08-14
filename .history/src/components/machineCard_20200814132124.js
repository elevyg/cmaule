import React from "react"

const MachineCard = () => {
  return (
    <div key={m.id}>
      <h1>{m.name}</h1>
      <Img
        fluid={m.image.childImageSharp.fluid}
        atl={m.name}
        className="max-w-lg"
      />
    </div>
  )
}

export default MachineCard
