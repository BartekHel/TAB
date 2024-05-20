import React from 'react'
import '../css/ServiceOrder.css'

const ServiceOrder = () => {
  
    const ownedCars = [
        {
          name: "Audi A4",
          price: 45000,
          year: 2022,
          mileage: 20000,
          icon: "/car.svg",
        },
        {
          name: "BMW X5",
          price: 65000,
          year: 2021,
          mileage: 15000,
          icon: "/car.svg",
        },
        {
          name: "Mercedes-Benz",
          price: 50000,
          year: 2020,
          mileage: 25000,
          icon: "/car.svg",
        }]
    
    return (
      <div id="serviceOrderContainer">
        <table>
            <thead>
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Price</th>
                <th>Year</th>
                <th>Mileage</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {ownedCars.map((car, index) => (
                <tr key={index}>
                <td><img src={car.icon} alt={`${car.name} icon`} style={{ width: '24px', height: '24px' }} /></td>
                <td>{car.name}</td>
                <td>${car.price.toLocaleString()}</td>
                <td>{car.year}</td>
                <td>{car.mileage.toLocaleString()} km</td>
                <td><button>Details</button></td>
                <td><button>Order Service</button></td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    )

}

export default ServiceOrder
