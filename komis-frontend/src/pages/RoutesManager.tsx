import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import App from './MainPage'
import Login from './Login'
import Register from './Register'

const RoutesManager = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default RoutesManager
