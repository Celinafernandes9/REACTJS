import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const Navbar = (props) => {
 const NavLinkStyles = ({isActive})=>{
  return{
    fontweight : isActive ? 'bolder' : 'normal',
    color: isActive ? '#019875': "#101010",
    textDecoration : isActive ? 'underline': 'none',
  }
 }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {/* {props.title} */}Navbar
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" style={NavLinkStyles} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={NavLinkStyles} to="/about">
                    {/* {props.aboutText} */}About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={NavLinkStyles} to="/product">
                   Product
                  </NavLink>
                </li>
              </ul>
             
              {/* <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"/>
                <label className="custom-control-label" htmlFor="customSwitch1">
                  Enable dark mode
                </label>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

