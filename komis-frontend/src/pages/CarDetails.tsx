import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../css/CarDetails.css'
import Filters from '../components/carDetails/Filters'
import { useParams } from 'react-router-dom'
import ApiClient from '../service/ApiClient'

const apiClient=new ApiClient();

const CarDetails = () => {
  
  const {carId}=useParams();
  const [color, setColor] = useState(''); 
  const [engine, setEngine] = useState(''); 
  const [upholstery, setUpholstery] = useState(''); 

  const handleBuy=()=>{
    apiClient.buyCar(parseInt(carId!),color,engine,upholstery);
    console.log('Buying car with color:',color,'engine:',engine,'upholstery:',upholstery,'id:',carId);
  }

  return (
    <div className='wrapper'>
    <Filters color={color} engine={engine} upholstery={upholstery} 
    colorChange={(c)=>setColor(c)}
    engineChange={(e)=>setEngine(e)}
    upholsteryChange={(u)=>setUpholstery(u)}/>

    <div id='car-image-wrapper'>
    <div id="image"></div>
    </div>
    <div className='summary'>
      <p style={{marginBottom:'10px'}}>Toyota Hybrid Auris</p>
      
      <p>Base Cost <span>70 000 €</span></p>
      <div className='details'>
        <p>color +2000€</p>
        <p>engine included</p>
        <p>upholstery +1000 €</p>
      </div>

      <p style={{marginTop:'20px'}}>Total Cost <span>90000 €</span></p>
      <button onClick={handleBuy}>Buy</button>
    </div>
      
    </div>
  )
}

export default CarDetails