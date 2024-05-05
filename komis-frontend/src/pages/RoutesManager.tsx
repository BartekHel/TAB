import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import App from './MainPage'
import Login from './Login'
import Register from './Register'
import CarDetails from './CarDetails'

const RoutesManager = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/carDetails/:carId" element={<CarDetails/>}/>
      </Routes>
    </div>
  )
}

export default RoutesManager
