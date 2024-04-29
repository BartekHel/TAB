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




  }

  export default ApiClient;