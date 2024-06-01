import axios from "axios";
import Vehicle from "../entitiy/Vehicle";

  class ApiMainPage{
    constructor(){}

    GetVehicles = async (): Promise<Vehicle[]> => {
      try {
        const resp = await axios.get('http://localhost:8080/car-shop/vehicles');
        const vehicles = resp.data;

        const allVehicles = vehicles.map((vehicle: Vehicle) => ({
          vehicle_id: vehicle.vehicle_id,
          brand: vehicle.brand,
          model: vehicle.model,
          modifications: vehicle.modifications,
          next_inspection_date: vehicle.next_inspection_date,
          price: vehicle.price
        }));
    
        return allVehicles;
    
      } catch (error) {
        console.error("Error fetching all vehicles:", error);
        throw error;
      }
    };

    GetSearchedVehicles = async (phrase: string): Promise<Vehicle[]> => {
      try {
        const resp = await axios.get(`http://localhost:8080/car-shop/vehicles/search`, {
            params: { input: phrase }
        });
        const vehicles = resp.data;

        const allVehicles = vehicles.map((vehicle: Vehicle) => ({
          vehicle_id: vehicle.vehicle_id,
          brand: vehicle.brand,
          model: vehicle.model,
          modifications: vehicle.modifications,
          next_inspection_date: vehicle.next_inspection_date,
          price: vehicle.price
        }));
   
        return allVehicles;
      } catch (error) {
        console.error("Error fetching searched vehicles:", error);
        throw error;
      }
    };
  }

  export default ApiMainPage;