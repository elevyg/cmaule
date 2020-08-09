/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "../assets/css/layout.css"
import { useViewportScroll, motion } from "framer-motion"

const Layout = ({ children }) => {
  const { scrollY } = useViewportScroll()
  return (
    <motion.div>
      <Navbar scrollYProgress={scrollY} />
      <div>
        <main className="h-auto ">{children}</main>
        <footer>© Derechos reservados {new Date().getFullYear()}</footer>
      </div>
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
