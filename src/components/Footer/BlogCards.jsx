import React from "react";
import { FaComment, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci"

import "./style.css";

const BlogCards = () => {
  return (
    <div className="main-box">
      <div className="insights-header">
        <h2>Latest Insights & News</h2>
        <p>Stay updated with the latest trends in technology and development</p>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="top-line"></div>
          </div>
          <div className="card-body">
            <p className="date">January 15, 2024</p>
            <h3 className="title">The Future of AI in Software Development</h3>
            <p className="description">
              Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.
            </p>
            <a href="#" className="read-more">
              Read More →
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="top-line"></div>
          </div>
          <div className="card-body">
            <p className="date">January 10, 2024</p>
            <h3 className="title">Modern Web Development Trends 2024</h3>
            <p className="description">
              Discover the latest frameworks, tools, and methodologies shaping the future of web development.
            </p>
            <a href="#" className="read-more">
              Read More →
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="top-line"></div>
          </div>
          <div className="card-body">
            <p className="date">January 5, 2024</p>
            <h3 className="title">Machine Learning in Mobile Apps</h3>
            <p className="description">
              How machine learning is transforming mobile application development and user experience.
            </p>
            <a href="#" className="read-more">
              Read More →
            </a>
          </div>
        </div>
      </div>

      <div className="view-all">
        <a href="#" className="view-all-btn">
          View All Posts →
        </a>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-section about">
            <h2>DevionX Technologies</h2>
            <p>
              Transforming ideas into innovative solutions through cutting-edge technology and expert development services.
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook"><FaFacebook /></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"><FaTwitter /></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"><FaLinkedin/></i>
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section services">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Software Development</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Applications</a></li>
              <li><a href="#">AI & ML Solutions</a></li>
              <li><a href="#">IT Consulting</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            
            <p>
              <i className="fas fa-map-marker-alt"><CiLocationOn /></i> 123 Tech Street, Innovation City, 12345
            </p>
            <p>
              <i className="fas fa-envelope"><FaComment/></i> info@devionx.com
            </p>
            <p>
              <i className="fas fa-phone">< FaPhoneAlt/></i> +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="hori-line"></div>
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="hori-line"></div>
        <div className="footer-bottom">
          <p>© 2024 DevionX Technologies. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogCards;
