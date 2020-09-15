import React from "react"
import { VerticalTimeline } from "react-vertical-timeline-component"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Obras = () => (
  <Layout>
    <SEO title="Obras" />

    <div className="flex justify-center items-end bg- h-64 bg-custom-gray">
      <h1 className="text-4xl text-white mb-5">Obras</h1>
      <div className="flex h-full">
        <VerticalTimeline></VerticalTimeline>
      </div>
    </div>
  </Layout>
)

export default Obras
