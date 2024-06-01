import { useContext, useEffect, useState } from 'react'
import '../css/CarDetails.css'
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
  const [image, setImage] = useState<string>("");
  const {userId, role} = useContext(userContext) as {userId: number, role:string};
  const [ clientToken, setClientToken ] = useState("");
  const navigate=useNavigate();
  const totalCost=car.price+color.price+engine.price+upholstery.price;
  
  useEffect(()=>{
    apiClient.getCarDetails(parseInt(carId!)).then((car)=>{
      setCar(car);
    });
    apiClient.getImage(1).then(image=>setImage(image));
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

  const handleBuyForClient=()=>{
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
    <div  className='inside-wrapper'>

    <div id='car-image-wrapper'> 
    <div id="image"></div>
     <img  width='100%'  height='100%'  background-size= 'cover'
     src={`data:image/png;base64,${image}`}/>
    </div>
    <div className='summary'>
      <p style={{marginBottom:'10px'}}>{`${car.brand} ${car.model}`}</p>
      
      <div className='details'>
        {car.modifications&&
        <>
        <p><span>modifications:</span></p>
        {car.modifications.split(",")?.map((mod)=><p>{mod}</p>)}
        </>
        } 
      </div>

      <p style={{marginTop:'20px'}}>Total Cost <span>{totalCost} €</span></p>
      {
        role=="DEALER" &&(
          <div>
          
            <input 
                name="ClientToken" 
                placeholder="Client Token"
                onChange={(e) => setClientToken(e.target.value)}/>
          </div>
        )
      }
      {
        role=="DEALER" ?
        <button onClick={handleBuyForClient}>Buy for client</button>
        :<button onClick={handleBuy}>Buy</button>
      }
      
    </div>
      
    </div>
    </div>
    
  )
}

export default CarDetailsComponent