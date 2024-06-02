import React, { useState } from 'react';
import "../css/AddPage.css";
import ApiAdd from '../service/ApiAdd'

const AddPage = () => {
    const apiAdd = new ApiAdd();
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCarForm, setShowCarForm] = useState(false);
    const [message, setMessage] = useState('');
    const [carDetails, setCarDetails] = useState({
        brand: '',
        model: '',
        price: 3000,
        showroomId: 1
    });

    const handleNewCar = () => {
        setShowCarForm(true);
        setShowDropdown(false);
        setMessage('');
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
            setCarDetails({ brand: '', model: '', price: 3000, showroomId: 1 });
            setMessage('New vehicle added!');
        } catch (error) {
            console.error("Failed to add new vehicle:", error);
        }
    };

    const handleNewEmployee = () => {
        
    };

    const handleNewSalon = () => {
        
    };

    const handleButtonHover = () => {
        setShowDropdown(true);
        setShowCarForm(false);
    };

    return (
        <div className="add-page">
            <div className="dropdown">
                <button onClick={handleButtonHover} className="dropbtn">Options &#9660;</button>
                {showDropdown && (
                    <div className="dropdown-content">
                        <a href="#" onClick={handleNewCar}>New car</a>
                        <a href="#" onClick={handleNewEmployee}>New employee</a>
                        <a href="#" onClick={handleNewSalon}>New salon</a>
                    </div>
                )}
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
                                min="3000"
                                required 
                            />
                        </label>
                        <label>
                            Showroom id:
                            <input 
                                type="number" 
                                name="showroomId" 
                                value={carDetails.showroomId} 
                                onChange={handleInputChange} 
                                step="1"
                                min="1"
                                required
                            />
                        </label>
                        <button type="submit">Add new car</button>
                    </form>
                    {message && <p id="message">{message}</p>}
                </div>
            )}
        </div>
    );
};

export default AddPage;
