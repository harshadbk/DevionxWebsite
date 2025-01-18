import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/demo" onClick={closeMenu}>
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
            <NavLink
              to={"/services"}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="item"><p>Services</p></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/industries"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="item"><p>Industries</p></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="item"><p>Products</p></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="item"><p>Portfolio</p></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="item"><p>Blogs</p></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="item"><p>About Us</p></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="item"><p>Contact Us</p></div>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Get Quote Button */}
      <ul className="hover">
        <NavLink
          to="/get-quote"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Get Quote
        </NavLink>
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
