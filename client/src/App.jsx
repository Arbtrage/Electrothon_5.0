import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Myprofile from './pages/MyProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={(<Home />)} />
                <Route path="/myprofile" element={(<Myprofile /> )} />
                <Route path="/login" element = {(<Login />)} />
                <Route path="/signup" element = {(<Signup />)} />
              </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
