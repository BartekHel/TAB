import React, { useContext, useEffect, useState } from 'react';
import '../css/ServiceOrder.css';
import ApiClient from '../service/ApiClient';
import userContext from '../PageInfo';
import Vehicle from "../entity/Vehicle";
import { Link, useParams } from 'react-router-dom';
 
const ServiceOrderSelected = () => {
  const { carId } = useParams();
  const apiClient = new ApiClient();
  //const { userId } = useContext(userContext);
  //const [ownedCars, setOwnedCars] = useState<Vehicle[]>([]);
  //const [loading, setLoading] = useState<boolean>(true);
  //const [error, setError] = useState<string | null>(null);

  console.log("carId");
  console.log(carId);

  /*useEffect(() => {
    const fetchClientVehicles = async () => {
      try {
        const vehicles = await apiClient.GetClientVehicles(userId);
        setOwnedCars(vehicles);
      } catch (err) {
        setError("Error fetching client vehicles");
      } finally {
        setLoading(false);
      }
    };

    fetchClientVehicles();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }*/

  return (
    <div id="serviceOrderContainer">
      
    </div>
  );
};

export default ServiceOrderSelected;