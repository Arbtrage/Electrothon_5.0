import {React, useState} from 'react';
import "../Styles/Medic.css"

function Medic(){
    // TRUE - > AddPrescription
    const [mode, setMode] = useState(true);
    const [images, setImages] = useState(null);
    
    const onImageChange = (e) => {
        setImages([...e.target.value]);
        if(images !== null){
            document.getElementById("fin-label").innerHTML = e.target.value +" uploaded ";
        }
    }

    const handleRender = (e) => {
        if(e.target.name === "prescription")
            setMode(true);
        else
            setMode(false);
    }
    
    return(
        <>
            <main className="table" id = "medic-main">
                <button name='prescription' className="render-btn" onClick={handleRender}>
                    Add Prescription
                </button>
                <button name='gen-report' className="render-btn" onClick={handleRender}>
                    Generate Report
                </button>
                {
                    mode ? 
                        <div className="img-input">
                            <input type="file" id="file-input" name="file-input" accept="image/*" onChange={onImageChange} />
                            <label htmlFor="file-input" id="file-label" >
                                <p  id="fin-label" style={{display:"block" , margin: "auto" , padding: "25px"}}>
                                    Upload Your prescription here!
                                </p>
                                
                            </label>
                            
                            

                        </div>
                        
                        : <p>bhello</p>
                 }
            </main>
        </>
    )
}

export default Medic;