import React from "react";
import "./Footer.css";
import carImage from "./footcar.png"; // Ensure the image is correctly imported

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-tagline">
                    "Seamless, Affordable, and Reliable Vehicle Rentals – Your Journey, Your Way, Anytime, Anywhere."
                </h2>
                <div className="footer-car">
                    <img src={carImage} alt="Car" />
                </div>
            </div>
            <div className="footer-bottom">
                <hr className="footer-line" />
                <p>Copyright 2025 - Wheel-O-Rent, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
