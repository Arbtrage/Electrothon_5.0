import React, { useState, useEffect } from "react";
import "../Styles/table.css";

function MedicineTable() {
  const [Medicine, setMedicine] = useState([]);

  //Add Medicine
  const [medicineName, setmedicineName] = useState("");
  const [dosage, setdosage] = useState("");
  const [frequency, setfrequency] = useState("");

  useEffect(() => {
    async function fetchMedicine() {
      try {
        // const medicine = await axios.get("/user/getMedicines");
        const medicine = fetch('http://localhost:5000/api/user/getMedicines', {
            method: 'GET'
          })
          .then(response => response.json())
          .then(data => console.log(medicine))
          .catch(error => console.error(error));
        setMedicine(medicine.data);
      } catch (error) {
        console.log(error);
      }
    }
  });

  //Add Medicine
  const addMedicine = async () => {
    e.preventDefault();
    const medicine = {
      name: medicineName,
      dosage,
      frequency,
    };
    console.log(medicine);
    try {
      // setloading(true);
      fetch("http://localhost:5000/api/user/addMedicine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(medicine),
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
      //   setTimeout(() => toast.success(" Successful"), 1050);
      //   setTimeout(() => navigate("/login"), 1000);

      setmedicineName("");
      setdosage("");
      setfrequency("");
    } catch (error) {
      console.log(error);
      // setloading(false);
      toast.error(error);
    }
  };

  return (
    <div>
      <main class="table">
        <section class="table__header">
          <h2>Add Medicine</h2>
          <div class="input-group">
            <input type="search" placeholder="Search Data..." />
            <img src="images/search.png" alt="" />
          </div>
          <div class="export__file">
            <label
              for="export-file"
              class="export__file-btn"
              title="Export File"
            ></label>
            <input type="checkbox" id="export-file" />
            <div class="export__file-options">
              <label>Export As &nbsp; &#10140;</label>
              <label for="export-file" id="toPDF">
                PDF <img src="images/pdf.png" alt="" />
              </label>
              <label for="export-file" id="toJSON">
                JSON <img src="images/json.png" alt="" />
              </label>
              <label for="export-file" id="toCSV">
                CSV <img src="images/csv.png" alt="" />
              </label>
              <label for="export-file" id="toEXCEL">
                EXCEL <img src="images/excel.png" alt="" />
              </label>
            </div>
          </div>
        </section>
        <section class="table__body">
          <table>
            <thead>
              <tr>
                <th>
                  {" "}
                  Id <span class="icon-arrow"></span>
                </th>
                <th>
                  {" "}
                  Name <span class="icon-arrow"></span>
                </th>
                <th>
                  {" "}
                  Dosage <span class="icon-arrow"></span>
                </th>
                <th>
                  {" "}
                  Frequency <span class="icon-arrow"></span>
                </th>
                {/* <th> Status <span class="icon-arrow"></span></th>
                        <th> Amount <span class="icon-arrow"></span></th> */}
              </tr>
            </thead>
            <tbody>
               {Medicine.map((key) => (
                    <tr>
                    {/* <td> 1 </td> */}
                    <td>
                      {" "}
                      {key.name}
                    </td>
                    <td> {key.dosage} </td>
                    <td> {key.frequency} </td>
                  </tr>
               ))} 
              <tr>
                <td> 1 </td>
                <td>
                  {" "}
                  <img src="images/Zinzu Chan Lee.jpg" alt="" />
                  Zinzu Chan Lee
                </td>
                <td> Seoul </td>
                <td> 17 Dec, 2022 </td>
                {/* <td>
                            <p class="status delivered">Delivered</p>
                        </td>
                        <td> <strong> $128.90 </strong></td> */}
              </tr>
              <tr>
                <td> 2 </td>
                <td>
                  <img src="images/Jeet Saru.jpg" alt="" /> Jeet Saru{" "}
                </td>
                <td> Kathmandu </td>
                <td> 27 Aug, 2023 </td>
                {/* <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>$5350.50</strong> </td> */}
              </tr>
              <tr>
                <td> 3</td>
                <td>
                  <img src="images/Sonal Gharti.jpg" alt="" /> Sonal Gharti{" "}
                </td>
                <td> Tokyo </td>
                <td> 14 Mar, 2023 </td>
                {/* <td>
                            <p class="status shipped">Shipped</p>
                        </td>
                        <td> <strong>$210.40</strong> </td> */}
              </tr>
              <tr>
                <td> 4</td>
                <td>
                  <img src="images/Alson GC.jpg" alt="" /> Alson GC{" "}
                </td>
                <td> New Delhi </td>
                <td> 25 May, 2023 </td>
                {/* <td>
                            <p class="status delivered">Delivered</p>
                        </td>
                        <td> <strong>$149.70</strong> </td> */}
              </tr>
              <tr>
                <td> 5</td>
                <td>
                  <img src="images/Sarita Limbu.jpg" alt="" /> Sarita Limbu{" "}
                </td>
                <td> Paris </td>
                <td> 23 Apr, 2023 </td>
                {/* <td>
                            <p class="status pending">Pending</p>
                        </td>
                        <td> <strong>$399.99</strong> </td> */}
              </tr>
              {/* <tr>
                        <td> 6</td>
                        <td><img src="images/Alex Gonley.jpg" alt="" /> Alex Gonley </td>
                        <td> London </td>
                        <td> 23 Apr, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>$399.99</strong> </td>
                    </tr>
                    <tr>
                        <td> 7</td>
                        <td><img src="images/Alson GC.jpg" alt="" /> Jeet Saru </td>
                        <td> New York </td>
                        <td> 20 May, 2023 </td>
                        <td>
                            <p class="status delivered">Delivered</p>
                        </td>
                        <td> <strong>$399.99</strong> </td>
                    </tr>
                    <tr>
                        <td> 8</td>
                        <td><img src="images/Sarita Limbu.jpg" alt="" /> Aayat Ali Khan </td>
                        <td> Islamabad </td>
                        <td> 30 Feb, 2023 </td>
                        <td>
                            <p class="status pending">Pending</p>
                        </td>
                        <td> <strong>$149.70</strong> </td>
                    </tr>
                    <tr>
                        <td> 9</td>
                        <td><img src="images/Alex Gonley.jpg" alt="" /> Alson GC </td>
                        <td> Dhaka </td>
                        <td> 22 Dec, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>$249.99</strong> </td>
                    </tr> */}
            </tbody>
          </table>
        </section>
      </main>
      <form
        onSubmit={addMedicine}
        className="family-form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "rgb(3, 201, 215)",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          borderRadius: "20px",
          width: "40%",
          margin: "20px 0 0 700px",
        }}
      >
        <h2>Add a Medicine</h2>
        <input
          type="text"
          name="company"
          required="required"
          placeholder="Medicine"
          value={medicineName}
          onChange={(e) => {
            setmedicineName(e.target.value);
          }}
        />
        <input
          type="text"
          name="Dosages"
          required="required"
          placeholder="Dosages"
          value={dosage}
          onChange={(e) => {
            setdosage(e.target.value);
          }}
        />
        <input
          type="text"
          name="frequency"
          required="required"
          placeholder="frequency"
          value={frequency}
          onChange={(e) => {
            setfrequency(e.target.value);
          }}
        />
        <input type="button" value="Save" />
      </form>
    </div>
  );
}

export default MedicineTable;
