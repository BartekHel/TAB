import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import ReactLogo from '../assets/car.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img src={ReactLogo} alt="React Logo" className="react-logo" /> {}
      </Link>

      <div className="nav-buttons">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/register" className="nav-button">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
