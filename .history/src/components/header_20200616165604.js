import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import Logo from "../assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-600 flex flex-row items-center justify-center">
    <div>
      <Link to="/">
        <Logo className="h-40  fill-current text-white" />
      </Link>
      <div>
        <h3 className="text-xl">Constructora</h3>
        <h1 className="text-3xl">Mauricio Levy</h1>
      </div>
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
