import React from "react"
import { NavLink } from "react-router-dom"
import { PATH } from "../constants/paths"

const Header = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
        
          <NavLink to={PATH.HOME} className="navbar-brand" >
            <span>Ecotrics</span>
                </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink to={PATH.HOME} className="nav-link" >
                  Home <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={PATH.PRODUCT} className="nav-link" >
                    Product <span className="sr-only"></span>
                  </NavLink>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  {" "}
                  Mouse{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  {" "}
                  Keyboard{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  {" "}
                  Monitor{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  CPU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  VGA
                </a>
              </li>
            </ul>
            <div className="user_option-box">
              <a>
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
              <a>
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </a>
              <a>
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
