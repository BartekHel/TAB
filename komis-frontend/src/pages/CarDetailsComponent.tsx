import React, { useContext, useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
import '../css/CarDetails.css'
import Filters from '../components/carDetails/Filters'
import { useNavigate, useParams } from 'react-router-dom'
import ApiClient from '../service/ApiClient'
import "../css/Navbar.css";
import CarDetails from '../entitiy/CarDetail'
import userContext from '../PageInfo'

const apiClient=new ApiClient();

const CarDetailsComponent = () => {
  const {carId}=useParams();
  const [color, setColor] = useState({name:'black',price:0}); 
  const [engine, setEngine] = useState({name:'petrol 1.6',price:0}); 
  const [upholstery, setUpholstery] = useState({name:'Fabric upholstery',price:0});
  const [car, setCar] = useState<CarDetails>({} as CarDetails);
  const {userId} = useContext(userContext) as {userId: number};
  const navigate=useNavigate();
  const totalCost=car.price+color.price+engine.price+upholstery.price;
  
  useEffect(()=>{
    apiClient.getCarDetails(parseInt(carId!)).then((car)=>{
      setCar(car);
    });
  },[]);

  const handleBuy=()=>{
    //user_id showroom_id and delaer_id are hardcoded to 1
    apiClient.buyCar(parseInt(carId!),totalCost,`${color.name},${engine.name},${upholstery.name}`,1,1,1)
  .then((response)=>{
    if(response.data.success){
      alert('Car bought successfully');
      setTimeout(()=>navigate('/'),300);
    }
    else{
      alert('Error buying car');
    }
  }
  );
    console.log('Car ID:', carId); console.log('Total Cost:', totalCost); console.log('Color:', color); console.log('Engine:', engine); console.log('UserId:', userId); console.log('Upholstery:', upholstery);
  }

  return (
  
   
    <div className='wrapper'>
    <div className='inside-wrapper'>
      <div className='spacer'></div>
    {/* <Filters color={color} engine={engine} upholstery={upholstery} 
    colorChange={(c)=>setColor(c)}
    engineChange={(e)=>setEngine(e)}
    upholsteryChange={(u)=>setUpholstery(u)}/> */}


    <div id='car-image-wrapper'>
    <div id="image"></div>
    </div>
    <div className='summary'>
      <p style={{marginBottom:'10px'}}>{`${car.brand} ${car.model}`}</p>
      
      <p>Base Cost <span>{car.price} €</span></p>
      <div className='details'>
        <p><span>color:</span>{color.price==0?` ${color.name} included`:` ${color.name} +${color.price}€`}</p>
        <p><span>engine:</span>{engine.price==0?`${engine.name} included`:` ${engine.name} +${engine.price}€`}</p>
        <p><span>upholstery:</span>{upholstery.price==0?` ${upholstery.name} included`:`${upholstery.name} +${upholstery.price}€`}</p>
      </div>

      <p style={{marginTop:'20px'}}>Total Cost <span>{totalCost} €</span></p>
      <button onClick={handleBuy}>Buy</button>
    </div>
      
    </div>
    </div>
    
  )
}

export default CarDetailsComponent