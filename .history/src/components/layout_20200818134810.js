/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "../css/layout.css"
import ContactInfo from "./contactInfo"

const Layout = ({ children, page }) => {
  return (
    <div className="">
      <Navbar page={page} />
      <div>
        <main className="h-auto ">{children}</main>
        <footer className="h-64 bg-custom-gray flex justify-around items-center text-white">
          © Derechos reservados {new Date().getFullYear()}
          <ContactInfo footer={true} />
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
