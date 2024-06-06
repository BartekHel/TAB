import React, { useContext, useEffect, useState } from 'react';
import '../css/DealersTransactions.css';
import ApiClient from '../service/ApiClient';
import userContext from '../PageInfo';
import Order from '../entitiy/Order';

const DealersTransactions = () => {
  const apiClient = new ApiClient();
  const { userId } = useContext(userContext);
  const [ orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      const orders = await apiClient.getDealerOrders(userId);
      setOrders(orders);
    } catch (err) {
      setError("Error fetching dealers transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div id="serviceOrderContainer">Loading...</div>;
  }

  if (error) {
    return <div id="serviceOrderContainer">{error}</div>;
  }

  const handleDetailsClick = (service) => {
    
  };

  return (
    <div id="serviceOrderContainer">
      <table>
        <thead>
          <tr>
            <th>Submission Date</th>
            <th>Delivery Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.submission_date}</td>
              <td>{order.delivery_date}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealersTransactions;