import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">DevionX Technologies</h3>
            <p className="footer-description">
              Turning visions into reality with innovative tech and expert services.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
              <h4 className="footer-subtitle">Our Services</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Software Development</a></li>
                <li><a href="#" className="footer-link">Web Development</a></li>
                <li><a href="#" className="footer-link">Mobile Applications</a></li>
                <li><a href="#" className="footer-link">AI &amp; ML Solutions</a></li>
                <li><a href="#" className="footer-link">IT Consulting</a></li>
              </ul>
            </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul className="footer-contact">
              <li>📍 123 Tech Street, Innovation City</li>
              <li>✉️ info@devionx.com</li>
              <li>📞 +123 456 7890</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DevionX Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
