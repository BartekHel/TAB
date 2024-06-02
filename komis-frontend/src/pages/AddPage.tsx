import React, { useState } from 'react';
import "../css/AddPage.css";
import ApiAdd from '../service/ApiAdd'

const AddPage = () => {
    const apiAdd = new ApiAdd();
    const [showCarForm, setShowCarForm] = useState(false);
    const [carDetails, setCarDetails] = useState({
        brand: '',
        model: '',
        price: 0,
        showRoomId: 0
    });

    const handleNewCar = () => {
        setShowCarForm(true);
    };

    const handleInputChange = (data) => {
        const { name, value } = data.target;
        setCarDetails({
            ...carDetails,
            [name]: value
        });
    };

    const handleCarSubmit = async (data) => {
        data.preventDefault();
        try {
            const newVehicle = await apiAdd.AddVehicle(carDetails);
            console.log('New vehicle added:', newVehicle);
            setCarDetails({ brand: '', model: '', price: '', showRoomId: '' });
            setShowCarForm(false);
        } catch (error) {
            console.error("Failed to add new vehicle:", error);
        }
    };

    const handleNewEmployee = () => {
        
    };

    const handleNewSalon = () => {
        
    };

    return (
        <div className="add-page">
            <div className="dropdown">
                <button className="dropbtn">Options &#9660;</button>
                <div className="dropdown-content">
                    <a href="#" onClick={handleNewCar}>New car</a>
                    <a href="#" onClick={handleNewEmployee}>New employee</a>
                    <a href="#" onClick={handleNewSalon}>New salon</a>
                </div>
            </div>

            {showCarForm && (
                <div className="form-container">
                    <form className="car-form" onSubmit={handleCarSubmit}>
                        <label>
                            Brand:
                            <input 
                                type="text" 
                                name="brand" 
                                value={carDetails.brand} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </label>
                        <label>
                            Model:
                            <input 
                                type="text" 
                                name="model" 
                                value={carDetails.model} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </label>
                        <label>
                            Price:
                            <input 
                                type="number" 
                                name="price" 
                                value={carDetails.price} 
                                onChange={handleInputChange} 
                                step="500"
                                min="0"
                                required 
                            />
                        </label>
                        <label>
                            Showroom id:
                            <input 
                                type="number" 
                                name="showRoomId" 
                                value={carDetails.showRoomId} 
                                onChange={handleInputChange} 
                                step="1"
                                min="0"
                                required
                            />
                        </label>
                        <button type="submit">Add new car</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddPage;
