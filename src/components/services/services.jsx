import React from "react";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faMobileAlt, 
  faPalette, 
  faBrain, 
  faCloud, 
  faCogs 
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Develop robust, scalable, and highly efficient web applications.",
      color: "#4CAF50", // Green for web development
      icon: faCode,
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Modern Tech Stack",
      ],
    },
    {
      title: "Mobile Development",
      description: "Create robust and user-friendly mobile applications.",
      color: "#2196F3", // Blue for mobile development
      icon: faMobileAlt,
      features: [
        "Cross-platform",
        "High Performance",
        "Custom Features",
      ],
    },
    {
      title: "UI/UX Design",
      description: "Design visually appealing and user-centric interfaces.",
      color: "#FFC107", // Yellow for UI/UX design
      icon: faPalette,
      features: [
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      title: "AI & ML Solutions",
      description: "AI and machine learning solutions for business growth",
      color: "#673AB7", // Purple for AI & ML
      icon: faBrain,
      features: [
        "Predictive Analytics",
        "Data Analysis",
        "Machine Learning Models",
      ],
    },
    {
      title: "IT Consulting",
      description: "Technology consulting to drive business growth and innovation.",
      color: "#FF5722", // Orange for IT Consulting
      icon: faCogs,
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "Process Optimization",
      ],
    },
    {
      title: "Cloud Services",
      description: "Secure and scalable cloud solutions for modern businesses.",
      color: "#009688", // Teal for Cloud Services
      icon: faCloud,
      features: [
        "Cloud Migration",
        "DevOps",
        "Cloud Security",
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="section-description">
            Discover how we deliver top-notch solutions tailored to your needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div
                className="service-icon"
                style={{ backgroundColor: `${service.color}20`, color: service.color }}
              >
                <FontAwesomeIcon icon={service.icon} size="lg" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <p className="cta-description">Interested in our services?</p>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
