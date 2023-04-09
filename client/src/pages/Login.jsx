import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import { Link,useNavigate } from "react-router-dom";
import MedicalServicesOutlinedIcon from "../assets/first-aid-kit.png";
import logo from "../assets/login-logo.png";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Axios from "../Api/Axios";
import { DataObject } from "@mui/icons-material";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const user = {
      email,
      password,
    };
    console.log(user);
    try {
      // setloading(true);
    //   const  data = await Axios.post("/api/auth/login", user);
      const data =fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      // setloading(false);
      console.log(user)
      localStorage.setItem('currentUser', JSON.stringify(data));
      window.location.href='/dashboard';

      
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
        <div className="login-container">
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
                <h1 id="remind" className="cred-heading">
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
                  Login
                </h1>
              </span>
              <div className="gettingCreds">
                <form action='/dashboard'>
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
                    placeholder="Enter your Password"
                    value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  />
                  <button  className="login-btn">
                    Login
                  </button>
                </form>
              </div>
              <span style={{ paddingTop: "11px" }}>
                Are you a new visitor?
                <Link to="/signup"> sign up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
