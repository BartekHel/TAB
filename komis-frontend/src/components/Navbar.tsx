import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import ReactLogo from '../assets/car.svg';
import  userContext  from '../PageInfo';
import ApiClient from '../service/ApiClient';

const apiClient = new ApiClient();

const Navbar = () => {
 
  
  const { logged, userId, role, setLogged, setUserId, setRole } = useContext(userContext);
  const [ userName, setUserName ]=useState("");
  const [ userSurname,setUserSurname ]=useState("");
  const [ userFromLocalStorage, setUserFromLocalStorage ] = useState(
    (JSON.parse(localStorage.getItem("user")).logged) || {}
  );
  const [ userRoleFromLocalStorage, setUserRoleFromLocalStorage ] = useState(
    (JSON.parse(localStorage.getItem("user")).role) || {}
  );

  const userLS = localStorage.getItem("user");
  if(!userLS)
  {
    logout();
  }
  else
  {
    const user = JSON.parse(userLS);
    setLogged(user.logged);
    setRole(user.role);
    setUserId(user.id);
  }
  
  
useEffect(() => {
  setUserName("");
  setUserSurname("");

  const userJSON = localStorage.getItem("user");
  if(userJSON)
  {
    const user = JSON.parse(userJSON);
    (async () =>{
        if(user.logged)
        {
          const resp = await apiClient.GetLoggedInfo(user.id);
          if(resp[3])setUserName(resp[3]);
          if(resp[4])setUserSurname(resp[4]);
        }
  })();
  }

  
      
},[logged])

const updateUserFromLocalStorage = () => {
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON) || {};
  setUserFromLocalStorage(user);
};

const logout = () => {
  const userUndefinied ={
    logged:false,
    id:0,
    role:''
  }
  const userJSON = JSON.stringify(userUndefinied);
  localStorage.setItem('user',userJSON);
  setLogged(false);
  setRole('');
  setUserId(0);
}

// Rejestrowanie nasłuchiwania na zdarzenia storage zmian w localStorage
useEffect(() => {
  const handleStorageChange = () => {
    updateUserFromLocalStorage();
  };

  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
}, []);


  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img src={ReactLogo} alt="React Logo" className="react-logo" /> {}
      </Link>

      <div className="nav-buttons">
        <h3>{userName + " " + userSurname}</h3>
        
        {!logged ? (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
            
          </>
        ) : (
          <>
          {
            role=="CLIENT" && <Link to="/orderService" className="nav-button">Order Service</Link>
          }
          <Link to="/" className="nav-button" onClick={logout}>Logout</Link>
        
          </>
        )}
        
        
      </div>
    </nav>
  );
};

export default Navbar;
