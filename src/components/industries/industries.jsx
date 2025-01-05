import "./industries.css";

export default function Industries() {
    const industries = [
      {
        title: "Agriculture",
        description: "Innovative farming solutions for improved crop yield.",
        color: "green",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3"></path></svg>,
        features: [
          "Smart Irrigation",
          "Soil Health Monitoring",
          "Crop Management"
        ]
      },
      {
        title: "Healthcare",
        description: "Solutions to enhance patient care and streamline medical workflows.",
        color: "blue",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8"></path></svg>,
        features: [
          "Telemedicine",
          "Healthcare Analytics",
          "Patient Management"
        ]
      },
      {
        title: "Education",
        description: "Innovative farming solutions for improved crop yield.",
        color: "green",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3"></path></svg>,
        features: [
          "Smart Irrigation",
          "Soil Health Monitoring",
          "Crop Management"
        ]
      },
      {
        title: "E-Commerce",
        description: "Solutions to enhance patient care and streamline medical workflows.",
        color: "blue",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8"></path></svg>,
        features: [
          "Telemedicine",
          "Healthcare Analytics",
          "Patient Management"
        ]
      },
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
                <div className={`industry-icon bg-${industry.color}-100`}>
                  {industry.icon}
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
  