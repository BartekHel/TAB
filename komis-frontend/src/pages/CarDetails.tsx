import React from 'react'
import Navbar from '../components/Navbar'
import '../css/CarDetails.css'
import Filters from '../components/carDetails/Filters'

const CarDetails = () => {
  return (
    <div className='wrapper'>
       <Navbar counter={34}/>

    <div className='content'>
    <Filters/>
    </div>
    </div>
  )
}

export default CarDetails