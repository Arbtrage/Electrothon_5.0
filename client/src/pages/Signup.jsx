import React from 'react'
import "../Styles/Login.css"
import { Link } from 'react-router-dom';
import MedicalServicesOutlinedIcon from '../assets/first-aid-kit.png';
import logo from "../assets/login-logo.png"

function Signup() {
    const handleSubmit = () => {

    }

    return(
        <>

            <div className="login-container">
                <div className="login__box-1">
                    <div className="login__box-content">
                        <span className='login-line'>
                            <img src={MedicalServicesOutlinedIcon} alt="" srcset="" />
                            <h1 className="cred-heading" style={{paddingLeft: "1rem"}}>YWKIT</h1>
                            
                        </span>
                        <span className="login-line" style={{marginTop: "20px"}}>
                        <h1 className="cred-heading" >We're here to</h1>

                        </span>

                        <span className="login-line">
                            <h1 className="cred-heading" style={{fontSize: "3.0rem", color: "black"}}>Remind you</h1>
                        </span>
                        <span className="login-line">
                            <h1 className="cred-heading" >for your Health</h1>
                        </span>
                    </div>
                </div>
                <div className="login__box-2">
                    <div className="login-box-2-container">
                        <span className="logoNdHead">
                            <span className="box2-left">
                                <img src={logo} alt="" srcset="" />
                            </span>
                            <span className="box2-right">
                                <span className="SiteName">
                                    <h1 className="heading" style={{textAlign: "left", paddingBottom: "0px"}}>
                                        Ywkit
                                    </h1>
                                </span>
                                <span className="login__details" style={{fontSize: "0.8rem"}}>
                                    Enter your credentials to access your dashboard!
                                </span>
                            </span>
                        </span>
                        <span className="login-heading">
                            <h1 className="heading" style={{margin: "1rem"}}>
                                Signup
                            </h1>
                        </span>
                        <div className="gettingCreds" >
                            <form>
                                <input type="name" name='name' placeholder='Enter your Full Name' />
                                <input type="email" name='email' placeholder='Enter your eMailID' />
                                <input type="password" name='password' placeholder='Create your Password' />
                                <button onClick={handleSubmit} className='login-btn'>
                                    Sign In
                                </button>

                            </form>
                        </div>
                        <span style={{paddingTop: "11px"}}>
                            Already a visitor?
                            <Link to="/login"> log in</Link>
                        </span>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Signup;