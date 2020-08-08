import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import Logo from "../assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-600 flex justify-center">
    <div>
      <Link
        to="/"
        className="flex h-auto justify-start items-center text-gray-100"
      >
        <Logo className="h-40 fill-current  mt-3" />
        <div>
          <h3 className="text-xl">Constructora</h3>
          <h1 className="text-4xl ">Mauricio Levy</h1>
        </div>
      </Link>
    </div>
    <div className="flex text-white justify-center">
      <Link to="/quienes-somos" className="hover:text-gray-500 mx-3">
        Quines Somos
      </Link>
      <Link to="/obras" className="hover:text-gray-500 mx-3">
        Obras
      </Link>
      <Link to="/arriendo" className="hover:text-gray-500 mx-3">
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
