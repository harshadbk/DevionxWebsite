import React from "react";
import "./DevelopmentProcess.css";

const steps = [
  { id: 1, title: "Discovery & Planning", description: "Understanding your requirements, objectives, and creating a detailed project roadmap.", icon: "fas fa-search" },
  { id: 2, title: "Design & Architecture", description: "Creating detailed designs and establishing the technical architecture.", icon: "fas fa-pencil-alt" },
  { id: 3, title: "Development", description: "Agile development with regular updates and continuous integration.", icon: "fas fa-code" },
  { id: 4, title: "Testing & Quality Assurance", description: "Thorough testing and quality checks to ensure perfect functionality.", icon: "fas fa-check-circle" },
  { id: 5, title: "Deployment & Support", description: "Smooth deployment and continuous technical support post-launch.", icon: "fas fa-rocket" },
];

const DevelopmentProcess = () => {
  return (
    <div className="development-process">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="title">Our Development Process</h1>
          <p className="subtitle">We follow a systematic approach to deliver high-quality solutions that meet your business needs.</p>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={step.id} className={`step-card ${index % 2 === 0 ? "right" : "left"}`}>
                <div className="step-header">
                  <span className="step-number">Step 0{step.id}</span>
                  <i className={step.icon}></i>
                </div>
                <h2 className="step-title">{step.title}</h2>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button className="custom-button">
            Start Your Project <span>🚀</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
