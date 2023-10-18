import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Homepage from './components/homepage'

function App() {

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App      