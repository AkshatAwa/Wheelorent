import React from "react";
import "./navbar.css";
import logo from "./wor.png"; // Import logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Wheel O Rent" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#">Become a renter</a></li>
        <li><a href="#">Rental deals</a></li>
        <li><a href="#">How it works</a></li>
        <li><a href="#">Why choose us</a></li>
      </ul>

      {/* Right Side (Sign In & Sign Up) */}
      <div className="auth-buttons">
        <a href="#" className="Log-in">Log In </a>
      </div>
    </nav>
  );
};

export default Navbar;
