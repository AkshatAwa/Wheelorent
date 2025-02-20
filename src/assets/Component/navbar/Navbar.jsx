import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";
import logo from "./wor.png"; // Import logo image

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Wheel O Rent" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#">Become a renter</a>
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
        <p>{user?.picture}</p>
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
