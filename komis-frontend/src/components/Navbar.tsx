import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import ReactLogo from '../assets/car.svg';
import  userContext  from '../PageInfo';
import ApiClient from '../service/ApiClient';
import { toast } from 'react-toastify';

const apiClient = new ApiClient();

const Navbar = () => {
 
  
  const { logged, userId, role, setLogged, setUserId, setRole, userLogin, setUserLogin } = useContext(userContext);
  const [ userName, setUserName ]=useState("");
  const [ userSurname,setUserSurname ]=useState("");

  console.log(logged, userId, role)

  const logout = () => {
    const userUndefinied ={
      logged:false,
      id:0,
      role:'',
      userLogin:''
    }
    const userJSON = JSON.stringify(userUndefinied);
    localStorage.setItem('user',userJSON);
    setLogged(false);
    setRole('');
    setUserId(0);
    setUserLogin('');
  }

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
    setUserLogin(user.login);
  }

  const [ userFromLocalStorage, setUserFromLocalStorage ] = useState(
    (JSON.parse(localStorage.getItem("user")).logged) || {}
  );
  const [ userRoleFromLocalStorage, setUserRoleFromLocalStorage ] = useState(
    (JSON.parse(localStorage.getItem("user")).role) || {}
  );

  const handleGenerateToken = async() =>{
    const token = await apiClient.GenerateToken(userId);
    alert("Your generated token:" + token);
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
          const resp = await apiClient.GetLoggedInfo(user.userLogin);
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
            role=="CLIENT" && <button className="nav-button" onClick={handleGenerateToken}>Generate token</button> 
          }
          {
            role=="CLIENT" && <Link to="/orderService" className="nav-button">Order Service</Link> 
          }
          {
            role=="REPAIRER" && <Link to="/mechanicsServices/" className="nav-button">Services</Link>
          }
          <Link to="/" className="nav-button" onClick={logout}>Logout</Link>
        
          </>
        )}
        
        
      </div>
    </nav>
  );
};

export default Navbar;
