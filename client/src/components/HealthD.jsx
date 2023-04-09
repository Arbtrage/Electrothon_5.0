import React from 'react'
import "../Styles/HealthD.css"
import doctor from '../data/doctor.png'
function HealthD() {
    const handleSubmit = () => {

    }
    return(
        <>
            <main className='table' id='hd-main'>
                <div className="hd__box-1">
                    
                    <img src={doctor} alt="" srcset="" />
                </div>
                <div className="hd__box-2">
                    <h1 className="cred-heading" style={{color: '#36454F'}}>
                        Fill out this form
                    </h1>
                    <p style={{textAlign: "left", fontSize: "0.8rem", paddingLeft: "0.3rem"}}> Fill your medical details here properly</p>

                    <form className="main-content">
                        <span className="healthD-form">
                            <h3 className='Labels'>Age: </h3>
                            <input type="text" name="age" placeholder= "Enter your Age" id="" />
                        </span>
                        <span className="healthD-form">
                            <h3 className='Labels'>Weight: </h3>
                            <input type="text" name="age" placeholder= "Enter your Weight" id="" />
                        </span>
                        <span className="healthD-form">
                            <h3 className='Labels'>Gender: </h3>
                            <input type="text" name="age" placeholder= "Enter your Gender" id="" />
                        </span>
                        <span className="healthD-form">
                            <h3 className='Labels'>Height: </h3>
                            <input type="text" name="age" placeholder= "Enter your Height" id="" />
                        </span>
                        <span className="healthD-form">
                            <h3 className='Labels'>Blood Group: </h3>
                            <input type="text" name="age" placeholder= "Enter your Blood Group" id="" />
                        </span>
                        <span className="healthD-form">
                            <h3 className='Labels'>Disability (If Any): </h3>
                            <input type="text" name="age" placeholder= "Enter your Disability" id="" />
                        </span>
                        <span className='healthD-button'>
                            <button onClick={handleSubmit}>
                                Submit
                            </button>
                        </span>

                    </form>
                </div>
            </main>
        </>
    )
}

export default HealthD;