import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef } from "react"
import "../assets/css/layout.css"
import Logo from "../assets/logo.svg"
import { useElementScroll, motion } from "framer-motion"

const Navbar = ({ siteTitle }) => {
  const ref = useRef()
  const { scrollYProgress } = useElementScroll(ref)
  console.log(scrollYProgress)
  return (
    <div ref={ref}>
      <motion.header
        id="navbar"
        className=" bg-dark-blue flex justify-between items-end w-full "
        style={{ opacity: scrollYProgress.current > 0 ? 0 : 1 }}
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
    </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
