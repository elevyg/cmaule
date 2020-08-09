import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import "../assets/css/layout.css"
import Logo from "../assets/logo.svg"
import { useViewportScroll, motion, useTransform } from "framer-motion"

const Navbar = ({}) => {
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0.1], [1])
  scrollYProgress.onChange(setProgress)

  return (
    <motion.header
      style={{ backgroundColor: `rgba(0,0,121,${opacity})` }}
      className="flex justify-between items-end w-full "
      id="navbar"
    >
      <div>
        <Link
          to="/"
          className="flex h-auto justify-start items-center text-gray-100"
        >
          <Logo className="h-20 fill-current text-white mt-3" />
          <div>
            <h3 className="text-xl font-bold">Constructora</h3>
            <h1 className="text-4xl ">Mauricio Levy</h1>
          </div>
        </Link>
      </div>

      <div className="flex text-white justify-center mb-8 mr-5 text-xl">
        <Link to="/quienes-somos" className="hover:text-gray-500 mx-3">
          Quines Somos
        </Link>
        <Link to="/obras" className="hover:text-gray-500 mx-3">
          Obras
        </Link>
        <Link to="/arriendos" className="hover:text-gray-500 mx-3">
          Arriendos
        </Link>
        <Link to="/contacto" className="hover:text-gray-500 mx-3">
          Contacto
        </Link>
      </div>
    </motion.header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
