import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    
  return (
    <nav>
      <Link to="/">Home</Link>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar