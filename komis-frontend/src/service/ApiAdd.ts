import axios from "axios";
import Vehicle from "../entitiy/Vehicle";

  class ApiAdd{
    constructor(){}

    AddVehicle = async (vehicle: Vehicle) => {
      try {
        console.log(vehicle.brand);
        console.log(vehicle.model);
        console.log(vehicle.price);
        const response = await axios.post('http://localhost:8080/car-shop/vehicles', {
          brand: vehicle.brand,
          model: vehicle.model,
          modifications: null,
          price: vehicle.price,
        });
        return response.data;
      } catch (error) {
        console.error("Error adding the vehicle:", error);
        throw error;
      }
    };
  }

  export default ApiAdd;