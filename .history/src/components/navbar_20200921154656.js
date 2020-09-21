import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../css/layout.css"
import * as LogoIcon from "../assets/logo.svg"
import { useViewportScroll, motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { COLORES } from "../constants/colors"

const Navbar = ({ page }) => {
  const [onHamburgerClick, setOnHamburgerClick] = useState(false)

  const [scrolled, setScrolled] = useState()
  const { scrollY } = useViewportScroll()
  scrollY.onChange(setScrolled)
  let backgroundColor = COLORES[1]

  return (
    <motion.header
      className="flex flex-col w-full h-auto"
      style={
        scrolled > 16 * 14
          ? { backgroundColor: backgroundColor }
          : { backgroundColor: "transparent" }
      }
      id="navbar"
    >
      <div className="flex justify-between items-end w-full h-full ">
        <Logo />
        <div className="hidden md:flex justify-center mb-8 mr-5 text-l lg:text-xl">
          <LinkList page={page} />
        </div>
        <div className=" flex md:hidden text-white justify-center mb-8 mr-5 text-xl">
          <motion.button
            onClick={() => setOnHamburgerClick(prev => !prev)}
            className="outline-none focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95, color: "#000066" }}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </motion.button>
        </div>
      </div>

      <div className="md:hidden flex flex-grow flex-col  align-end w-full text-center text-lg">
        {onHamburgerClick && <LinkList />}
      </div>
    </motion.header>
  )
}

const Logo = () => (
  <>
    <Link
      to="/"
      className="flex h-auto justify-start items-center text-gray-100"
    >
      <LogoIcon className="h-20 fill-current text-white mt-3" />
      <div>
        <h3 className="text-xl font-bold">Constructora</h3>
        <h1 className="text-4xl ">Mauricio Levy</h1>
      </div>
    </Link>
  </>
)

const LinkList = ({}) => {
  return (
    <div className="flex items-center">
      {/* <Link to="/quienes-somos" className="hover:text-gray-500 mx-3">
        Quines Somos
      </Link> */}
      <Link to="/obras" className="hover:text-gray-500 mx-3 text-white ">
        Obras
      </Link>
      <Link to="/arriendos" className="hover:text-gray-500 mx-3 text-white ">
        Arriendos
      </Link>
      <Link to="/contacto" className="hover:text-gray-500 mx-3 text-white ">
        Contacto
      </Link>
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
