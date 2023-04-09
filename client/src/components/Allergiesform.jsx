
import React from 'react'
import "../Styles/table.css";


function Allergies() {
  return (
    <div>
      <main class="table">
        <section class="table__header">
            <h2>Patient Alergies</h2>
            <div class="input-group">
                <input type="search" placeholder="Search Data..." />
                <img src="images/search.png" alt="" />
            </div>
            <div class="export__file">
                <label for="export-file" class="export__file-btn" title="Export File"></label>
                <input type="checkbox" id="export-file" />
                <div class="export__file-options">
                    <label>Export As </label>
                    <label for="export-file" id="toPDF">PDF <img src="images/pdf.png" alt="" /></label>
                    <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt="" /></label>
                    <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt="" /></label>
                    <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt="" /></label>
                </div>
            </div>
        </section>
        <section class="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Id <span class="icon-arrow"></span></th>
                        <th> Allergy Name <span class="icon-arrow"></span></th>
                        <th> Severity <span class="icon-arrow"></span></th>
                        {/* <th> Phone Number <span class="icon-arrow"></span></th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1 </td>
                        <td> <img src="images/Zinzu Chan Lee.jpg" alt="" />Lactose Intolerense</td>
                        <td> High </td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td><img src="images/Jeet Saru.jpg" alt="" /> Rhinitis </td>
                        <td> Low </td>
                    </tr>
                    <tr>
                        <td> 3</td>
                        <td><img src="images/Sonal Gharti.jpg" alt="" /> Sinusitis </td>
                        <td> Medium </td>
                    </tr>
                    <tr>
                        <td> 4</td>
                        <td><img src="images/Alson GC.jpg" alt="" /> Skin Allergies </td>
                        <td> Medium </td>
                    </tr>
                    <tr>
                        <td> 5</td>
                        <td><img src="images/Sarita Limbu.jpg" alt="" /> Eye Allergies </td>
                        <td> Low </td>
                    </tr>
                    
                </tbody>
            </table>
        </section>
       </main>
       <form className='family-form' style={{
            display: 'flex', flexDirection: 'column', gap: '1rem',
            backgroundColor: 'rgb(184, 180, 180)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
            borderRadius: '20px',
            width:'40%',
            margin:'20px 0 0 700px'
          }}>
            <h2>Any other Allergy you want to add?</h2>
            <input
              type="text"
              name="name"
              required="required"
              placeholder='Enter Allergy Name'
            />
            <span style={{display: "flex", padding: "2px"}}>
                <p style={{padding:"0px 25px"}}>Severity</p>
            <input
              type="radio"
              name="severity"
              required="required"
              value="High"
              style={{padding: "3px 4px"}}
            />  High
            <input
              type="radio"
              name="severity"
              required="required"
              value="Medium"
              style={{padding: "3px 4px"}}
            />Medium
            <input
              type="radio"
              name="severity"
              required="required"
              value="Low"
              style={{padding: "3px 4px"}}
            /> Low
            </span>
            
            <input type="button" value="Save"  />
        </form>
    </div>
  )
}

export default Allergies;
