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
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "custom-blue", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date={"23/05/1991"}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h1>Obra 1</h1>
          <h2>Cliente</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            culpa molestiae omnis, officiis sequi ullam totam veritatis nam
            error libero?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h1>Obra 1</h1>
          <h2>Cliente</h2>
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
