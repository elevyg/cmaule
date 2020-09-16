import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Obras = ({ data }) => {
  const obras = data.allObrasJson.edges
  console.log(obras, "obras")
  return (
    <Layout>
      <SEO title="Obras" />

      <div className="flex justify-center items-end h-64 bg-custom-gray">
        <h1 className="text-4xl text-white mb-5">Obras</h1>
      </div>

      <div className="flex">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {obras.map(obra => (
            <ObraTimelineElement key={obra.node.id} obra={obra.node} />
          ))}
        </VerticalTimeline>
      </div>
    </Layout>
  )
}

const ObraTimelineElement = obra => (
  <VerticalTimelineElement
    contentStyle={{
      backgroundColor: "white",
      borderTopColor: "#1d3d82",
      borderTopWidth: 5,
    }}
    contentArrowStyle={{ borderRight: "7px solid  #1d3d82" }}
    date={"23/05/1991"}
    dateClassName="text-black"
    iconStyle={{ background: "#1d3d82", color: "#fff" }}
    textClassName="text-white"
  >
    <h1 className="text-black">{obra.cliente}</h1>
    <h3 className="text-black text-3xl">{obra.obra}</h3>
    <h4>{`Monto: $${obra.monto}`}</h4>
  </VerticalTimelineElement>
)

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
