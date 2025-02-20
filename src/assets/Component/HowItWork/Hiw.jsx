import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import "./Hiw.css";
import jeep from "./jeep.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="title">
        <h2>How It Works</h2>
        <p>
          Our streamlined process makes it simple for you to book and confirm
          your vehicle.
        </p>
      </div>

      <div className="how-it-works-container">
        {/* Gray Background Section
        <div className="gray-background"></div> */}

        {/* Left Side */}
        <div className="how-it-works-content">
          <div className="card">
            <div className="icon-container">
              <FaSearch className="icon" />
            </div>
            <div>
              <h3>Browse and select</h3>
              <p>
                Choose from our wide range of premium cars, select the pickup
                and return dates and locations that suit you best.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="icon-container">
              <HiOutlineCalendar className="icon" />
            </div>
            <div>
              <h3>Book and confirm</h3>
              <p>
                Book your desired car with just a few clicks and receive an
                instant confirmation via email or SMS.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="icon-container">
              <BsEmojiSmile className="icon" />
            </div>
            <div>
              <h3>Enjoy your ride</h3>
              <p>
                Pick up your car at the designated location and enjoy your
                premium driving experience with our top-quality service.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Car Image */}
        <div className="how-it-works-image">
          <img src={jeep} alt="Luxury Car" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
