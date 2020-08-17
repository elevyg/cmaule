import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../assets/css/layout.css"
import * as LogoIcon from "../assets/logo.svg"
import { useViewportScroll, motion } from "framer-motion"

const Navbar = () => {
  const [onHamburgerClick, setOnHamburgerClick] = useState(false)

  const [scrolled, setScrolled] = useState()
  const { scrollY } = useViewportScroll()
  scrollY.onChange(setScrolled)

  return (
    <motion.header
      className="flex-col w-full"
      style={
        scrolled > 100
          ? { backgroundColor: "#000066" }
          : { backgroundColor: "transparent" }
      }
      id="navbar"
    >
      <div className="flex justify-between items-end w-full">
        <Logo />
        <div className="hidden lg:flex text-white justify-center mb-8 mr-5 text-xl">
          <LinkList />
        </div>
        <div className=" flex lg:hidden text-white justify-center mb-8 mr-5 text-xl">
          <button onClick={() => setOnHamburgerClick(prev => !prev)}>
            <i class="fas fa-bars outline-none focus:outline-none"></i>
          </button>
        </div>
      </div>
      <div className="lg:hidden text-white">
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

const LinkList = () => {
  return (
    <>
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
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar