import React from "react";
import "../Styles/Dashboard.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <nav>
        <div className="logo-name">
          <div className="logo-image">
            {/* <!--<img src="images/logo.png" alt="">--> */}
          </div>

          <span className="logo_name">Ywkit</span>
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <Link to="/dashboard">
                  <span className="link-name">Dahsboard</span>
                </Link>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-files-landscapes"></i>
                <span className="link-name">Medical Condition</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-chart"></i>
                <span className="link-name">Allergies</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-thumbs-up"></i>
                <span className="link-name">Medical History</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-comments"></i>
                <Link to="/addmembers">
                  <span className="link-name">Add Members</span>
                </Link>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-share"></i>
                <Link to="/addmedicine">
                  <span className="link-name">Add Medicine</span>
                </Link>
              </a>
            </li>
          </ul>

          <ul className="logout-mode">
            <li>
              <a href="#">
                <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </a>
            </li>

            <li className="mode">
              <a href="#">
                <i className="uil uil-moon"></i>
                <span className="link-name">Dark Mode</span>
              </a>

              <div className="mode-toggle">
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
