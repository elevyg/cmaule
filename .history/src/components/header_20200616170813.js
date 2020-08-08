import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import Logo from "../assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-600">
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
    <div className="flex text-white hover:text-gray-500">
      <Link to="/quienes-somos">Quines Somos</Link>
      <Link to="/obras">Obras</Link>
      <Link to="/arriendo">Arriendos</Link>
      <Link to="/contacto">Contacto</Link>
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
