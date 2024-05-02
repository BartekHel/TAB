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

    Register=(login:string, password:string, email:string, name:string, surname:string)=>{
      axiosInstance.post('http://localhost:8080/car-shop/users/reg',{login:login, password:password, email:email, name:name, surname:surname})
      .then(response =>{
        console.log(response.data)
        alert('response w konsoli')
      })
      
    }

    Login=(login:string, password:string)=>{
      axiosInstance.post('http://localhost:8080/car-shop/users/login',{login:login, password:password})
      .then(response =>{
        console.log(response.data)
        alert('response w konsoli')
      })
    }

  }

  export default ApiClient;