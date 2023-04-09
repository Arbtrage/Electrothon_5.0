import React from "react";
import "../Styles/Dashboard.css";
import { Link } from "react-router-dom";
import logo from "../assets/login-logo.png"

function Sidebar() {
  return (
    <div>
      <nav>
        <div className="logo-name">
          <div className="logo-image">
            <img src={logo} alt=""  style={{width: "4rem"}}/>
          </div>

          <span className="logo_name" style={{marginLeft: "0px"}}>Ywkit</span>
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
                <Link to="/dashboard">
                <i className="uil uil-estate"></i>
                  <span className="link-name">Dashboard</span>
                </Link>
            </li>
            <li>
              <Link to={"/healthdetails"}>
                <i className="uil uil-files-landscapes"></i>
                <span className="link-name">Health Details</span>
              </Link>
              
            </li>
            <li>
              <Link to= "/allergies">
                <i className="uil uil-chart"></i>
                <span className="link-name">Allergies</span>
              </Link>
              
            </li>
            <li>
              <Link to = "/medicalhistory">
                <i className="uil uil-thumbs-up"></i>
                <span className="link-name">Medical History</span>
              </Link>
            </li>
            <li>
              
                <Link to="/addmembers">
                <i className="uil uil-comments"></i>
                  <span className="link-name">Add Members</span>
                </Link>
            
            </li>
            <li>
              
                <Link to="/addmedicine">
                <i className="uil uil-share"></i>
                  <span className="link-name">Add Medicine</span>
                </Link>
              
            </li>
          </ul>

          <ul className="logout-mode">
            <li>
              <Link to="/">
              <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </Link>


            </li>

  
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
