import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>No encontramos tu página</h1>
    <p>Lamenentablemente la página que estas buscando no existe</p>
  </Layout>
)

export default NotFoundPage
