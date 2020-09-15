import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Obras = () => (
  <Layout>
    <SEO title="Obras" />

    <div className="flex justify-center items-end h-64 bg-custom-gray">
      <h1 className="text-4xl text-white mb-5">Obras</h1>
      <div className="flex">
        <VerticalTimeline>
          <VerticalTimelineElement>
            <h1>Obra 1</h1>
            <h2>Cliente</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae culpa molestiae omnis, officiis sequi ullam totam
              veritatis nam error libero?
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  </Layout>
)

export default Obras
