import React from "react";
import './Card.css';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineGroups } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

const CardsGrid = () => {
  const cardData = [
    {
      icon: <IoShieldCheckmark />,
      title: "Integrity",
      description: "Maintaining highest ethical standards in all our dealings",
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: "Innovation",
      description: "Continuously pushing boundaries with creative solutions",
    },
    {
      icon: <MdOutlineGroups />,
      title: "Collaboration",
      description: "Working together to achieve exceptional results",
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: "Excellence",
      description: "Delivering outstanding quality in everything we do",
    },
  ];

  return (
    <div>
      <h1 className="header">Our Core Values</h1>
      <div className="cards-grid">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
