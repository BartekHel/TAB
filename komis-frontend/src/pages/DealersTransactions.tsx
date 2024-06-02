import React, { useContext, useEffect, useState } from 'react';
import '../css/DealersTransactions.css';
import ApiClient from '../service/ApiClient';
import userContext from '../PageInfo';

const DealersTransactions = () => {
  const apiClient = new ApiClient();
  const { userId } = useContext(userContext);
  const [ownedCars, setOwnedCars] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      const services = await apiClient.GetMechanicServices(3);
      setOwnedCars(services);
    } catch (err) {
      setError("Error fetching dealers transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [userId]);

  if (loading) {
    return <div id="serviceOrderContainer">Loading...</div>;
  }

  if (error) {
    return <div id="serviceOrderContainer">{error}</div>;
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
              <td>{service.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealersTransactions;