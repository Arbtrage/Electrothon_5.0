import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Myprofile from './pages/MyProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AddMedicine from './pages/AddMedicine';
import AddFamilyMember from './pages/AddFamilyMember';
import Allergies from './pages/Allergies';
import Medicalhistory from './pages/Medic';
import HealthDetails from './pages/HealthDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={(<Home />)} />
                <Route path="/login" element = {(<Login />)} />
                <Route path="/signup" element = {(<Signup />)} />
                <Route path="/dashboard" element = {(<UserDashboard />)} />
                <Route path="/addmedicine" element = {(<AddMedicine />)} />
                
                <Route path= "/HealthDetails" element = {(<HealthDetails/>)} />
                <Route path ="/allergies" element= {(<Allergies/>)} />
                <Route path="/MedicalHistory" element={(<Medicalhistory/>)} />
                <Route path="/addmembers" element = {(<AddFamilyMember />)} />
              </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
