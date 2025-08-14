import React, { useState, forwardRef } from "react";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const navigate = useNavigate();

  function redirectSignIn() {
    navigate("/login");
  }
  function redirectHome(){
    navigate("/")
  }

  return (
    <header className="navbar" id="navbar" ref={ref} style={props.customStyle}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo" onClick={redirectHome} style={{cursor:"pointer"}}>Kuber Pays</div>

        {/* Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* Products Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("products")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <a href="#" onClick={() => toggleDropdown("products")}>
              Products ▾
            </a>
            <div
              className={`dropdown-menu ${
                dropdownOpen === "products" ? "show" : ""
              }`}
              onMouseEnter={() => setDropdownOpen("products")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <a href="#">Payment Gateway</a>
              <a href="#">Invoices</a>
              <a href="#">Virtual Account</a>
              <a href="#">White Label Solutions</a>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("solutions")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <a href="#" onClick={() => toggleDropdown("solutions")}>
              Solutions ▾
            </a>
            <div
              className={`dropdown-menu ${
                dropdownOpen === "solutions" ? "show" : ""
              }`}
              onMouseEnter={() => setDropdownOpen("solutions")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <a href="#">Solutions & Features</a>
              <a href="#">Pricing</a>
              <a href="#">FAQ's</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          {/* Company Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("company")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <a href="#" onClick={() => toggleDropdown("company")}>
              Company ▾
            </a>
            <div
              className={`dropdown-menu ${
                dropdownOpen === "company" ? "show" : ""
              }`}
              onMouseEnter={() => setDropdownOpen("company")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
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
          <button className="btn btn-outline" onClick={redirectSignIn}>
            Sign In
          </button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        {/* Hamburger Menu */}
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
