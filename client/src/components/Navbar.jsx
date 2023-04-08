import React from 'react'
import { Link, NavLink } from "react-router-dom";
// import { GiStethoscope } from 'react-icons/gi';

import logo from "../data/logo.png";
import logosvg from "../data/logo.svg";
import sthetoscope from "../data/stethoscope.png";
import down from "../data/upload.svg";
import user from "../data/user.svg";
import tick from "../data/tick.svg";
import store from "../data/store.png";
import doc from "../data/doc.svg";
import dissease from "../data/dissease.png";
import member1 from "../data/1.png";
import member2 from "../data/2.png";
import '../Styles/Home.css'


function Navbar() {
  return (
    <div>
      <header className="header" id="header">
        <div className="nav container">
          <div className="logo">
            <img className="logo-img" src={logosvg} />
            <a href="#" className="nav__logo">
              Y.W.K.T
            </a>
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  Get Started
                </a>
              </li>
              {/* <li className="nav__item">
                <a href="#how" className="nav__link">
                  How?
                </a>
              </li> */}
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact Us
                </a>
              </li>

              <i
                className="bx bx-toggle-left change-theme"
                id="theme-button"
              ></i>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
          <div style={{ display: "flex" }}>
            <Link to="/login" className="button button__header log">
              Log In
            </Link>
            <Link to="/signup" className="button button__header">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
