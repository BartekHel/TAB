import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import ReactLogo from '../assets/car.svg';
import  userContext  from '../PageInfo';
import ApiClient from '../service/ApiClient';

const apiClient = new ApiClient();

const Navbar = () => {
 
  
  const {logged, userId} = useContext(userContext);
  const [userName,setUserName]=useState("");
  const [userSurname,setUserSurname]=useState("");
  
useEffect(() => {
  setUserName("");
  setUserSurname("");
      (async () =>{
        if(logged)
        {
          const resp = await apiClient.GetLoggedInfo( userId);
          setUserName(resp[3]);
          setUserSurname(resp[4]);
        }
  })();
},[userId])

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img src={ReactLogo} alt="React Logo" className="react-logo" /> {}
      </Link>

      <div className="nav-buttons">
        <h3>{userName + " " + userSurname}</h3>
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/register" className="nav-button">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
