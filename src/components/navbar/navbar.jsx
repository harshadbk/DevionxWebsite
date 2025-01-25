import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/devon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <nav>
        <ul className={`navlinks ${isOpen ? "nav-open" : ""}`}>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("services")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <NavLink to="/myservices" onClick={closeMenu}>
                Services
              </NavLink>
              {activeDropdown === "services" && (
                <div className="dropdown">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <NavLink to="/service1" onClick={closeMenu}>Web Development</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service2" onClick={closeMenu}>Mobile Development</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service3" onClick={closeMenu}>UI/UX Design</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service4" onClick={closeMenu}>AI & ML Solutions</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
 
          <li>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("industries")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <NavLink
                to="/industries"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                Industries
              </NavLink>
              {activeDropdown === "industries" && (
                <div className="dropdown">
                  <h3
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Our Industries
                  </h3>
                  <ul className="inner-ul">
                    <NavLink to="/industry1" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        Manufacturing
                      </li>
                    </NavLink>
                    <NavLink to="/industry2" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        Healthcare
                      </li>
                    </NavLink>
                    <NavLink to="/industry3" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        Education
                      </li>
                    </NavLink>
                    <NavLink to="/industry4" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        E-Commerce
                      </li>
                    </NavLink>
                    <NavLink to="/industry5" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        Finance & Banking
                      </li>
                    </NavLink>
                    <NavLink to="/industry6" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        Real Estate
                      </li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div
              className="item"
              onMouseEnter={() => handleDropdownToggle("products")}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                Products
              </NavLink>
              {activeDropdown === "products" && (
                <div className="dropdown">
                  <h3
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Our Products
                  </h3>
                  <ul className="inner-ul">
                    <NavLink to="/product1" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        LMS (Learning Management System)
                      </li>
                    </NavLink>
                    <NavLink to="/product2" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        ERP (Enterprise Resource Planning)
                      </li>
                    </NavLink>
                    <NavLink to="/product3" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 border-b border-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        CRM (Customer Relationship Management)
                      </li>
                    </NavLink>
                    <NavLink to="/product4" onClick={closeMenu}>
                      <li className="px-5 py-3 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500 hover:translate-x-1">
                        E-Commerce
                      </li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
      <div className="hover">
        <NavLink to="/get-quote" onClick={closeMenu}>
          Get Quote
        </NavLink>
      </div>
      <div
        className={`mobile-menu ${isOpen ? "open" : ""}`}
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
