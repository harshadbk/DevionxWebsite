import React from "react";
import { FaComment, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import "./footer.css";

const BlogCards = () => {
  return (
    <div className="main-box">
      <section className="insights-section">
  <div className="insights-section__header">
    <h2>Latest Insights & News</h2>
    <p>Stay updated with the latest trends and updates in the industry.</p>
  </div>
  <div className="insights-section__container">
    <div className="insights-section__card">
      <div className="insights-section__card-header">
        <div className="top-line"></div>
      </div>
      <div className="insights-section__card-body">
        <p className="date">Jan 1, 2025</p>
        <h3 className="title">Exciting News Title</h3>
        <p className="description">A brief description of the latest update goes here.</p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="insights-section__card">
      <div className="insights-section__card-header">
        <div className="top-line"></div>
      </div>
      <div className="insights-section__card-body">
        <p className="date">Jan 10, 2024</p>
        <h3 className="title">Modern Web Development Trends 2024</h3>
        <p className="description">
          Discover the latest frameworks, tools, and methodologies shaping the future of web development.
        </p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="insights-section__card">
      <div className="insights-section__card-header">
        <div className="top-line"></div>
      </div>
      <div className="insights-section__card-body">
        <p className="date">Jan 5, 2024</p>
        <h3 className="title">Machine Learning in Mobile Apps</h3>
        <p className="description">
          How machine learning is transforming mobile application development and user experience.
        </p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>
  </div>
  <div className="insights-section__view-all">
    <a href="#" className="insights-section__view-all-btn">View All</a>
  </div>
</section>


      {/* Footer Section */}
      <footer>
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-section about">
            <h2>DevionX Technologies</h2>
            <p>
              Transforming ideas into innovative solutions through cutting-edge technology and expert development services.
            </p>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Services */}
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

          {/* Contact Section */}
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><CiLocationOn /> 123 Tech Street, Innovation City, 12345</p>
            <p><FaComment /> info@devionx.com</p>
            <p><FaPhoneAlt /> +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="hori-line"></div>

        {/* Newsletter */}
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="hori-line"></div>

        {/* Footer Bottom */}
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
