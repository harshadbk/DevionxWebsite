import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faHeartbeat,
  faGraduationCap,
  faShoppingCart,
  faBank,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Industries.css";

export default function Industries() {
  const industries = [
    {
      title: "Manufacturing",
      description: "Smart manufacturing solutions and industrial automation systems.",
      color: "#4CAF50",
      icon: faLeaf,
      features: ["Process Automation", "Supply Chain Management", "Quality Control Systems"],
    },
    {
      title: "Healthcare",
      description: "Improving patient care with streamlined workflows.",
      color: "#2196F3",
      icon: faHeartbeat,
      features: ["Telemedicine", "Healthcare Analytics", "Patient Management"],
    },
    {
      title: "Education",
      description: "Advancing modern education with innovative tech-driven solutions.",
      color: "#FFC107",
      icon: faGraduationCap,
      features: ["Smart Learning Platforms", "Online Courses", "Student Management"],
    },
    {
      title: "E-Commerce",
      description: "Improving online shopping with smart technologies.",
      color: "#FF5722",
      icon: faShoppingCart,
      features: ["Product Recommendations", "Customer Analytics", "Payment Integration"],
    },
    {
      title: "Finance & Banking",
      description: "Secure and scalable solutions for financial institutions and banking services.",
      color: "#673AB7",
      icon: faBank,
      features: ["Payment Gateway Integration", "Banking Software", "Fintech Solutions"],
    },
    {
      title: "Real Estate",
      description: "Digital solutions for property management and real estate operations.",
      color: "#FF9800",
      icon: faBuilding,
      features: ["Property Management", "Virtual Tours", "Listing Platforms"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Industries We Serve</h2>
          <p className="section-description">
            Delivering innovative technological solutions across diverse industry verticals with expertise and precision.
          </p>
        </div>

        <Slider {...settings}>
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div
                className="industry-icon"
                style={{ backgroundColor: `${industry.color}20`, color: industry.color }}
              >
                <FontAwesomeIcon icon={industry.icon} size="2x" />
              </div>
              <h3 className="industry-title">{industry.title}</h3>
              <p className="industry-description">{industry.description}</p>
              <ul className="industry-features">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="industry-feature">
                    <svg
                      className="check-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>

        <div className="cta-section">
          <p className="cta-description">Looking for solutions in your industry?</p>
          <button className="cta-button">Get Custom Solution</button>
        </div>
      </div>
    </section>
  );
}
