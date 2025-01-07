import "./industries.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHeartbeat, faGraduationCap, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Industries() {
  const industries = [
    {
      title: "Manufacturing",
      description: "Smart manufacturing solutions and industrial automation systems.",
      color: "#4CAF50", // Green for manufacturing
      icon: faLeaf,
      features: [
        "Process Automation",
        "Supply Chain Management",
        "Quality Control Systems"
      ]
    },
    {
      title: "Healthcare",
      description: "Improving patient care with streamlined workflows.",
      color: "#2196F3", // Blue for healthcare
      icon: faHeartbeat,
      features: [
        "Telemedicine",
        "Healthcare Analytics",
        "Patient Management"
      ]
    },
    {
      title: "Education",
      description: "Advancing modern education with innovative tech-driven solutions",
      color: "#FFC107", // Yellow for education
      icon: faGraduationCap,
      features: [
        "Smart Learning Platforms",
        "Online Courses",
        "Student Management"
      ]
    },
    {
      title: "E-Commerce",
      description: "Improving online shopping with smart technologies.",
      color: "#FF5722", // Orange for e-commerce
      icon: faShoppingCart,
      features: [
        "Product Recommendations",
        "Customer Analytics",
        "Payment Integration"
      ]
    },
    {
      title: "Finance & Banking",
      description: "Secure and scalable solutions for financial institutions and banking services.",
      color: "#673AB7", // Purple for finance
      icon: faLeaf, // Replace with appropriate icon if available
      features: [
        "Payment Gateway Integration",
        "Banking Software",
        "Fintech Solutions"
      ]
    },
    {
      title: "Real Estate",
      description: "Digital solutions for property management and real estate operations.",
      color: "#FF9800", // Orange for real estate
      icon: faLeaf, // Replace with appropriate icon if available
      features: [
        "Property Management",
        "Virtual Tours",
        "Listing Platforms"
      ]
    }
  ];

  return (
    <section id="Industries" className="industries-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Industries We Serve</span>
          </h2>
          <p className="section-description">
            Delivering innovative technological solutions across diverse industry verticals with expertise and precision.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div
                className="industry-icon"
                style={{ backgroundColor: `${industry.color}20`, color: industry.color }}
              >
                <FontAwesomeIcon icon={industry.icon} size="lg" />
              </div>
              <h3 className="industry-title">{industry.title}</h3>
              <p className="industry-description">{industry.description}</p>
              <ul className="industry-features">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="industry-feature">
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <p className="cta-description">Looking for solutions in your industry?</p>
          <button className="cta-button">Get Custom Solution</button>
        </div>
      </div>
    </section>
  );
}

