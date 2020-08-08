import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import Logo from "../assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="bg-darkBlue flex justify-between items-end">
    <div>
      <Link
        to="/"
        className="flex h-auto justify-start items-center text-gray-100"
      >
        <Logo className="h-40 fill-current text-white mt-3" />
        <div>
          <h3 className="text-xl font-bold">Constructora</h3>
          <h1 className="text-4xl ">Mauricio Levy</h1>
        </div>
      </Link>
    </div>
    <div className="flex text-white justify-center mb-16 mr-5 text-xl">
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
