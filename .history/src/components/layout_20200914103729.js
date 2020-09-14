/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "../css/layout.css"
import ContactInfo from "./contactInfo"
import { Link } from "gatsby"

const Layout = ({ children, page }) => {
  return (
    <div className="">
      <Navbar page={page} />
      <div>
        <main className="h-auto ">{children}</main>
        <footer className="h-64 bg-custom-gray flex justify-around items-center text-white">
          <div className="flex flex-col items-start">
            © Derechos reservados {new Date().getFullYear()}
            <Link
              to="/trabajaConNosotros"
              className="focus:outline-none font-bold py-2 px-4 rounded mt-3 bg-white text-custom-gray text-base"
            >
              Trabaja con Nosotros
            </Link>
          </div>
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
