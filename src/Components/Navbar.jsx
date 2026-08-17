import React, { useState, forwardRef } from "react";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
    setSubDropdownOpen(null);
  };

  const toggleSubDropdown = (submenu) => {
    setSubDropdownOpen(subDropdownOpen === submenu ? null : submenu);
  };

  const navigate = useNavigate();

  function redirectSignIn() {
    window.location.href = "https://dashboard.kuberpays.com/login";
  }

  function redirectHome() {
    navigate("/");
  }

  return (
    <header className="navbar" id="navbar" ref={ref} style={props.customStyle}>
      <div className="nav-container">

        {/* Logo */}
        <div className="logo" onClick={redirectHome} style={{ cursor: "pointer" }}>
          <img className="logo-img" src="/logos/logo2.png?v=3" alt="Kuber Pays" />
        </div>

        {/* Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>

          {/* Products */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("products")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link to="/payment-gateway" onClick={() => toggleDropdown("products")}>
              Products ▾
            </Link>
            <div className={`dropdown-menu ${dropdownOpen === "products" ? "show" : ""}`}>
              <Link to="/payment-gateway">Payment Gateway</Link>
              <Link to="/invoice">Invoice</Link>
              <Link to="/virtual-account">Virtual Account</Link>
              <Link to="/whitelabel">White Label Solutions</Link>
            </div>
          </div>

          {/* Solutions */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("solutions")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link to="/solution-and-features" onClick={() => toggleDropdown("solutions")}>
              Solutions ▾
            </Link>
            <div className={`dropdown-menu ${dropdownOpen === "solutions" ? "show" : ""}`}>
              <Link to="/solution-and-features">Solutions & Features</Link>
              <Link to="/NFC-Payment">NFC Solution</Link>
              <Link to="/merchant-service">Merchant Service Reseller</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/faqs">FAQ's</Link>
              <Link to="/terms-and-condition">Terms & Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>

          {/* Company */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("company")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link to="/company" onClick={() => toggleDropdown("company")}>
              Company ▾
            </Link>
            <div className={`dropdown-menu ${dropdownOpen === "company" ? "show" : ""}`}>
              <Link to="/company">Company Overview</Link>
            </div>
          </div>

          {/* Developers */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("developers")}
            onMouseLeave={() => {
              setDropdownOpen(null);
              setSubDropdownOpen(null);
            }}
          >
            <Link to="#" onClick={() => toggleDropdown("developers")}>
              Developers ▾
            </Link>
            <div className={`dropdown-menu ${dropdownOpen === "developers" ? "show" : ""}`}>
              <div
                className="sub-dropdown"
                onMouseEnter={() => setSubDropdownOpen("integration")}
                onMouseLeave={() => setSubDropdownOpen(null)}
              >
                <div className={`sub-dropdown-menu ${subDropdownOpen === "integration" ? "show" : ""}`}>
                  <Link to="/developer">Technology Stack</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/contact">Contact</Link>

          {/* ✅ Mobile Buttons */}
          <div className="mobile-nav">
            <Link to="https://dashboard.kuberpays.com/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link
              to="https://dashboard.kuberpays.com/signup"
              className="get-btn"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>

        </nav>

        {/* Desktop Buttons */}
        <div className="nav-actions desktop-actions">
          <button className="t-btn t-btn-outline" onClick={redirectSignIn} style={{ color: "white" }}>
            Sign In
          </button>
          <button
            className="btn btn-primary"
            onClick={() => window.location.href = "https://dashboard.kuberpays.com/signup"}
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger */}
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
});

export default Navbar;