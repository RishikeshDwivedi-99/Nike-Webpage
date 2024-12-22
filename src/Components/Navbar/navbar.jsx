import React from 'react'
import "./navbar.css";
import nikelogo from '/Nikelogo1.png';

function Navbar() {
  return (
    <nav>
        <div className="logo"> 
          <img src={nikelogo} alt="Nike-Logo" />  
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>

      </nav>
  )
}

export default Navbar;
