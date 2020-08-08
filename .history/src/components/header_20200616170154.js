import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import Logo from "../assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-600">
    <Link to="/" className="flex h-auto justify-start items-center">
      <Logo className="h-40 fill-current text-gray-100 mt-3" />
      <div>
        <h3 className="text-xl">Constructora</h3>
        <h1 className="text-4xl ">Mauricio Levy</h1>
      </div>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
