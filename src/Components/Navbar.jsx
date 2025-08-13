import React, { useState } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          {/* <img src="./logo2.png" alt="KuberPays Logo" className="logo-img" /> */}
          Kuber Pays
        </div>

        {/* Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* <a href="#">Home</a> */}

          

          {/* Products Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("products")}
            onMouseLeave={() => setDropdownOpen(null)}
            onClick={() => toggleDropdown("products")}
          >
            <a href="#">Products ▾</a>
            <div className={`dropdown-menu ${dropdownOpen === "products" ? "show" : ""}`}>
              <a href="#">Payment Gateway</a>
              <a href="#">Invoices</a>
              <a href="#">Virtual Account</a>
              <a href="#">White Label Solutions</a>
            </div>
          </div>

          {/* About Dropdown */}
        

          {/* Solutions Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("solutions")}
            onMouseLeave={() => setDropdownOpen(null)}
            onClick={() => toggleDropdown("solutions")}
          >
            <a href="#">Solutions ▾</a>
            <div className={`dropdown-menu ${dropdownOpen === "solutions" ? "show" : ""}`}>
              <a href="#">Solutions & Features</a>
              <a href="#">Pricing</a>
              <a href="#">FAQ's</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
  <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("about")}
            onMouseLeave={() => setDropdownOpen(null)}
            onClick={() => toggleDropdown("about")}
          >
            <a href="#">Company ▾</a>
            <div className={`dropdown-menu ${dropdownOpen === "about" ? "show" : ""}`}>
              <a href="#">Company Overview</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <a href="#">Developers</a>
          <a href="#">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="nav-actions">
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
