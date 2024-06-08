import { useContext, useEffect, useState } from 'react'
import '../css/CarDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import ApiClient from '../service/ApiClient'
import "../css/Navbar.css";
import CarDetails from '../entitiy/CarDetail'
import userContext from '../PageInfo'
import Filters from '../components/carDetails/Filters';

const apiClient=new ApiClient();

const CarDetailsComponent = () => {
  const {carId}=useParams();
  const [car, setCar] = useState<CarDetails>({} as CarDetails);
  const [totalCost, setTotalCost] = useState<number>();
  const [image, setImage] = useState<string>("");
  const {userId, role} = useContext(userContext) as {userId: number, role:string};
  const [ clientToken, setClientToken ] = useState("");
  const [ showroomId, setShowroomId ] = useState(1);
  const navigate=useNavigate();
  
  useEffect(()=>{
    apiClient.getCarDetails(parseInt(carId!)).then((car)=>{
      setCar(car);
      setTotalCost(car.price);
    });
    apiClient.getImage(1).then(image=>setImage(image));

    if(role=="DEALER")
    {
      apiClient.getDealerShowroom(userId).then((resp)=>{
        setShowroomId(resp);
      })
    }
  },[]);

  const handleBuy=()=>{
    if(!userId) navigate(`/login`);

    apiClient.buyCar(totalCost!,userId,1,showroomId,parseInt(carId!))
  .then((response)=>{
    if(response.data.success){
      alert('Car bought successfully');
      setTimeout(()=>navigate('/'),300);
    }
    else{
      if (!user.logged)
        navigate(`/login`);
      else
        alert('Error buying car');
    }
  }
  );
  }

  const handleBuyForClient=()=>{
   if(!userId) navigate(`/login`);
   
  apiClient.buyCarByDealer(totalCost!,clientToken,userId,showroomId,parseInt(carId!)) 
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
  }

  const handleOrderForShowroom=()=>{
    if(!userId) navigate(`/login`);
    apiClient.PutVehicleShowroom(parseInt(carId!),showroomId)
   .then((response)=>{
     if(true){
       alert('Car order to showroom successfully');
       setTimeout(()=>navigate('/'),300);
     }
     else{
       alert('Error ordering car');
     }
   }
   );
   }

  return (
    <div className='wrapper'>
    <div  className='inside-wrapper'>
    
    <div id='car-image-wrapper'> 
    <div id="image"></div>
     <img  width='100%'  height='100%'  background-size= 'cover'
     src={`data:image/png;base64,${image}`}/>
    </div>
    <section>
    <Filters modificationChange={(price)=>setTotalCost(car.price+price)}/>
    <div className='summary'>
      <p style={{marginBottom:'10px'}}>{`${car.brand} ${car.model}`}</p>
      <p style={{marginTop:'20px',fontSize:'20px'}}>Base Cost <span>{car.price} €</span></p>
      <p>Total Cost <span>{totalCost} €</span></p>
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
      {
        role=="DEALER" &&
        <button onClick={handleOrderForShowroom}>Order car for showroom</button>
      }
      
      
    </div>
    </section>
      
    </div>
    </div>
    
  )
}

export default CarDetailsComponent