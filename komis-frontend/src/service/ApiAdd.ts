import axios from "axios";
import Vehicle from "../entitiy/Vehicle";

  class ApiAdd{
    constructor(){}

    AddVehicle = async (vehicle: Vehicle) => {
      try {
        console.log(vehicle.price);
        console.log(vehicle.showroomId);
        const response = await axios.post('http://localhost:8080/car-shop/vehicles', {
          brand: vehicle.brand,
          model: vehicle.model,
          modifications: null,
          price: vehicle.price,
          showroomId: vehicle.showroomId
        });
        return response.data;
      } catch (error) {
        console.error("Error adding the vehicle:", error);
        throw error;
      }
    };
  }

  export default ApiAdd;