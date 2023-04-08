import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Myprofile from './pages/MyProfile';
import UserDashboard from './pages/UserDashboard';
import AddFamilyMember from './pages/AddFamilyMember';
import AddMedicine from './pages/AddMedicine';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={(<Home />)} />
                <Route path="/myprofile" element={(<Myprofile /> )} />
                <Route path="/dashboard" element={(<UserDashboard /> )} />
                <Route path="/addmembers" element={(<AddFamilyMember /> )} />
                <Route path="/addmedicine" element={(<AddMedicine /> )} />
              </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
