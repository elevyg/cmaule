import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHardHat, faTimes } from "@fortawesome/free-solid-svg-icons"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"

import Layout from "../components/layout"
import Modal from "../components/modal"
import SEO from "../components/seo"

// import { COLORES } from "../constants/colors"

const Obras = ({ data }) => {
  const obras = data.allObrasJson.edges
  const [toggle, setToggle] = useState(false)
  const [selectedObra, setSelectedObra] = useState()
  const [obraId, setObraId] = useState()

  const onObraClickHandle = (toggleState, obraId) => {
    setToggle(toggleState)
    setObraId(obraId)
  }
  useEffect(() => {
    setSelectedObra(obras.find(obra => obra.node.id === obraId))
    return () => {
      setSelectedObra(null)
    }
  }, [toggle, obraId, obras])
  return (
    <Layout>
      <SEO title="Obras" />
      <div className="flex justify-center items-end h-64 bg-custom-gray">
        <h1 className="text-4xl text-white mb-5">Obras</h1>
      </div>
      <div className="flex">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {obras.map(obra => (
            <ObraTimelineElement
              key={obra.node.id}
              obra={obra.node}
              onClick={onObraClickHandle}
            />
          ))}
        </VerticalTimeline>
      </div>
      {toggle && <ObraModal onClick={onObraClickHandle} obra={selectedObra} />}
    </Layout>
  )
}

const ObraTimelineElement = ({ obra, onClick }) => {
  return (
    // Info de que los montos son de las época en pie de página.
    <>
      <VerticalTimelineElement
        contentStyle={{
          backgroundColor: "white",
          borderTopColor: "#1d3d82",
          borderTopWidth: 5,
        }}
        contentArrowStyle={{ borderRight: "7px solid  #1d3d82" }}
        date={obra.fechaInicio}
        dateClassName="text-black"
        iconStyle={{ background: "#1d3d82", color: "#fff" }}
        textClassName="text-white"
        icon={
          <FontAwesomeIcon
            icon={faHardHat}
            size="2x"
            className="flex justify-center items-center pr-2"
          />
        }
        onTimelineElementClick={() => onClick(true, obra.id)}
      >
        <h1 className="text-black">{obra.cliente}</h1>
        <h3 className="text-black text-3xl">{obra.obra}</h3>
        <h4 className="text-custom-yellow">{`Monto: $${new Intl.NumberFormat(
          "es-ES"
        ).format(obra.monto)}`}</h4>
      </VerticalTimelineElement>
    </>
  )
}

const ObraModal = ({ onClick, obra }) => {
  if (obra) {
    return (
      <Modal>
        <div className="flex flex-col justify-start items-center overflow-y-hidden bg-white rounded-md px-3 py-3 border-t-8 border-custom-blue borde">
          <div>
            <button
              onClick={() => onClick(false)}
              className="absolute top-0 right-0 mr-5 mt-3 focus:shadow-outline focus:outline-none text-gray-500"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl">{obra.node.obra}</h3>
            <p className="text-lg text-custom-blue mt-2">Cantidades de Obra:</p>
            <ul>
              {obra.node.cantidadesDeObra.map(c => (
                <li>
                  {c.nombre}:{" "}
                  <span className="text-xl text-custom-yellow">
                    {new Intl.NumberFormat("es-ES").format(c.cantidad)}
                  </span>{" "}
                  {c.unidad}
                </li>
              ))}
            </ul>
            <p className="text-lg text-custom-blue mt-2">Plazos:</p>
            <p>{`Fecha de Inicio: ${obra.node.fechaInicio}`}</p>
            <p>{`Fecha de Término: ${obra.node.fechaTermino}`}</p>
          </div>
        </div>
      </Modal>
    )
  }
  return <p>Cargando...</p>
}

export const query = graphql`
  {
    allObrasJson {
      edges {
        node {
          id
          obra
          cliente
          ubicacion
          monto
          unidad
          fechaInicio
          fechaTermino
          cantidadesDeObra {
            nombre
            cantidad
            unidad
            tags
          }
        }
      }
    }
  }
`

export default Obras
