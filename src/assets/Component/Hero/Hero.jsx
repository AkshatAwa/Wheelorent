import React from "react";
import "./Hero.css";
import image from "./image.png";
import logo from "./wor.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="overlay">
        <h1 className="title">
          <img src={logo} alt="Image not Loaded" />
        </h1>
        <div className="form-container">
          <label>Pickup Location</label>
          <input type="text" placeholder="Search a location" />

          <label>Drop-off Location</label>
          <input type="text" placeholder="Search a location" />

          <div className="date-container">
            <div>
              <label>Pickup Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Drop-off Date</label>
              <input type="date" />
            </div>
          </div>

          <button className="find-btn">Find a Vehicle →</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
