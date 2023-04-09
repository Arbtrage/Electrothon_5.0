import React from 'react'
import "../Styles/Login.css"
import { Link } from 'react-router-dom';
import MedicalServicesOutlinedIcon from '../assets/first-aid-kit.png';
import logo from "../assets/login-logo.png"

function Login() {
    const handleSubmit = () => {

    }

    return(
        <>
            <div className="login-page">
        
            
            <div className="login-container">
                <div className="login__box-1">
                    <div className="login__box-content">
                        <span className='login-line'>
                            <img src={MedicalServicesOutlinedIcon} alt="" srcset="" />
                            <h1 className="cred-heading" id='name-heading' style={{paddingLeft: "1rem"}}>YWKIT</h1>
                            
                        </span>
                        <span className="login-line" style={{marginTop: "20px"}}>
                        <h1 className="cred-heading" >We're here to</h1>

                        </span>

                        <span className="login-line">
                            <h1 id="remind" className="cred-heading">Remind you</h1>
                        </span>
                        <span className="login-line">
                            <h1 className="cred-heading" >about your Health</h1>
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
                            <span className="box2-right" style={{alignItems: "flex-start"}}>
                                <span className="SiteName">
                                    <h1 className="heading" style={{textAlign: "left", paddingBottom: "0px"}}>
                                        Ywkit
                                    </h1>
                                </span>
                                <span className="login__details" style={{fontSize: "0.8rem", textAlign:"left"}}>
                                    Enter your credentials to access your dashboard!
                                </span>
                            </span>
                        </span>
                        <span className="login-heading">
                            <h1 className="heading" style={{margin: "1rem"}}>
                                Login
                            </h1>
                        </span>
                        <div className="gettingCreds" >
                            <form>
                                <input type="email" name='email' placeholder='Enter your eMailID' />
                                <input type="password" name='password' placeholder='Enter your Password' />
                                <button onClick={handleSubmit} className='login-btn'>
                                    Login
                                </button>

                            </form>
                        </div>
                        <span style={{paddingTop: "11px"}}>
                            Are you a new visitor?
                            <Link to="/signup"> sign up</Link>
                        </span>

                    </div>
                </div>
            </div>
            </div>
        </>
    )

}

export default Login; 