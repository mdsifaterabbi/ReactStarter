import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import AllUser from './Pages/AllUser'
import Card from "./Components/Card"
import SpecificUser from "./Components/SpecificUser"

function App() {
 
  return (
    <div>
      <div>
       
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/alluser" element={<AllUser />} />
            <Route path="/alluser/:id" element={<SpecificUser />} />
          </Routes>
       

      </div>
    </div>
  )
}

export default App
