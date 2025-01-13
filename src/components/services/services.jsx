import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faPalette,
  faBrain,
  faCloud,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Develop robust, scalable, and highly efficient web applications.",
      color: "#4CAF50",
      icon: faCode,
      features: ["Responsive Design", "SEO Optimization", "Modern Tech Stack"],
    },
    {
      title: "Mobile Development",
      description: "Create robust and user-friendly mobile applications.",
      color: "#2196F3",
      icon: faMobileAlt,
      features: ["Cross-platform", "High Performance", "Custom Features"],
    },
    {
      title: "UI/UX Design",
      description: "Design visually appealing and user-centric interfaces.",
      color: "#FFC107",
      icon: faPalette,
      features: ["Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      title: "AI & ML Solutions",
      description: "AI and machine learning solutions for business growth.",
      color: "#673AB7",
      icon: faBrain,
      features: ["Predictive Analytics", "Data Analysis", "ML Models"],
    },
    {
      title: "IT Consulting",
      description: "Technology consulting to drive business growth and innovation.",
      color: "#FF5722",
      icon: faCogs,
      features: ["Tech Strategy", "Digital Transformation", "Optimization"],
    },
    {
      title: "Cloud Services",
      description: "Secure and scalable cloud solutions for modern businesses.",
      color: "#009688",
      icon: faCloud,
      features: ["Cloud Migration", "DevOps", "Cloud Security"],
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
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Our Services</h2>
          <p className="section-description">
            Discover how we deliver top-notch solutions tailored to your needs.
          </p>
        </div>

        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div
                className="service-icon"
                style={{ backgroundColor: `${service.color}20`, color: service.color }}
              >
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="service-feature">
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
          <p className="cta-description">Interested in our services?</p>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
