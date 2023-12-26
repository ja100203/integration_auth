import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'


function Register() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Signup />} />
    </Routes>
    </Router>

    </div>
  )
}

export default Register
