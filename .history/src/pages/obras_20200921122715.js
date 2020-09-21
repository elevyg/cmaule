import { faHardHat } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import Layout from "../components/layout"
import Modal from "../components/modal"
import SEO from "../components/seo"

const Obras = ({ data }) => {
  const obras = data.allObrasJson.edges
  const [toggle, setToggle] = useState(true)
  const onObraClickHandle = toggleState => {
    setToggle(toggleState)
    console.log("Click a una obra")
  }
  return (
    <Layout>
      <SEO title="Obras" />

      <div className="flex justify-center items-end h-64 bg-custom-gray">
        <h1 className="text-4xl text-white mb-5">Obras</h1>
      </div>

      {toggle && (
        <Modal>
          <div className="flex justify-center items-center overflow-y-hidden  ">
            <h1>Hola</h1>
            <button onClick={onObraClickHandle(false)}>Cerrar</button>
          </div>
        </Modal>
      )}
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
    </Layout>
  )
}

const ObraTimelineElement = ({ obra, onClick }) => {
  return (
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
            className="justify-center items-center"
          />
        }
        iconClassName="flex"
        onTimelineElementClick={() => onClick(true)}
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
