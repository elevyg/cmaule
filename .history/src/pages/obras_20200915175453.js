import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
// import "../css/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Obras = () => (
  <Layout>
    <SEO title="Obras" />

    <div className="flex justify-center items-end h-64 bg-custom-gray">
      <h1 className="text-4xl text-white mb-5">Obras</h1>
    </div>

    <div className="flex">
      <VerticalTimeline className="bg-gray-300 vertical-timeline-custom-line">
        <VerticalTimelineElement
          contentStyle={{ background: "#1d3d82", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1d3d82" }}
          date={"23/05/1991"}
          dateClassName="text-black"
          iconStyle={{ background: "#1d3d82", color: "#fff" }}
        >
          <h1>Obra 1</h1>
          <h2 className="vertical-timeline-element-title">Cliente</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            culpa molestiae omnis, officiis sequi ullam totam veritatis nam
            error libero?
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </Layout>
)

export default Obras
