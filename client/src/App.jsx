import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Myprofile from './pages/MyProfile';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={(<Home />)} />
                <Route path="/myprofile" element={(<Myprofile /> )} />
              </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
