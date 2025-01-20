import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/devon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className={`navlinks ${isOpen ? 'nav-open' : ''}`}>
          <li>
            <NavLink
              to={"/"}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="item"><p>Home</p></div>
            </NavLink>
          </li>
          <li>
            <a
              href="/services"
              onClick={closeMenu}
              className={`item ${window.location.pathname === "/services" ? "active" : ""}`}
            >
              <p>Services</p>
            </a>
          </li>

          <li>
          <a
              href="/industries"
              onClick={closeMenu}
              className={`item ${window.location.pathname === "/industries" ? "active" : ""}`}
            >
              <p>Industries</p>
            </a>
          </li>
          <li>
          <a
              href="/products"
              onClick={closeMenu}
              className={`item ${window.location.pathname === "/products" ? "active" : ""}`}
            >
              <p>Products</p>
            </a>
          </li>
          <li>
          <a
              href="/portfolio"
              onClick={closeMenu}
              className={`item ${window.location.pathname === "/portfolio" ? "active" : ""}`}
            >
              <p>Portfolio</p>
            </a>
          </li>
          <li>
          <a
              href="/blogs"
              onClick={closeMenu}
              className={`item ${window.location.pathname === "/blogs" ? "active" : ""}`}
            >
              <p>Blogs</p>
            </a>
          </li>
          <li>
          <a
              href="/about"
              onClick={closeMenu}
              className={`item ${window.location.pathname === "/about" ? "active" : ""}`}
            >
              <p>About Us</p>
            </a>
          </li>
          <li>
          <a
              href="/contact"
              onClick={closeMenu}
              className={`item ${window.location.pathname === "/contact" ? "active" : ""}`}
            >
              <p>Contact Us</p>
            </a>
          </li>
        </ul>
      </nav>

      {/* Get Quote Button */}
      <ul className="hover">
      <a
              href="/get-quote"
              onClick={closeMenu}
              className={`item ${window.location.pathname === "/get-quote" ? "active" : ""}`}
            >
              <p>Get Quote</p>
            </a>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </header>
  );
};

export default Navbar;
