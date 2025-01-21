import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/devon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className={`navlinks ${isOpen ? 'nav-open' : ''}`}>
          <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("Products")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <a href='/myservices' className={window.location.pathname === "/myservices" ? "active" : ""} onClick={closeMenu}>Services</a>
              {activeDropdown === "Products" && (
                <div className="dropdown">
                  <h3 style={{ fontWeight: "bold", textAlign: "center", color: "black" }}>Our Services</h3>
                  <ul className="inner-ul">
                    <a href="/service1">
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        Web Development
                      </li>
                    </a>
                    <a href="/service2">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Mobile Development
                    </li>
                    </a>
                    <a href="/service3">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      UI/UX Design
                    </li>
                    </a>
                    <a href="/service4">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      AI & ML Solutions
                    </li>
                    </a>
                    <a href="/service5">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      IT Consulting
                    </li>
                    </a>
                    <a href="/service6">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Cloud Services
                    </li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("Products")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <a href='/myindustries' className={window.location.pathname === "/products" ? "active" : ""} onClick={closeMenu}>Industries</a>
              {activeDropdown === "Products" && (
                <div className="dropdown">
                  <h3 style={{ fontWeight: "bold", textAlign: "center", color: "black" }}>Our Industries</h3>
                  <ul className="inner-ul">
                    <a href="/industry1">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Manufacturing
                    </li>
                    </a>
                    <a href="/industry2">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Healthcare
                    </li>
                    </a>
                    <a href="/industry3">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Education
                    </li>
                    </a>
                    <a href="/industry4">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      E-Commerce
                    </li>
                    </a>
                    <a href="/industry5">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Finance & Banking
                    </li>
                    </a>
                    <a href="/industry6">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Real Estate
                    </li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("Products")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <a href='/products' className={window.location.pathname === "/products" ? "active" : ""} onClick={closeMenu}>Products</a>
              {activeDropdown === "Products" && (
                <div className="dropdown">
                  <h3 style={{ fontWeight: "bold", textAlign: "center", color: "black" }}>Our Products</h3>
                  <ul className="inner-ul">
                    <a href="/product1">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      LMS (Learning Management System)
                    </li>
                    </a>
                    <a href="/product2">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      ERS (Enterprise Resource Planning System)
                    </li>
                    
                    </a>
                    <a href="/product3">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      CRM (Customer Relationship Management)
                    </li>
                    </a>
                    <a href="/product4">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      E-Commerce
                    </li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li><a href="/portfolio" className={window.location.pathname === "/portfolio" ? "active" : ""} onClick={closeMenu}>Portfolio</a></li>
          <li><a href="/blogs" className={window.location.pathname === "/blogs" ? "active" : ""} onClick={closeMenu}>Blogs</a></li>
          <li>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("Products")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <a className={window.location.pathname === "/products" ? "active" : ""} onClick={closeMenu}>Company</a>
              {activeDropdown === "Products" && (
                <div className="dropdown">
                  <ul className="inner-ul">
                    <a href="/about">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      About Us
                    </li>
                    </a>
                    <a href="/get-quote">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Contact Us
                    </li>
                    
                    </a>
                    <a href="/testimonials">
                    <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                      Testimonials
                    </li>
                    </a>
                    <a href="/carrier">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                     Carriers
                    </li>
                    </a>
                    <a href="/leadership">
                    <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                     Leadership
                    </li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>

      {/* Get Quote Button */}
      <div className="hover">
        <a href="/get-quote" className={window.location.pathname === "/get-quote" ? "active" : ""} onClick={closeMenu}>Get Quote</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </header>
  );
};

export default Navbar;