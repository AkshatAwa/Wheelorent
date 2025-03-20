import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";
import logo from "./wor.png"; // Import logo image
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();

  const handleRenterClick = () => {
    navigate('/publishform');
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Wheel O Rent" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li onClick={handleRenterClick} style={{ cursor: "pointer" }}>
          Become a renter
        </li>
        <li>
          <a href="#">Rental deals</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Why choose us</a>
        </li>
      </ul>

      {/* LogIn & LogOut Buttons */}
      <div className="auth-buttons">
        <p>{user?.name}</p>
        {isAuthenticated ? (
          <button
            className="Log-out"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button className="Log-in" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
