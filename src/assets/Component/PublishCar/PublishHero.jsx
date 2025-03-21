import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './PublishHero.css';
import carBg from '../PublishCar/publish.jpg';

const Mainhero = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();

  const handlePublishClick = () => {
    if (user && user.sub) {
      const userId = user.sub.replace('|', '_'); // clean ID for URL
      navigate(`/publishform/${userId}`);
    } else {
      alert("Please log in first.");
    }
  };

  return (
    <div
      className="main-hero-container"
      style={{ backgroundImage: `url(${carBg})` }}
    >
      <h1 className="hero-heading">
        Welcome to Wheel-o-Rent—where your car earns for you, safely and effortlessly!
      </h1>
      <button className="hero-button" onClick={handlePublishClick}>
        Publish your Vehicle
      </button>
    </div>
  );
};

export default Mainhero;
