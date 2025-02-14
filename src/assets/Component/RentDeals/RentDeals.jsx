import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import "./RentDeals.css";
import jeep from "./reversejeep.png"

const RentalDeals = () => {
  return (
    <section className="rental">
      <div className="rtitle">
        <h2>Rental Deals</h2>
        <p>
          Get Exciting Deals with booking your vehicle.
        </p>
      </div>

      <div className="rental-container">
        {/* Gray Background Section
        <div className="gray-background"></div> */}

        {/* Right Side */}
        <div className="rental-content">
          <div className="rcard">
            <div className="ricon-container"><FaSearch className="ricon" /></div>
            <div>
              <h3>Browse and select</h3>
              <p>
                Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.
              </p>
            </div>
          </div>

          <div className="rcard">
            <div className="ricon-container"><HiOutlineCalendar className="ricon" /></div>
            <div>
              <h3>Book and confirm</h3>
              <p>
                Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.
              </p>
            </div>
          </div>

          <div className="rcard">
            <div className="rental-icon-container"><BsEmojiSmile className="ricon" /></div>
            <div>
              <h3>Enjoy your ride</h3>
              <p>
                Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.
              </p>
            </div>
          </div>
        </div>

        {/* Left Side - Car Image */}
        <div className="rental-image">
          <img
            src={jeep}
            alt="Luxury Car"
          />
        </div>
      </div>
    </section>
  );
};

export default RentalDeals;
