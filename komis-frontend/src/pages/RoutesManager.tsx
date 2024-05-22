import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import App from './MainPage'
import Login from './Login'
import Register from './Register'
import CarDetailsComponent from './CarDetailsComponent'
import { UserProvider } from '../PageInfo'
import ServiceOrder from './ServiceOrder'
import ManagerPage from './ManagerPage'
import ServiceOrderSelected from './ServiceOrderSelected'
const RoutesManager = () => {
  return (
    <div>
      <UserProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/managerPanel" element={<ManagerPage/>}/>
        <Route path="/carDetails/:carId" element={<CarDetailsComponent/>}/>
        <Route path="/orderService" element={<ServiceOrder/>}/>
        <Route path="/orderServiceSelected/:carId" element={<ServiceOrderSelected/>}/>
      </Routes>
      </UserProvider>
    </div>
  )
}

export default RoutesManager;
