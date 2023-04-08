import React from "react";
import "../Styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import Stimulus from "../components/Stimulus";
import Profile from "../components/Profile";
function UserDashboard() {
  return (
    <div>
      <Sidebar />
      <Profile />
      <h2 style={{textAlign: "left", marginLeft: "260px", marginTop: "50px"}}>Stimulus</h2>
      <Stimulus />
    </div>
  );
}

export default UserDashboard;
