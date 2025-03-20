import React from 'react';
import './Mainhero.css'; // For custom font if needed
import carBg from '../PublishCar/publish.jpg'; // You can use the image you uploaded

const Mainhero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(${carBg})`,
      }}
    >
      <h1 className="text-3xl md:text-5xl font-semibold text-center font-['cursive'] drop-shadow-lg">
        Welcome to <span className="text-[#ffffff]">Wheel-o-Rent</span>—where your<br />
        car earns for you, safely and effortlessly!
      </h1>

      <button className="mt-8 bg-white text-black text-lg font-semibold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
        Publish your Vehicle
      </button>
    </div>
  );
};

export default Mainhero;
