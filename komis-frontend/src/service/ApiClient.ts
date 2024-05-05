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

    Register=async (login:string, password:string, email:string, name:string, surname:string): Promise<[boolean, string, number, string]>=>{
      const resp = await axiosInstance.post('http://localhost:8080/car-shop/users/reg',{login:login, password:password, email:email, name:name, surname:surname})
      
      return [resp.data.success, resp.data.message, resp.data.id, resp.data.login]
    }

    Login = async (login:string, password:string): Promise<[boolean, string, number, string]> =>
    {
      const resp = await axiosInstance.post('http://localhost:8080/car-shop/users/login',{login:login, password:password})
      return [resp.data.success, resp.data.role, resp.data.id, resp.data.login]
    }

    GetLoggedInfo = async (id:number): Promise<[number, string, string, string, string]> =>
    {
      const resp = await axiosInstance.get(`http://localhost:8080/car-shop/users/`+id)
      return [resp.data.id, resp.data.email, resp.data.role, resp.data.name, resp.data.surname]
    }

  }

  export default ApiClient;