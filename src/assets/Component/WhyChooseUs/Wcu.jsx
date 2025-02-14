import React from "react";
import "./Wcu.css";
import car1 from "./BMW1.png"
import car2 from "./BMW2.png"
import car3 from "./BMW3.png"
import car4 from "./BMW4.png"

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Variety of Car Brands",
      text: "We offer a wide range of automobile brands. Renting a boomcar is an option.",
      image: car1,
      position: "up",
    },
    {
      title: "Online Payment",
      text: "Quickly rent a boomcar book and pay for it online.",
      image: car2,
      position: "down",
    },
    {
      title: "Best cars",
      text: "We provide to our clients in order to provide them with the best cars.",
      image: car3,
      position: "down",
    },
    {
      title: "Easy Online Booking",
      text: "Our website enables you to easily book a car for rent online.",
      image: car4,
      position: "up",
    },
  ];

  return (
    <section className="why-choose-us">
      <h2>WHY CHOOSE US</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className={`floating-card ${card.position}`} key={index}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
