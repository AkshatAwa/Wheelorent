import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";
import logo from "./wor.png"; // Import logo image

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

      {/* Auth Section */}
      <div className="auth-section">
        {isAuthenticated ? (
          <div className="profile-container">
            {/* User Profile Picture */}
            <img
              src={user.picture}
              alt={user.name}
              className="profile-pic"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <p>{user.name}</p>
                <button
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
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
