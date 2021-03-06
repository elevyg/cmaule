import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Obras = () => (
  <Layout>
    <SEO title="Obras" />

    <div className="flex justify-center items-end h-64 bg-custom-gray">
      <h1 className="text-4xl text-white mb-5">Obras</h1>
    </div>

    <div className="flex">
      <VerticalTimeline className="vertical-timeline-custom-line">
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
          <h1 className="text-black">Obra 1</h1>
          <h3 className="text-black text-3xl">Cliente</h3>
          <p className="text-gray-800">
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
