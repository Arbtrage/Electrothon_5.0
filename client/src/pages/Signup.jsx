import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
// import { Link } from 'react-router-dom';
import MedicalServicesOutlinedIcon from "../assets/first-aid-kit.png";
import logo from "../assets/login-logo.png";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../Api/Axios";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { eventNames } from "../../../server/models/userFamily.model";

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      userName: name,
      email,
      password,
      googleWala: false,
    };
    console.log(user);
    try {
      // setloading(true);
      fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    //   const result = await fetch("http://localhost:5000/api/auth/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(user),
    //   });
    //   console.log(result.json());
      setTimeout(() => toast.success(" Successful"), 1050);
      setTimeout(() => navigate("/login"), 1000);

      setname("");
      setpassword("");
      setemail("");
    } catch (error) {
      console.log(error);
      // setloading(false);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container" style={{ height: "auto" }}>
          <div className="login__box-1">
            <div className="login__box-content">
              <span className="login-line">
                <img src={MedicalServicesOutlinedIcon} alt="" srcset="" />
                <h1
                  className="cred-heading"
                  id="name-heading"
                  style={{ paddingLeft: "1rem" }}
                >
                  YWKIT
                </h1>
              </span>
              <span className="login-line" style={{ marginTop: "20px" }}>
                <h1 className="cred-heading">We're here to</h1>
              </span>

              <span className="login-line">
                <h1 className="cred-heading" id="remind">
                  Remind you
                </h1>
              </span>
              <span className="login-line">
                <h1 className="cred-heading">about your Health</h1>
              </span>
            </div>
          </div>
          <div className="login__box-2">
            <div className="login-box-2-container">
              <span className="logoNdHead">
                <Link to="/">
                  <span className="box2-left">
                    <img src={logo} alt="" srcset="" />
                  </span>
                </Link>
                <span
                  className="box2-right"
                  style={{ alignItems: "flex-start" }}
                >
                  <span className="SiteName">
                    <h1
                      className="heading"
                      style={{ textAlign: "left", paddingBottom: "0px" }}
                    >
                      Ywkit
                    </h1>
                  </span>
                  <span
                    className="login__details"
                    style={{ fontSize: "0.8rem", textAlign: "left" }}
                  >
                    Enter your credentials to access your dashboard!
                  </span>
                </span>
              </span>
              <span className="login-heading">
                <h1 className="heading" style={{ margin: "1rem" }}>
                  Signup
                </h1>
              </span>
              <div className="gettingCreds">
                <form onSubmit={handleSubmit}>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your Full Name"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your eMailID"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Create your Password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />

                <button className="login-btn">
                  Sign Up
                </button>

                </form>
              </div>
              <span style={{ paddingTop: "11px" }}>
                Already a visitor?
                <Link to="/login"> log in</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
