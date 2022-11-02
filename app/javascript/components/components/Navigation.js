import React from "react"
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation