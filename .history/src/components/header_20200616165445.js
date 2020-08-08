import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import Logo from "../assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-600 flex">
    <div>
      <Link to="/">
        <Logo className="h-40 m-5 mb-3 fill-current text-white" />
        <h3 className="text-xl">Constructora</h3>
        <h1 className="text-3xl">Mauricio Levy</h1>
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
