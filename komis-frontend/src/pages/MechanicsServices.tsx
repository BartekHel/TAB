import React, { useContext, useEffect, useState } from 'react';
import '../css/ServiceOrder.css';
import ApiClient from '../service/ApiClient';
import userContext from '../PageInfo';
import Vehicle from "../entity/Vehicle";
import { Link } from 'react-router-dom';

const MechanicsServices = () => {
  const apiClient = new ApiClient();
  const { userId } = useContext(userContext);
  const [ownedCars, setOwnedCars] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const vehicles = await apiClient.GetMechanicServices(userId);
        setOwnedCars(vehicles);
      } catch (err) {
        setError("Error fetching client vehicles");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [userId]);

  const handleDateChange = async (id: number) => {
    try {
      // Handle date change logic
    } catch (err) {
      setError("Error fetching client vehicles");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id="serviceOrderContainer">
      <table>
        <thead>
          <tr>
            <th>Admission date</th>
            <th>Execution date</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ownedCars.map((service, index) => (
            <tr key={index}>
              <td>{service.admission_date}</td>
              <td>{service.execution_date == null ? 
                <input
                  type="date"
                  id="date-picker"
                  onChange={() => handleDateChange(service.service_id)}
                /> 
                : service.execution_date}
              </td>
              <td>{service.description}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MechanicsServices;