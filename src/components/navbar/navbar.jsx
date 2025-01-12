import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/devon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="logo">
        <Link to="land" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className={`navlinks ${isOpen ? 'nav-open' : ''}`}>
          <li>
            <Link to="land" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="industries" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
              Industries
            </Link>
          </li>
          <li>
            <Link to="industries" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="portfolio1" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="portfolio1" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="getintouch" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="quote-btn">
        <Link to="freequote" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
          Get Quote
        </Link>
      </ul>
      <div className="mobile-menu" onClick={toggleMenu}>
        <div className={`box ${isOpen ? 'open' : ''}`}></div>
        <div className={`box ${isOpen ? 'open' : ''}`}></div>
        <div className={`box ${isOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Navbar;