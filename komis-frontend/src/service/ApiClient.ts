import axios from "axios";
export const axiosInstance= axios.create({
     baseURL: "http://localhost:8080/car-shop",
  });

  class ApiClient{

    constructor(){        
      }

    buyCar=(carId:number,color:string,engine:string,upholstery:string)=>{
        axiosInstance.post('/purchase',{carId:carId,color:color,engine:engine,upholstery:upholstery});
    }

    Register=async (login:string, password:string, email:string, name:string, surname:string): Promise<[boolean,string]>=>{
      const resp = await axiosInstance.post('http://localhost:8080/car-shop/users/reg',{login:login, password:password, email:email, name:name, surname:surname})
      
      return [resp.data.success, resp.data.message]
    }

    Login=async (login:string, password:string): Promise<[boolean,string]>=>{
      const resp = await axiosInstance.post('http://localhost:8080/car-shop/users/login',{login:login, password:password})
      return [resp.data.success, resp.data.role]
    }

  }

  export default ApiClient;