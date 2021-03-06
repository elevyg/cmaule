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

    <div className="flex justify-center items-end bg- h-64 bg-custom-gray">
      <h1 className="text-4xl text-white mb-5">Obras</h1>
      <div className="flex h-full">
        <VerticalTimeline>
          <VerticalTimelineElement>
            <h1>Obra 1</h1>
            <h2>Cliente</h2>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  </Layout>
)

export default Obras
