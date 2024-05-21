import axios from "axios";
import CarDetails from "../entitiy/CarDetail";
import Vehicle from "../entitiy/Vehicle";



export const axiosInstance= axios.create({
     baseURL: "http://localhost:8080/car-shop",
  });

  class ApiClient{
    baseURL:string= "http://localhost:8080/car-shop";
    constructor(){        
      }

    buyCar=(vehicle_id:number,price:number,modifications:string,client_id:number,showroomId:number,dealer_id:number)=>{
       return axiosInstance.post(this.baseURL+'/orders/createorder',
      {vehicle_id:vehicle_id,price:price,modifications:modifications,client_id:client_id,showroom_id:showroomId,dealer_id:dealer_id});
    }

    getCarDetails=async(carId:number)=>{
      return await axiosInstance.get<CarDetails>(this.baseURL+'/vehicles/'+carId).then((response)=>response.data);
    }

    Register=async (login:string, password:string, email:string, name:string, surname:string): Promise<[boolean, string, number, string]>=>{
      const resp = await axiosInstance.post('http://localhost:8080/car-shop/users/reg',{login:login, password:password, email:email, name:name, surname:surname})
      
      return [resp.data.success, resp.data.message, resp.data.id, resp.data.login]
    }

    Login = async (login:string, password:string): Promise<[boolean, string, number, string]> =>
    {
      const resp = await axiosInstance.post('http://localhost:8080/car-shop/users/login',{login:login, password:password})
      return [resp.data.success, resp.data.role, resp.data.id, resp.data.login]
    }

    GetLoggedInfo = async (login:string): Promise<[number, string, string, string, string]> =>
    {
      
      const resp = await axiosInstance.get('http://localhost:8080/car-shop/users/'+login);
      console.log(resp);
      
      return [resp.data.id, resp.data.email, resp.data.role, resp.data.name, resp.data.surname]
    }

    GetClientVehicles = async (id: number): Promise<Vehicle[]> => {
      try {
        const resp = await axios.get(`http://localhost:8080/car-shop/client/${id}/listvehicles`);

        console.log(id);
        console.log(resp.data);
    
        return resp.data.map((vehicle: any) => ({
          vehicle_id: vehicle.vehicle_id,
          brand: vehicle.brand,
          model: vehicle.model,
          modifications: vehicle.modifications,
          next_inspection_date: vehicle.next_inspection_date,
          price: vehicle.price
        }));
      } catch (error) {
        console.error("Error fetching client vehicles:", error);
        throw error;
      }
    };
  }

  export default ApiClient;